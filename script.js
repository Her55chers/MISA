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
<br><b>2. Phòng nhân sự :</b> Bộ phận nhân sự chịu trách nhiệm quản lý toàn bộ vòng đời của nhân viên trong doanh nghiệp, từ tuyển dụng, lưu trữ hồ sơ, chấm công, tính lương, quản lý hợp đồng lao động đến đào tạo và phát triển nhân sự. 
                Họ sử dụng hệ thống để theo dõi đơn ứng tuyển, tổ chức các đợt tuyển dụng, lập kế hoạch đào tạo, chấm công tự động và đảm bảo quyền lợi về bảo hiểm xã hội, thuế thu nhập cá nhân cho nhân viên. 
                Họ cũng có vai trò tư vấn cho ban lãnh đạo về chiến lược nhân sự và phúc lợi
                <br><b>3. Nhân Viên:</b> Nhân viên là người trực tiếp sử dụng hệ thống để quản lý thông tin cá nhân, theo dõi lương thưởng, đăng ký nghỉ phép, chấm công và tham gia các chương trình đào tạo. Họ có thể tra cứu hợp đồng lao động, bảo hiểm xã hội, lịch làm việc, cũng như gửi đề xuất tăng lương, khen thưởng hoặc phản hồi về công việc. Hệ thống giúp nhân viên tương tác dễ dàng với phòng nhân sự mà không cần đến trực tiếp, đồng thời minh bạch hóa các chính sách nhân sự
                <br><b>4. Quản lý trực tiếp:</b> Quản lý trực tiếp đóng vai trò giám sát và hỗ trợ nhân viên trong nhóm hoặc bộ phận của mình. Họ sử dụng hệ thống để theo dõi hiệu suất làm việc, đánh giá nhân viên theo KPI hoặc OKR, lập kế hoạch phát triển nghề nghiệp, phê duyệt đơn nghỉ phép, xác nhận bảng công và đề xuất lương thưởng. Họ cũng có thể đề xuất đào tạo cho nhân viên nhằm nâng cao năng lực chuyên môn, giúp doanh nghiệp tối ưu hóa nguồn nhân lực.
                <br><b>5. Ứng viên:</b> Ứng viên là những người đang tìm kiếm cơ hội làm việc tại doanh nghiệp. Họ sử dụng hệ thống để tra cứu các vị trí tuyển dụng, gửi CV, theo dõi trạng thái hồ sơ ứng tuyển và nhận phản hồi từ nhà tuyển dụng. Hệ thống giúp tự động hóa quy trình tuyển dụng, cho phép ứng viên tham gia các vòng phỏng vấn trực tuyến, làm bài kiểm tra năng lực, ký hợp đồng điện tử và nhận thông báo về kết quả ứng tuyển một cách nhanh chóng.
                <br><b>6. Đối tác:</b> Đối tác là các bên cung cấp dịch vụ hoặc sản phẩm cho doanh nghiệp, bao gồm công ty tuyển dụng, nhà cung cấp bảo hiểm, ngân hàng thanh toán lương, đơn vị cung cấp dịch vụ đào tạo hoặc các nhà cung cấp nguyên liệu sản xuất. Họ sử dụng hệ thống để tiếp nhận đơn hàng, hợp đồng, cung cấp dịch vụ hoặc hỗ trợ các hoạt động liên quan đến nhân sự như bảo hiểm, phúc lợi.
