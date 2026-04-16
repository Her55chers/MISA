const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;

if (!TAVILY_API_KEY) {
    console.error("Chưa tìm thấy TAVILY_API_KEY trong file .env");
}

async function searchInternet(query) {
    try {
        // Dòng này cực kỳ quan trọng để debug
        console.log(`[Tavily] Đang tìm kiếm: ${query}`); 

        const response = await fetch("https://api.tavily.com/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                api_key: process.env.TAVILY_API_KEY,
                query: query,
                search_depth: "basic",
                max_results: 3
            })
        });

        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            console.log("Tavily đã trả về kết quả.");
            return data.results.map(result => `- ${result.title}: ${result.content}`).join("\n");
        }
        
        console.log("Tavily không tìm thấy thông tin.");
        return "Không có dữ liệu mới từ internet.";
    } catch (error) {
        console.error("Lỗi Tavily API:", error.message);
        return "Dịch vụ tìm kiếm đang tạm gián đoạn.";
    }
}

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000; // đổi cổng nếu muốn
const MISA_KNOWLEDGE = `
MISA AMIS là hệ sinh thái quản trị doanh nghiệp hội tụ các phân hệ: 
- Kế toán: Tự động hóa nhập liệu, kết nối ngân hàng.
- HRM: Quản lý nhân sự, chấm công, tính lương.
- CRM: Quản lý khách hàng, bán hàng.
- Công việc: Quản lý tiến độ dự án.
Kiến trúc 3 lớp: Presentation, Business Logic, Data Layer.
Triển khai theo phương pháp Agile & Waterfall.
`;

app.use(cors());
app.use(express.json());

// Route xử lý tin nhắn chat
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        console.log("-----------------------------------------");
        console.log("Nhận tin nhắn:", userMessage);

        // 1. Gọi Tavily và ĐỢI kết quả
        const internetData = await searchInternet(userMessage); 
        
        // 2. Nhào nặn Prompt
        const enhancedPrompt = `Bạn là trợ lý ảo MISA AMIS. 
Hãy trả lời dựa trên sự kết hợp giữa tài liệu nội bộ và thông tin mới nhất từ Internet dưới đây.

--- TÀI LIỆU NỘI BỘ ---
${MISA_KNOWLEDGE}

--- THÔNG TIN MỚI TỪ INTERNET ---
${internetData}

--- CÂU HỎI ---
Người dùng hỏi: ${userMessage}
Trả lời bằng tiếng Việt, súc tích và tự nhiên:`;

        // 3. Gọi Ollama
        console.log(" Đang xử lý câu trả lời...");
        const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'llama3.2:1b',
                prompt: enhancedPrompt,
                stream: false,
            }),
        });

        const data = await ollamaResponse.json();
        console.log("Đã phản hồi.");
        res.json({ reply: data.response });

    } catch (error) {
        console.error("Lỗi xử lý:", error);
        res.status(500).json({ error: "Lỗi kết nối hoặc xử lý dữ liệu" });
    }
});

app.listen(PORT, () => {
    console.log(`Server MISA AMIS đang chạy`);
});