/**
 * MISA AMIS ENTERPRISE AGENT - CORE LOGIC
 * Kiến trúc: Object-Oriented Programming (OOP)
 * Chức năng: Xử lý tri thức chuyên sâu & Tương tác giao diện
 */

class MisaAmisKnowledgeBase {
    constructor() {
        this.knowledge = {
            intro: {
                title: "📌 1. GIỚI THIỆU TỔNG THỂ HỆ SINH THÁI MISA AMIS",
                content: `là phần mềm quản lý nhân sự do Công ty Cổ phần MISA phát triển,
                 giúp doanh nghiệp tự động hóa các quy trình nhân sự từ tuyển dụng, chấm công, tính lương đến đánh giá nhân sự. 
                 Đây là một giải pháp toàn diện được thiết kế để hỗ trợ doanh nghiệp ở nhiều quy mô, từ nhỏ đến lớn, nâng cao hiệu quả quản lý và tối ưu hóa quy trình nhân sự. 
                 Phần mềm MISA AMIS HRM hoạt động trên nền tảng cloud-based (đám mây), giúp doanh nghiệp có thể sử dụng mọi lúc, mọi nơi mà không cần cài đặt phức tạp. 
                 Đây là công cụ hữu ích giúp doanh nghiệp tối ưu quản lý nhân sự, giảm thiểu sai sót và tiết kiệm thời gian.
                 Là phần mềm quản lý nhân sự do Công ty Cổ phần MISA phát triển, giúp doanh nghiệp tự động hóa các quy trình nhân sự từ tuyển dụng, chấm công, tính lương đến đánh giá nhân sự. Đây là một giải pháp toàn diện được thiết kế để hỗ trợ doanh nghiệp ở nhiều quy mô, từ nhỏ đến lớn, nâng cao hiệu quả quản lý và tối ưu hóa quy trình nhân sự. Phần mềm MISA AMIS HRM hoạt động trên nền tảng cloud-based (đám mây), giúp doanh nghiệp có thể sử dụng mọi lúc, mọi nơi mà không cần cài đặt phức tạp. Đây là công cụ hữu ích giúp doanh nghiệp tối ưu quản lý nhân sự, giảm thiểu sai sót và tiết kiệm thời gian.
`
            },
            customer: {
                title: "📌 2. ĐỐI TƯỢNG KHÁCH HÀNG CHIẾN LƯỢC",
                content: `Hệ thống được thiết kế linh hoạt để đáp ứng nhu cầu của đa dạng loại hình tổ chức:
                <br><br><b>1. Ban lãnh đạo:</b> Ban lãnh đạo có vai trò giám sát và đưa ra quyết định chiến lược dựa trên các báo cáo tổng quan về tình hình nhân sự, hiệu suất làm việc của nhân viên và các chỉ số KPI. 
                Họ có quyền truy cập vào hệ thống để xem dữ liệu phân tích về tuyển dụng, đào tạo, lương thưởng, đánh giá hiệu suất và chế độ phúc lợi. 
                Ngoài ra, họ có thể phê duyệt các quyết định quan trọng liên quan đến nhân sự, như bổ nhiệm, thuyên chuyển hoặc sa thải nhân viên.	
                
                <br><b>2. Phòng nhân sự:</b> Bộ phận nhân sự chịu trách nhiệm quản lý toàn bộ vòng đời của nhân viên trong doanh nghiệp, từ tuyển dụng, lưu trữ hồ sơ, chấm công, tính lương, quản lý hợp đồng lao động đến đào tạo và phát triển nhân sự. 
                Họ sử dụng hệ thống để theo dõi đơn ứng tuyển, tổ chức các đợt tuyển dụng, lập kế hoạch đào tạo, chấm công tự động và đảm bảo quyền lợi về bảo hiểm xã hội, thuế thu nhập cá nhân cho nhân viên. 
                Họ cũng có vai trò tư vấn cho ban lãnh đạo về chiến lược nhân sự và phúc lợi
                <br><b>3. Nhân viên:</b> Nhân viên là người trực tiếp sử dụng hệ thống để quản lý thông tin cá nhân, theo dõi lương thưởng, đăng ký nghỉ phép, chấm công và tham gia các chương trình đào tạo. Họ có thể tra cứu hợp đồng lao động, bảo hiểm xã hội, lịch làm việc, cũng như gửi đề xuất tăng lương, khen thưởng hoặc phản hồi về công việc. Hệ thống giúp nhân viên tương tác dễ dàng với phòng nhân sự mà không cần đến trực tiếp, đồng thời minh bạch hóa các chính sách nhân sự.
                
            },
            role: {
                title: "📌 3. VAI TRÒ TRONG CHIẾN LƯỢC CHUYỂN ĐỔI SỐ",
                content: `MISA AMIS đóng vai trò là "Xương sống số" (Digital Backbone) giúp doanh nghiệp đột phá hiệu suất:
                <br><br><b>• Tự động hóa liên thông:</b> Khi Sales chốt đơn trên CRM, dữ liệu lập tức chuyển về Kế toán để xuất hóa đơn và chuyển về Kho để chuẩn bị hàng hóa.
                <br><b>• Hỗ trợ điều hành:</b> Cung cấp hệ thống báo cáo BI (Business Intelligence) trực quan, giúp CEO nắm bắt sức khỏe tài chính - nhân sự theo thời gian thực (Real-time).
                <br><b>• Tăng năng suất lao động:</b> Giảm 80% các tác vụ nhập liệu thủ công, loại bỏ sai sót do con người và tối ưu hóa chi phí vận hành.`
            },
            solution: {
                title: "📌 4. GIẢI PHÁP KỸ THUẬT & CÔNG NGHỆ LÕI",
                content: `Hệ thống vận hành trên nền tảng công nghệ tiên tiến nhất thế giới:
                <br><br><b>• Nền tảng Cloud Native:</b> Truy cập mọi lúc mọi nơi trên Web và Mobile App. 
                <br><b>• Công nghệ Microservices:</b> Giúp hệ thống hoạt động ổn định, dễ dàng nâng cấp từng thành phần mà không gây gián đoạn.
                <br><b>• Bảo mật đa lớp:</b> Đạt chuẩn ISO 27001, mã hóa dữ liệu AES-256, xác thực 2 lớp (2FA) và bảo mật IP.
                <br><b>• Hệ sinh thái mở (Open API):</b> Sẵn sàng kết nối với các hệ thống ERP ngoại, sàn TMĐT, ngân hàng điện tử và chữ ký số.`
            },
            roadmap: {
                title: "📌 5. LỘ TRÌNH TRIỂN KHAI CHUYÊN NGHIỆP",
                content: `Quy trình triển khai được chuẩn hóa qua 5 giai đoạn chặt chẽ:
                <br><br><b>GĐ 1: Khảo sát & Tư vấn:</b> Chuyên gia MISA phân tích thực trạng và đề xuất mô hình phù hợp nhất.
                <br><b>GĐ 2: Thiết lập hệ thống:</b> Cấu hình tham số nghiệp vụ, khởi tạo danh mục và phân quyền người dùng.
                <br><b>GĐ 3: Đào tạo thực hành:</b> Tổ chức các buổi workshop hướng dẫn người dùng cuối làm chủ tính năng phần mềm.
                <br><b>GĐ 4: Vận hành (Go-live):</b> Hỗ trợ trực tiếp khi đưa dữ liệu thật vào hệ thống, đảm bảo tính chính xác.
                <br><b>GĐ 5: Tổng kết & Chuyển giao:</b> Nghiệm thu dự án và chuyển sang chế độ hỗ trợ 24/7.`
            },
            architecture: {
                title: "📌 6. KIẾN TRÚC HỆ THỐNG CHI TIẾT",
                content: `MISA AMIS được xây dựng theo kiến trúc 3 lớp (3-Tier Architecture):
                <br><br><b>• Presentation Layer:</b> Giao diện người dùng hiện đại, tối ưu trải nghiệm trên mọi kích thước màn hình.
                <br><b>• Business Logic Layer:</b> Xử lý hàng nghìn kịch bản nghiệp vụ phức tạp về thuế, nhân sự và quản trị dự án theo quy định pháp luật Việt Nam.
                <br><b>• Data Layer:</b> Hệ quản trị CSDL SQL Server kết hợp với công nghệ Big Data để xử lý hàng triệu giao dịch mỗi giây.`
            },
            method: {
                title: "📌 7. PHƯƠNG PHÁP TRIỂN KHAI & HỖ TRỢ",
                content: `Chúng tôi áp dụng phương pháp kết hợp <b>Agile & Waterfall</b> để tối ưu hóa thời gian:
                <br><br><b>• Triển khai cuốn chiếu:</b> Ứng dụng nào cấp thiết (như Kế toán) sẽ được Go-live trước để giải quyết vấn đề ngay lập tức.
                <br><b>• Hệ thống hỗ trợ đa kênh:</b> Tổng đài trực tuyến, cộng đồng MISA 200.000 thành viên và học viện đào tạo online (MISA Academy).`
            },
            business: {
                title: "📌 8. CÁC PHÂN HỆ NGHIỆP VỤ CHUYÊN SÂU",
                content: `Hệ thống tập trung vào 4 trụ cột cốt yếu:
                <br><br><b>1. AMIS Kế toán:</b> Kết nối ngân hàng điện tử, tự động hóa 80% khâu nhập liệu hóa đơn đầu vào.
                <br><b>2. AMIS HRM:</b> Quản trị toàn diện vòng đời nhân sự (Tuyển dụng - Đào tạo - Chấm công - Lương - Thuế - Bảo hiểm).
                <br><b>3. AMIS CRM:</b> Quản lý phễu bán hàng, tự động chăm sóc khách hàng và dự báo doanh thu chính xác.
                <br><b>4. AMIS Công việc:</b> Loại bỏ lãng phí thời gian, theo dõi tiến độ dự án trực quan qua biểu đồ Gantt/Kanban.`
            },
            advice: {
                title: "📌 9. KHUYẾN NGHỊ TỪ CHUYÊN GIA",
                content: `Để chuyển đổi số thành công với MISA AMIS, doanh nghiệp cần lưu ý:
                <br><br><b>• Tư duy "Số hóa quy trình":</b> Không chỉ đưa dữ liệu lên máy tính, mà cần chuẩn hóa quy trình làm việc trước khi áp dụng.
                <br><b>• Sự quyết tâm của lãnh đạo:</b> Chuyển đổi số chỉ thành công khi có sự cam kết và thúc đẩy mạnh mẽ từ Ban Giám đốc.
                <br><b>• Triển khai từng bước:</b> Nên bắt đầu từ những module quan trọng nhất, sau đó mới mở rộng để tránh gây sốc cho đội ngũ nhân viên.`
            }
        };

        // Từ điển Intent Mapping
        this.intentMap = {
            intro: ["giới thiệu", "là gì", "tổng quan", "thông tin", "misa amis"],
            customer: ["khách hàng", "đối tượng", "ai dùng", "doanh nghiệp", "sme"],
            role: ["vai trò", "lợi ích", "tại sao", "chuyển đổi số", "tác dụng"],
            solution: ["giải pháp", "kỹ thuật", "công nghệ", "an toàn", "bảo mật", "cloud"],
            roadmap: ["lộ trình", "quy trình", "triển khai", "các bước", "thời gian"],
            architecture: ["kiến trúc", "mô hình", "layer", "cấu trúc", "hệ thống"],
            method: ["phương pháp", "hỗ trợ", "triển khai thế nào"],
            business: ["nghiệp vụ", "kế toán", "nhân sự", "crm", "bán hàng", "chức năng"],
            advice: ["khuyến nghị", "lời khuyên", "lưu ý", "chiến lược"]
        };
    }

    matchIntent(text) {
        const input = text.toLowerCase();
        for (let key in this.intentMap) {
            if (this.intentMap[key].some(keyword => input.includes(keyword))) {
                return key;
            }
        }
        return null;
    }
}

class MisaChatApp {
    constructor() {
        this.kb = new MisaAmisKnowledgeBase();
        this.chatBox = document.getElementById('chat-box');
        this.userInput = document.getElementById('user-input');
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalContent = document.getElementById('modal-content');
    }

    // Xử lý gửi tin nhắn
    sendMessage(manualText = null) {
        const text = manualText || this.userInput.value.trim();
        if (!text) return;

        this.appendMessage('user', text);
        this.userInput.value = '';

        // Giả lập hiệu ứng bot đang suy nghĩ
        setTimeout(() => {
            const intent = this.kb.matchIntent(text);
            let response = "";

            if (intent) {
                const data = this.kb.knowledge[intent];
                response = `<strong>${data.title}</strong><br><br>${data.content}`;
            } else {
                response = "❗ Hệ thống chưa nhận diện được yêu cầu này. Bạn vui lòng sử dụng các nút danh mục bên trái hoặc hỏi về: Giới thiệu, Lộ trình, Nghiệp vụ, Kiến trúc...";
            }

            this.appendMessage('bot', response);
        }, 600);
    }

    appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-msg`;
        msgDiv.innerHTML = text;
        this.chatBox.appendChild(msgDiv);
        this.chatBox.scrollTop = this.chatBox.scrollHeight;
    }

    // Logic cho Modals nghiệp vụ (Demo)
    openModal(type) {
        this.modalOverlay.style.display = 'block';
        let html = "";

        switch(type) {
            case 'accounting':
                html = `<h3>📊 Nghiệp vụ Kế toán - Hóa đơn</h3>
                        <p>Mô phỏng tính toán hóa đơn tự động của AMIS Kế toán:</p>
                        <input type="number" id="qty" placeholder="Số lượng sản phẩm">
                        <input type="number" id="price" placeholder="Đơn giá (VNĐ)">
                        <button onclick="app.calculateAccounting()">Tính toán</button>`;
                break;
            case 'hr':
                html = `<h3>👨‍💼 Quản trị Nhân sự - Tính lương</h3>
                        <p>Mô phỏng bảng tính lương tự động (NET):</p>
                        <input type="number" id="salary" placeholder="Lương cơ bản">
                        <input type="number" id="bonus" placeholder="Thưởng KPI">
                        <button onclick="app.calculatePayroll()">Tính lương thực nhận</button>`;
                break;
            case 'crm':
                html = `<h3>📞 Quản lý CRM - Khách hàng</h3>
                        <p>Lưu trữ thông tin khách hàng tiềm năng:</p>
                        <input type="text" id="c-name" placeholder="Họ và tên khách hàng">
                        <input type="text" id="c-phone" placeholder="Số điện thoại">
                        <button onclick="app.saveCustomer()">Lưu vào CRM</button>
                        <div id="crm-result" style="margin-top:10px; font-size:14px; color:green;"></div>`;
                break;
        }
        this.modalContent.innerHTML = html;
    }

    closeModal() {
        this.modalOverlay.style.display = 'none';
    }

    // Các hàm tính toán nghiệp vụ
    calculateAccounting() {
        const q = document.getElementById('qty').value;
        const p = document.getElementById('price').value;
        if(q && p) alert(`Tổng tiền hóa đơn: ${(q * p).toLocaleString()} VNĐ\n(Dữ liệu đã được đồng bộ sang phân hệ Thuế)`);
    }

    calculatePayroll() {
        const s = parseInt(document.getElementById('salary').value) || 0;
        const b = parseInt(document.getElementById('bonus').value) || 0;
        const net = (s + b) - (s * 0.105); // Trừ 10.5% BHXH
        alert(`Lương thực nhận (sau khi trừ 10.5% BHXH): ${net.toLocaleString()} VNĐ`);
    }

    saveCustomer() {
        const n = document.getElementById('c-name').value;
        const p = document.getElementById('c-phone').value;
        if(n && p) document.getElementById('crm-result').innerText = `✅ Đã tạo cơ hội bán hàng cho khách hàng: ${n}`;
    }
}

// Khởi tạo ứng dụng toàn cục
const app = new MisaChatApp();

// Các hàm cầu nối (Bridge functions) để gọi từ HTML
function sendMessage() { app.sendMessage(); }
function sendTopic(topic) { app.sendMessage(topic); }
function handleEnter(e) { if (e.key === 'Enter') app.sendMessage(); }
function openModal(type) { app.openModal(type); }
function closeModal() { app.closeModal(); }