<br><b>7. Khách hàng nội bộ :</b> Khách hàng nội bộ là các bộ phận khác trong doanh nghiệp có liên quan đến hoạt động nhân sự. Ví dụ, kế toán sử dụng hệ thống để theo dõi bảng lương, tính thuế thu nhập cá nhân; phòng đào tạo theo dõi tiến trình học tập của nhân viên; bộ phận tài chính kiểm soát ngân sách dành cho nhân sự.`
            },
            role: {
                title: "📌 3. VAI TRÒ TRONG CHIẾN LƯỢC CHUYỂN ĐỔI SỐ",
                content: `Chuyển đổi số đã trở thành điều tất yếu trong kỷ nguyên 4.0, càng ngày càng phát triển. Đây không phải là sự lựa chọn nữa mà đó là điều cần thiết để duy trì sự cạnh tranh. Có tới 93% các công ty đồng ý rằng, công nghệ số là yếu tố cần thiết giúp doanh nghiệp có thể đạt được mục tiêu chuyển đổi của họ. Hiện nay các công cụ hỗ trợ chuyển đổi số 4.0 đều được thiết kế để đáp ứng mọi nhu cầu của khách hàng và các tổ chức cần tìm ra được các giải pháp phù hợp nhằm nâng cao trải nghiệm và đáp ứng các nhu cầu của khách hàng ở hiện tại và tương lai ngày càng tốt hơn.
                <br><b>1. Dữ liệu được cung cấp chi tiết: </b>
                Giúp các nhân sự của doanh nghiệp có thể truy cập vào lượng dữ liệu khổng lồ. Họ dễ dàng theo dõi các chỉ số khác nhau như: hiệu quả của quy trình, tỷ lệ chuyển đổi sở các kênh, hành trình khách hàng, sự hài lòng khách hàng và một số các chỉ số  khác nữa.
                Không chỉ giúp doanh nghiệp có thể sắp xếp dữ liệu trực quan và truy cập dễ dàng mà còn giúp việc đưa ra những quyết định chính xác hơn nhờ việc thống kế và phân tích những dữ liệu mà công ty hiện có.
                <br><b>2. Doanh nghiệp duy trì và khẳng định vị trí: </b>
                Chuyển đổi số đã trở thành điều tất yếu trong kỷ nguyên 4.0, càng ngày càng phát triển. Đây không phải là sự lựa chọn nữa mà đó là điều cần thiết để duy trì sự cạnh tranh. Theo Deborah Ancona giáo sư quản lý tại MIT – Viện công nghệ Massachusetts và là người sáng lập trung tâm lãnh đạo cho biết: “Sự thúc đẩy chuyển đổi kỹ thuật số đang tăng tốc trong một thế giới mà các công ty ngày càng cạnh tranh về sự đổi mới, tốc độ và khả năng thích ứng”.
                <br><b>3. Tối ưu trải nghiệm của khách hàng: </b>
Công nghệ kỹ thuật số sẽ giúp doanh nghiệp có các thông tin chi tiết về lịch sử dữ liệu của khách hàng gồm các tương tác về sở thích cũng như mức độ tương tác của họ. Hơn nữa, công nghệ cũng đưa ra các phương tiện nhằm phân tích dữ liệu một cách nhanh chóng nhằm tối ưu tốt nhất trải nghiệm khách hàng. Giúp doanh nghiệp dễ dàng đáp ứng những mong muốn và nhu cầu của khách hàng lớn hơn.
                <br><b>4. Tăng cường liên kết giữa các phòng ban: </b>
                Chuyển đổi số trong doanh nghiệp giúp các nhân sự ở các bộ phận có thể giao tiếp tốt và thường xuyên với nhau hơn. Chính nhờ việc sử dụng các nền tảng quản trị doanh nghiệp hợp nhất, điều này giúp các phòng ban có thể dễ dàng chia sẻ nhiều loại thông tin, tài liệu ở mọi lúc mọi nơi. Chính vì thế mà khả năng cộng tác giữa các phòng ban được đẩy mạnh.
                <br><b>5. Nâng cao hiệu quả hoạt động và tối ưu chi phí: </b>
                Chuyển đổi số giúp doanh nghiệp tối ưu được chi phí trong các hoạt động của mình. Ví dụ như, việc sử dụng app để quản lý kho bãi, doanh nghiệp sẽ tiết kiệm được rất nhiều chi phí trong việc phải kiểm kê sản phẩm mà nắm được tính hình kho bãi một cách nhanh nhất. Dữ liệu sẽ được lưu trữ trên điện toán đám mây và có thể quản lý được bởi nhà cung cấp bên ngoài, Điều này giúp nhân sự có nhiều thời gian hơn để tập trung vào làm những dự án, công việc khác, mang lại được nhiều giá trị hơn.
                Nhìn chung là khi áp dụng doanh nghiệp có thể dễ dàng thực hiện các tác vụ và quy trình công việc một cách tự động, giúp tiết kiệm được nhiều thời gian. Ví dụ: Ứng dụng quản lý công việc để tối ưu công tác vận hành, quy trình, báo cáo nhanh chóng, sử dụng các phần mềm để quản lý tài chính, nhân sự, dữ liệu khách hàng,..
`
            },
            solution: {
                title: "📌 4. GIẢI PHÁP KỸ THUẬT & NGHIỆP VỤ",
                content: `Giải pháp cốt lõi là xây dựng một "hệ sinh thái" dữ liệu thay vì các phần mềm rời rạc. Điều này giải quyết bài toán "ốc đảo thông tin" (information silos) mà nhiều doanh nghiệp gặp phải.
                •<br><b>AMIS Tuyển dụng:</b> Tự động hóa quy trình từ khâu lập kế hoạch đến khi tiếp nhận nhân sự. Điểm nổi bật là tính năng AI sơ tuyển giúp phân tích và chấm điểm hồ sơ ứng viên dựa trên mô tả công việc (JD), giúp bộ phận HR tiết kiệm 80% thời gian lọc hồ sơ. Hệ thống kết nối đa kênh (LinkedIn, Facebook, Vietnamworks...) để thu hút nhân tài về một cơ sở dữ liệu duy nhất.
•<br><b>AMIS Thông tin nhân sự:</b> Xây dựng kho dữ liệu số tập trung. Quản lý từ thông tin cá nhân, hợp đồng lao động, quá trình công tác đến khen thưởng, kỷ luật. Đặc biệt, giải pháp hỗ trợ quy hoạch nhân sự kế thừa, giúp doanh nghiệp nhận diện nhân tài tiềm năng để bồi dưỡng cho các vị trí quản lý tương lai.
                •<br><b>AMIS Chấm công:</b> Hỗ trợ đa dạng hình thức (vân tay, nhận diện khuôn mặt, GPS qua di động). Hệ thống tự động tổng hợp bảng công, cho phép nhân viên tự theo dõi và gửi đơn từ (nghỉ phép, đi muộn) ngay trên App, giảm thiểu tranh chấp và sai sót dữ liệu.
                •<br><b>AMIS Tiền lương:</b> Tự động hóa bảng lương phức tạp dựa trên dữ liệu công, doanh số và các khoản giảm trừ. Hỗ trợ gửi phiếu lương (payslip) bảo mật qua email hoặc ứng dụng di động cho nhân viên.
                •<br><b>AMIS Thuế TNCN & BHXH:</b> Kết nối trực tuyến với cổng thông tin điện tử của cơ quan Thuế và Bảo hiểm xã hội. Cho phép kê khai, nộp hồ sơ và theo dõi tiến độ xử lý ngay trên phần mềm, đảm bảo tính tuân thủ pháp luật.
                •<br><b>AMIS Đánh giá & Mục tiêu:</b> Triển khai các phương pháp hiện đại như KPI và OKR. Hệ thống cho phép đánh giá đa chiều (360 độ), giúp phản ánh khách quan năng lực nhân viên, từ đó làm căn cứ xét thưởng và đào tạo.
                
`
            },
            roadmap: {
                title: "📌 5. LỘ TRÌNH TRIỂN KHAI CHUYÊN NGHIỆP",
                content: `Quy trình triển khai được chuẩn hóa qua 5 giai đoạn chặt chẽ:
                <br><b>Giai đoạn 1: Khảo sát & Phân tích (Tuần 1):</b> Chuyên gia MISA làm việc với Doanh nghiệp để khảo sát quy trình đặc thù, xác định các điểm nghẽn (pain points) và thống nhất các chỉ tiêu đo lường hiệu quả (KPI dự án).
                <br><b>Giai đoạn 2: Cấu hình & Chuyển đổi dữ liệu (Tuần 2-4):</b> Thiết lập hệ thống theo yêu cầu thực tế. Thực hiện làm sạch dữ liệu cũ từ Excel/giấy tờ và import vào hệ thống mới. Giai đoạn này cũng bao gồm việc đào tạo chuyên sâu cho đội ngũ quản trị hệ thống (Key Users).
                <br><b>Giai đoạn 3: Đào tạo người dùng & Vận hành thử (Tuần 5):</b> Tổ chức các buổi hướng dẫn cho toàn bộ nhân viên công ty cách sử dụng App và Web. Chạy song song hệ thống mới và cũ để kiểm chứng độ chính xác.
<br><b>Giai đoạn 4: Nghiệm thu & Hỗ trợ sau triển khai (Tuần 6):</b> Chính thức đưa vào vận hành (Go-live). Đội ngũ kỹ thuật tực trực để xử lý các vấn đề phát sinh và bàn giao tài liệu hướng dẫn vận hành chuẩn hóa cho Doanh nghiệp.
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
                <br><br><b>1. AMIS Tuyển dụng:</b> Đây là một công cụ hữu ích giúp doanh nghiệp nâng cao thương hiệu tuyển dụng, thu hút nhân sự tiềm năng và xây dựng một quy trình tuyển dụng chuyên nghiệp, hiệu quả hơn. AMIS Tuyển dụng không chỉ giúp doanh nghiệp nâng cao thương hiệu tuyển dụng mà còn thu hút và giữ chân nhiều ứng viên tiềm năng hơn, giúp doanh nghiệp có nhiều lựa chọn nhân sự chất lượng hơn.
<br><br><b>2. AMIS HR:</b> Hệ thống AMIS cung cấp một bức tranh tổng thể về tình hình nhân sự, hỗ trợ lãnh đạo trong việc ra quyết định nhanh chóng và chính xác. Từ việc lưu trữ hồ sơ nhân sự đa chiều, quản lý quá trình công tác và đào tạo, cho đến quy hoạch và bổ nhiệm cán bộ, tất cả đều được số hóa và tự động hóa. Điều này không chỉ giúp giảm thiểu công việc giấy tờ mà còn đảm bảo tính minh bạch, nhất quán trong quy trình quản lý nhân sự.
                <br><br><b>3. AMIS Mục tiêu:</b> Trong môi trường kinh doanh đầy cạnh tranh, việc thiết lập và theo dõi mục tiêu là yếu tố then chốt giúp doanh nghiệp phát triển bền vững. AMIS Mục Tiêu ra đời với sứ mệnh hỗ trợ doanh nghiệp xây dựng, triển khai và giám sát mục tiêu một cách khoa học, nhanh chóng và chính xác. Nhờ vào công nghệ số hóa và tự động hóa, hệ thống này giúp các nhà quản lý kiểm soát tiến độ công việc, kịp thời phát hiện các điểm tắc nghẽn và tối ưu hóa hiệu suất làm việc của đội ngũ nhân sự.
                <br><br><b>4. AMIS Đánh giá:</b> Đánh giá nhân sự là một trong những hoạt động quan trọng giúp doanh nghiệp tối ưu hóa nguồn lực, nâng cao hiệu suất làm việc và xây dựng một môi trường công bằng, minh bạch. Tuy nhiên, quá trình này thường gặp phải nhiều khó khăn như đánh giá cảm tính, thiếu công cụ hỗ trợ đo lường khách quan hay mất nhiều thời gian tổng hợp, phân tích. AMIS Đánh Giá ra đời nhằm giải quyết những vấn đề này, giúp doanh nghiệp số hóa và tự động hóa quy trình đánh giá nhân sự, đảm bảo sự chính xác, minh bạch và hiệu quả cao nhất.
                <br><br><b>5. AMIS Chấm công:</b> AMIS Chấm Công – Giải pháp quản lý chấm công toàn diện, chính xác và hiệu quả. Trong bối cảnh doanh nghiệp ngày càng phát triển và yêu cầu về tính minh bạch, chính xác trong chấm công ngày càng cao, phần mềm AMIS Chấm Công ra đời như một giải pháp tối ưu giúp tự động hóa toàn bộ quy trình chấm công, giảm tải công việc hành chính và nâng cao hiệu suất quản lý nhân sự. 
                <br><br><b>6. AMIS Tiền lương:</b> AMIS Tiền lương là một phần mềm thuộc hệ sinh thái AMIS HRM (Quản trị nhân sự) của MISA, giúp doanh nghiệp tự động hóa quy trình tính lương, từ việc tổng hợp dữ liệu đến xử lý lương và lập bảng lương chi tiết. Đây là một công cụ hữu ích giúp bộ phận nhân sự tiết kiệm thời gian, giảm sai sót và đảm bảo tính minh bạch trong việc trả lương cho nhân viên.
<br><br><b>7. AMIS BHXH:</b> AMIS BHXH là phần mềm hỗ trợ doanh nghiệp điện tử hóa hoàn toàn 19 thủ tục kê khai, điều chỉnh bảo hiểm xã hội (BHXH), giúp tiết kiệm thời gian và tối ưu quy trình quản lý. Với AMIS BHXH, doanh nghiệp có thể nhập liệu, tính toán số tiền đóng BHXH một cách chính xác, giảm thiểu sai sót khi kê khai hoặc chi trả chế độ BHXH. Bên cạnh đó, phần mềm này còn giúp phát hiện sai lệch với dữ liệu của cơ quan BHXH, đảm bảo tính minh bạch và đồng nhất.
                <br><br><b>8. AMIS TNCN:</b> AMIS Thuế TNCN là phần mềm hỗ trợ doanh nghiệp trong việc kê khai, tính toán và quyết toán thuế thu nhập cá nhân (TNCN) một cách tự động, chính xác và nhanh chóng. Với khả năng đồng bộ dữ liệu từ hệ thống nhân sự, AMIS Thuế TNCN giúp doanh nghiệp dễ dàng quản lý thông tin thuế của từng cá nhân, tự động tính toán số thuế phải nộp theo từng mức thu nhập, hạn chế sai sót và tiết kiệm thời gian xử lý. `
            },
            advice: {
                title: "📌 9. KHUYẾN NGHỊ TỪ CHUYÊN GIA",
                content: `<br><b> Xác định mục tiêu rõ ràng</b>
                Trước khi tiến hành triển khai phần mềm quản lý chuỗi cung ứng cho doanh nghiệp mình, công ty khách phải xác định rõ được các mục tiêu và kỳ vọng đối với dự án triển khai phần mềm này. Phải biết được lợi ích khi triển khai phần mềm đó, những thách thức, khó khăn có thể gặp phải khi áp dụng phần mềm vào quá trình kinh doanh.
                <br><b>Đảm bảo cơ sở hạ tầng công nghệ thông tin</b>
                Hạ tầng công nghệ thông tin của công ty khách phải được trang bị đầy đủ, kịp thời để quá trình vận hành phần mềm được diễn ra trơn tru. Một số thành phần về cơ sở hạ tầng công nghệ thông tin cần có như: Thiết bị máy tính, các thiết bị hỗ trợ kết nối với môi trường internet, LAN, WAN, máy chủ (nếu có)
                <br><b>Lựa chọn phương án triển khai hợp lý</b>
                Dựa trên mức độ phức tạp của hệ thống và khả năng tiếp cận công nghệ của nhân sự, EuroStyle có thể cân nhắc giữa 2 gói Standard và Professional. Trước khi đó, doanh nghiệp nên trải nghiệm dùng thử miễn phí để có cái nhìn tổng quan về những tính năng mà phần mềm Misa Amis Hrm cung cấp. Từ đó có thể lựa chọn được phương án phù hợp với tình hình và nhu cầu của doanh nghiệp.
                <br><b>Lựa chọn quản lý dự án phù hợp</b>
Quản lý Misa Amis Hrm là một quá trình phức tạp, ẩn chứa nhiều rủi ro nếu doanh nghiệp không quản lý, thậm chí có thể ảnh hưởng đến toàn bộ hoạt động kinh doanh. Do đó, công việc này đòi hỏi người quản lý phù hợp, tiêu chuẩn cao. Quản lý dự án có thể là lãnh đạo doanh nghiệp, có thể là trưởng bộ phận IT cũng có thể là bất kỳ thành viên nào trong doanh nghiệp. Các tiêu chí cơ bản để lựa chọn một quản lý dự án bao gồm: hiểu biết về các nghiệp vụ bao quát của doanh nghiệp, có kinh nghiệm triển khai, tầm nhìn, kỹ năng giải quyết tình huống phát sinh, chịu áp lực công việc tốt, có tiếng nói trong doanh nghiệp…
                <br><b>Đào tạo cho nhân viên</b>
                Đào tạo và nâng cao nhận thức là bước quan trọng giúp doanh nghiệp triển khai Misa Amis Hrm thành công. Để quá trình đào tạo đảm bảo hiệu quả, lãnh đạo doanh nghiệp cần xây dựng một lộ trình giảng dạy bài bản, chuyên nghiệp bag có chế độ khuyến khích, đánh giá và thưởng phạt đúng mực để nâng cao tinh thần học tập của nhân viên
                <br><b>Đảm bảo yếu tố công nghệ và bảo mật</b>
                Khi triển khai sử dụng phần mềm, doanh nghiệp cần kiểm tra khả năng tương thích với các phần mềm kế toán, quản lý tài chính đang sử dụng. Đồng thời xác định nhu cầu về máy chủ nếu cần triển khai riêng thay vì sử dụng cloud của MISA. Bên cạnh đó, công ty cũng cần phải bảo mật dữ liệu nhân sự, phân quyền chặt chẽ để tránh rò rỉ thông tin quan trọng. 
                <br><b>Chạy thử</b> 
                Trước khi chính thức đưa vào hoạt động, doanh nghiệp cần tiến hành chạy thử để đảm bảo các chương trình, số liệu được vận hành đúng. Doanh nghiệp không nên phụ thuộc mà cần chủ động chạy thử, tiến hành song song với quá trình chạy thử của đơn vị triển khai Misa Amis. Giai đoạn chạy thử là giai đoạn giúp người dùng thực hành những kiến thức được học trong quá trình đào tạo trước đó, giúp doanh nghiệp đánh giá tính ổn định của hệ thống, giảm thiểu các lỗi phát sinh khi đưa hệ thống vào vận hành chính thức. Giai đoạn này cũng có thể phát sinh các nhu cầu tùy chỉnh. 
                Đánh giá hiệu quả & tối ưu chi phí
                Sau 6 - 12 tháng triển khai, doanh nghiệp cần đánh giá mức độ cải thiện về hiệu suất HR thông qua việc so sánh chi phí vận hành trước và sau khi dùng AMIS HRM để tối ưu chi phí. Nếu phần mềm không đáp ứng kỳ vọng, cân nhắc nâng cấp hoặc thay đổi cách triển khai.
`
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

        // Bổ sung async để chờ LLM phản hồi
        setTimeout(async () => {
            const intent = this.kb.matchIntent(text);
            let response = "";

            if (intent) {
                const data = this.kb.knowledge[intent];
                response = `<strong>${data.title}</strong><br><br>${data.content}`;
                this.appendMessage('bot', response);
            } else {
                // 1. Hiển thị hiệu ứng chờ
                this.appendMessage('bot', "<em>Hệ thống AI đang suy nghĩ...</em>");

                try {
                    // 2. Khởi tạo kết nối đến Backend Node.js
                    // Hãy tự tay viết hàm fetch gọi sang cổng 3000 ở đây
                    // (Lưu ý: method POST, headers chứa Content-Type, truyền biến 'text' vào body)
                    const res = await fetch('http://localhost:3000/api/chat', { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text }) 
                });
                    
                    const data = await res.json();
                    
                    // 3. Xóa dòng chữ "đang suy nghĩ"
                    this.chatBox.lastChild.remove(); 
                    
                    // 4. In câu trả lời AI ra màn hình
                    response = data.reply;
                    this.appendMessage('bot', response);

                } catch (error) {
                    console.error("Lỗi gọi LLM:", error);
                    this.chatBox.lastChild.remove();
                    this.appendMessage('bot', "❗ Xin lỗi, hệ thống AI đang tạm thời gián đoạn.");
                }
            }
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