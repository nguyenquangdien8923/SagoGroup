function News(linkNews, image, category, title, date) {
    this.id = newses.length + 1;
    this.linkNews = linkNews
    this.image = image;
    this.category = category;
    this.title = title;
    this.date = date;
}

var newses = [
    {
        id:24,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2942/vinfast-la-dai-dien-doanh-nghiep-viet-nam-duy-nhat-phat-bieu-va-trung-bay-mau-xe-vinfast-vf-9-tai-cop28',
        image: './assets/images/24.jpg',
        category: 'Tin Công nghiệp',
        title: 'VINFAST LÀ ĐẠI DIỆN DOANH NGHIỆP VIỆT NAM DUY NHẤT PHÁT BIỂU VÀ TRƯNG BÀY MẪU XE VINFAST VF 9 TẠI COP28',
        date: '2023-11-30'
    },
    {
        id:23,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2939/vinhomes-va-kgs-han-quoc-hop-tac-phat-trien-he-thong-giao-duc-lien-cap-quoc-te',
        image: './assets/images/23.jpg',
        category: 'Tin Bất động sản',
        title: 'VINHOMES VÀ KGS - HÀN QUỐC HỢP TÁC PHÁT TRIỂN HỆ THỐNG GIÁO DỤC LIÊN CẤP QUỐC TẾ ',
        date: '2023-11-25'
    },
    {
        id:22,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2936/vinfast-chinh-thuc-ra-mat-vf-7-gia-chi-tu-850-trieu-dong',
        image: './assets/images/22.jpg',
        category: 'Tin Công nghiệp',
        title: 'VINFAST CHÍNH THỨC RA MẮT VF 7 - GIÁ CHỈ TỪ 850 TRIỆU ĐỒNG',
        date: '2023-11-21'
    },
    {
        id:21,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2931/vinfast-nhan-duoc-70-don-dang-ky-hop-tac-tu-cac-dai-ly-phan-phoi-tren-toan-nuoc-my-du-kien-mo-rong-mang-luoi-toi-125-die',
        image: './assets/images/21.jpg',
        category: 'Tin Công nghiệp',
        title: 'VINFAST NHẬN ĐƯỢC 70 ĐƠN ĐĂNG KÝ HỢP TÁC  TỪ CÁC ĐẠI LÝ PHÂN PHỐI TRÊN TOÀN NƯỚC MỸ, DỰ KIẾN MỞ RỘNG MẠNG LƯỚI TỚI 125 ĐIỂM BÁN TOÀN QUỐC',
        date: '2023-11-11'
    },
    {
        id:20,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2929/gsm-khai-truong-dich-vu-taxi-dien-tai-lao-huong-toi-pho-cap-phuong-thuc-di-chuyen-xanh-tai-dong-nam-a',
        image: './assets/images/20.jpg',
        category: 'Tin Công nghiệp',
        title: 'GSM KHAI TRƯƠNG DỊCH VỤ TAXI ĐIỆN TẠI LÀO, HƯỚNG TỚI PHỔ CẬP PHƯƠNG THỨC DI CHUYỂN XANH TẠI ĐÔNG NAM Á',
        date: '2023-11-09'
    },
    {
        id:19,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2924/8wonder-dua-maroon-5-den-phu-quoc-united-center',
        image: './assets/images/19.jpg',
        category: 'Tin Du lịch - Vui chơi - Giải trí',
        title: '"8WONDER"  ĐƯA MAROON 5 ĐẾN PHÚ QUỐC UNITED CENTER',
        date: '2023-10-27'
    },
    {
        id:18,
        linkNews: 'https://vingroup.net/vi/tin-tuc-https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2912/vinfast-cong-bo-sap-nhap-cong-ty-nghien-cuu-va-san-xuat-pin-vinessu-kien/bai-viet/2924/8wonder-dua-maroon-5-den-phu-quoc-united-center',
        image: './assets/images/18.jpg',
        category: 'Tin Công nghệ',
        title: 'VINFAST CÔNG BỐ SÁP NHẬP CÔNG TY NGHIÊN CỨU VÀ SẢN XUẤT PIN VINES',
        date: '2023-10-11'
    },
    {
        id:17,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2909/vinhomes-gianh-cu-dup-tai-giai-thuong-doanh-nghiep-chau-a-2023',
        image: './assets/images/17.jpg',
        category: 'Tin Bất động sản',
        title: 'VINHOMES GIÀNH CÚ ĐÚP TẠI GIẢI THƯỞNG DOANH NGHIỆP CHÂU Á 2023',
        date: '2023-10-06'
    },
    {
        id:16,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2899/vinhomes-duoc-vinh-danh-top-3-doanh-nghiep-niem-yet-co-hoat-dong-quan-he-nha-dau-tu-tot-nhat-nam-2023',
        image: './assets/images/16.jpg',
        category: 'Tin Bất động sản',
        title: 'VINHOMES ĐƯỢC VINH DANH TOP 3 DOANH NGHIỆP NIÊM YẾT CÓ HOẠT ĐỘNG QUAN HỆ NHÀ ĐẦU TƯ TỐT NHẤT NĂM 2023',
        date: '2023-09-29'
    },
    {
        id:15,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2867/vinpearl-thuong-hieu-manh-tang-truong-vuot-bac-nhat-2023',
        image: './assets/images/15.jpg',
        category: 'Tin Du lịch - Vui chơi - Giải trí',
        title: 'VINPEARL – THƯƠNG HIỆU MẠNH TĂNG TRƯỞNG VƯỢT BẬC NHẤT 2023',
        date: '2023-08-16'
    },
    {
        id:14,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2846/vinbigdata-ra-mat-bo-giai-phap-phan-tich-hinh-anh-thong-minh-vizone',
        image: './assets/images/14.jpg',
        category: 'Tin Công nghệ',
        title: 'VinBigdata ra mắt Bộ giải pháp Phân tích hình ảnh thông minh Vizone ',
        date: '2023-07-24'
    },
    {
        id:13,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2837/the-gioi-giai-tri-vinwonders-sap-ra-mat-tai-bo-dong-ha-noi',
        image: './assets/images/13.jpg',
        category: 'Tin Du lịch - Vui chơi - Giải trí',
        title: '“THẾ GIỚI GIẢI TRÍ VINWONDERS” SẮP RA MẮT TẠI BỜ ĐÔNG HÀ NỘI',
        date: '2023-07-06'
    },
    {
        id:12,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2733/vinbrain-va-dai-hoc-stanford-hop-tac-thoa-thuan-su-dung-du-lieu',
        image: './assets/images/12.jpg',
        category: 'Tin Công nghệ',
        title: 'VINBRAIN VÀ ĐẠI HỌC STANFORD HỢP TÁC THỎA THUẬN SỬ DỤNG DỮ LIỆU',
        date: '2023-07-05'
    },
    {
        id:11,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2747/vinmec-duoc-acc-cong-nhan-la-trung-tam-xuat-sac-ve-tim-mach-dau-tien-tai-chau-a',
        image: './assets/images/11.jpg',
        category: 'Tin Y tế',
        title: 'VINMEC ĐƯỢC ACC CÔNG NHẬN LÀ TRUNG TÂM XUẤT SẮC VỀ TIM MẠCH ĐẦU TIÊN TẠI CHÂU Á',
        date: '2023-03-22'
    },
    {
        id:10,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2724/vinmec-chinh-thuc-gia-nhap-he-thong-lien-ket-toan-cau-cua-cleveland-clinic-my',
        image: './assets/images/10.jpg',
        category: 'Tin Y tế',
        title: 'VINFAST VÀ BIDV TRIỂN KHAI CHƯƠNG TRÌNH TRI ÂN ĐẶC BIỆT DÀNH CHO NHÀ GIÁO VIỆT NAM',
        date: '2023-02-01'
    },
    {
        id:9,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2927/vinschool-nhan-giai-thuong-esg-busines-awards-ve-phat-trien-ben-vung',
        image: './assets/images/9.jpg',
        category: 'Tin Giáo dục',
        title: 'VINSCHOOL NHẬN GIẢI THƯỞNG ESG BUSINES AWARDS VỀ PHÁT TRIỂN BỀN VỮNG',
        date: '2023-01-11'
    },
    {
        id:8,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2666/vinuni-thanh-lap-trung-tam-khoi-nghiep-e-lab',
        image: './assets/images/8.jpg',
        category: 'Tin Giáo dục',
        title: 'VINUNI THÀNH LẬP TRUNG TÂM KHỞI NGHIỆP E-LAB',
        date: '2023-11-07'
    },
    {
        id:7,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2607/vinuni-cap-hoc-bong-toan-phan-dao-tao-tien-si-khoa-hoc-may-tinh-khoa-i',
        image: './assets/images/7.jpg',
        category: 'Tin Giáo dục',
        title: 'VINUNI CẤP HỌC BỔNG TOÀN PHẦN ĐÀO TẠO TIẾN SĨ KHOA HỌC MÁY TÍNH KHOÁ I',
        date: '2022-11-06'
    },
    {
        id:6,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2586/ra-mat-trung-tam-nghien-cuu-suc-khoe-thong-minh-tai-dai-hoc-vinuni',
        image: './assets/images/6.jpg',
        category: 'Tin Giáo dục',
        title: 'RA MẮT “TRUNG TÂM NGHIÊN CỨU SỨC KHOẺ THÔNG MINH” TẠI ĐẠI HỌC VINUNI',
        date: '2022-07-14'
    },
    {
        id:5,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2574/vinschool-the-harmony-vinschool-times-city-vinschool-central-park-dat-giam-dinh-cis',
        image: './assets/images/5.png',
        category: 'Tin Giáo dục',
        title: 'VINSCHOOL THE HARMONY, VINSCHOOL TIMES CITY & VINSCHOOL CENTRAL PARK ĐẠT GIÁM ĐỊNH CIS',
        date: '2022-06-10'
    },
    {
        id:4,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2532/vingroup-hop-tac-voi-brighton-college-mo-rong-he-thong-truong-quoc-te-tai-viet-nam',
        image: './assets/images/4.jpg',
        category: 'Tin Giáo dục',
        title: 'VINGROUP HỢP TÁC VỚI BRIGHTON COLLEGE MỞ RỘNG HỆ THỐNG TRƯỜNG QUỐC TẾ TẠI VIỆT NAM',
        date: '2022-04-21'
    },
    {
        id:3,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2242/vingroup-ra-mat-ung-dung-vinshop-mo-hinh-ban-le-b2b2c-lan-dau-tien-tai-viet-nam',
        image: './assets/images/3.jpg',
        category: 'Tin Bán lẻ',
        title: 'VINGROUP RA MẮT ỨNG DỤNG VINSHOP – MÔ HÌNH BÁN LẺ B2B2C LẦN ĐẦU TIÊN TẠI VIỆT NAM',
        date: '2021-10-05'
    },
    {
        id:2,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/2155/vincom-tang-cuong-that-chat-cac-bien-phap-phong-chong-covid-19',
        image: './assets/images/2.jpg',
        category: 'Tin Bán lẻ',
        title: 'Vincom tăng cường thắt chặt các biện pháp phòng chống Covid-19',
        date: '2021-03-11'
    },
    {
        id:1,
        linkNews: 'https://vingroup.net/vi/tin-tuc-su-kien/bai-viet/401',
        image: './assets/images/1a.jpg',
        category: 'Tin Bán lẻ',
        title: 'VINCOM RETAIL - THƯƠNG VỤ ĐẦU TƯ VỐN CỔ PHẦN TƯ NHÂN THÀNH CÔNG NHẤT CHÂU Á THÁI BÌNH DƯƠNG',
        date: '2020-11-30'
    },
    
]

function renderNewses(newses, numPage) {
    var listNewsBlock = document.querySelector('#list-news');
    var getAdminName = document.querySelector('.admin-name');

    if(getAdminName.innerText == 'Đăng nhập') {
        var htmls = newses.map(function(news, index){
            if(index >= 5*numPage - 5 && index <= 5*numPage-1) {
                if(index == 0 || index % 5 == 0) {
                    return `
                        <div class="grid__column-6-9">
                            <div class="home-news-new-item home-news-new-item--active" id = "news">
                                <a href = "${news.linkNews}" target="_blank">
                                    <div class="home-news-new-item__image">
                                        <div class="home-news-item__img" style="background: url(${news.image}) center"></div>
                                    </div>
                                    <div class="home-news-new-item__content">
                                        <h4 class="home-news-item__category">${news.category}</h4>
                                        <h3 class="home-news-item__heading">${news.title}</h3>
                                        <p class="home-news-item__date">${news.date}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                `
                }
                return `
                        <div class="grid__column-3-9">
                            <div class="home-news-item home-news-item--active" id = "news">
                                <a href = "${news.linkNews}" target="_blank">
                                    <div class="home-news-item__img" style="background: url(${news.image}) center"></div>
                                    <h4 class="home-news-item__category">${news.category}</h4>
                                    <h3 class="home-news-item__heading">${news.title}</h3>
                                    <p class="home-news-item__date">${news.date}</p>
                                </a>
                            </div>
                        </div>
                `
            }
        });
    } else if(getAdminName.innerText == 'ADMIN') {
        var htmls = newses.map(function(news, index){
            if(index >= 5*numPage - 5 && index <= 5*numPage-1) {
                if(index == 0 || index % 5 == 0) {
                    return `
                        <div class="grid__column-6-9">
                            <div class="home-news-new-item home-news-new-item--active" id = "news">
                                <a href = "${news.linkNews}" target="_blank">
                                    <div class="home-news-new-item__image">
                                        <div class="home-news-item__img" style="background: url(${news.image}) center"></div>
                                    </div>
                                    <div class="home-news-new-item__content">
                                        <h4 class="home-news-item__category">${news.category}</h4>
                                        <h3 class="home-news-item__heading">${news.title}</h3>
                                        <p class="home-news-item__date">${news.date}</p>
                                    </div>
                                </a>
                                <span class="home-news-item__icon home-news-item__icon-update" onclick = "handleUpdateNewsById(${news.id})"><i class="fa-solid fa-gear"></i></span>
                                <span class="home-news-item__icon home-news-item__icon-delete" onclick = "deleteNews(${news.id})"><i class="fa-solid fa-x"></i></span>
                            </div>
                        </div>
                `
                }
                return `
                        <div class="grid__column-3-9">
                            <div class="home-news-item home-news-item--active" id = "news">
                                <a href = "${news.linkNews}" target="_blank">
                                    <div class="home-news-item__img" style="background: url(${news.image}) center"></div>
                                    <h4 class="home-news-item__category">${news.category}</h4>
                                    <h3 class="home-news-item__heading">${news.title}</h3>
                                    <p class="home-news-item__date">${news.date}</p>
                                </a>
                                <span class="home-news-item__icon home-news-item__icon-update" onclick = "handleUpdateNewsById(${news.id})"><i class="fa-solid fa-gear"></i></span>
                                <span class="home-news-item__icon home-news-item__icon-delete" onclick = "deleteNews(${news.id})"><i class="fa-solid fa-x"></i></span>
                            </div>
                        </div>
                `
            }
        });
    }

    listNewsBlock.innerHTML = htmls.join('');
}

// Phân trang
var currentPage = 1;

function calTotalPage(newses){
    var totalPage = 0;
    // console.log(newses.length)
    if(newses.length % 5 === 0) {
        totalPage = newses.length / 5
    } else {
        totalPage = Math.ceil(newses.length / 5)
    }
    return totalPage
}

function renderNumPages(newses) {
    document.querySelector('.pagination-numPage').innerHTML = ''
    var totalPage = calTotalPage(newses);
    for(var i = 1; i<=totalPage; i++){
        if(i === currentPage) {
            document.querySelector('.pagination-numPage').innerHTML += `<li class="pagination-numPage-item pagination-numPage-item--active" >${i}</li>`
        } else {
            document.querySelector('.pagination-numPage').innerHTML += `<li class="pagination-numPage-item" >${i}</li>`
        }
    }
}

function transPage(newses) {
    renderNumPages(newses);
    renderNewses(newses,currentPage);
    var listNumPage = document.querySelectorAll('.pagination-numPage-item')
    
    listNumPage.forEach(function(numPage, index){
        if(index === 0) {
            numPage.classList.add('pagination-numPage-item--active')
            renderNewses(newses,1);
        }

        numPage.onclick = (e) => {
            listNumPage.forEach (function(numPage, index){
                if(index + 1 == currentPage && listNumPage.length>1){
                    numPage.classList.remove('pagination-numPage-item--active')
                }
            })
            currentPage = e.target.innerText
            e.target.classList.add('pagination-numPage-item--active')
            renderNewses(newses,currentPage);
        }
    })
}

//Hiển thị theo thể loại tin tức
function getListNewsesWithType(type) {
    var listNewsWithType = []
    for(var i=0; i<newses.length; i++) {
        if(newses[i].category === type) {
            listNewsWithType.push(newses[i])
        }
    }
    return listNewsWithType
}

function transType() {
    transPage(newses)
    var listType = document.querySelectorAll('.news-event-category-item')

    listType.forEach(function(type, index){
        type.onclick = (e) => {
            listType.forEach(function(type, index){
                if(type.classList.contains('news-event-category-item--active')){
                    type.classList.remove('news-event-category-item--active')
                }
            })
            e.target.classList.add('news-event-category-item--active')
            if(e.target.innerText === 'Tất cả') {
                transPage(newses)
            } else {
                var type = 'Tin ' + e.target.innerText
                transPage(getListNewsesWithType(type))
            }
            
        }
    })
}

// Create New News
function getInforFormCreateNews(){
    var getListInfor = document.querySelectorAll('.authe-form__input')
    // console.log(getListInfor)

    var news = new News(getListInfor[1].value, getListInfor[0].value, getListInfor[2].value, getListInfor[3].value, getListInfor[4].value);    

    return news
}

// Button reset
function resetInfor() {
    var getBtnUpLoad = document.querySelector('.authe-form__controls-reset')
    var getListInfor = document.querySelectorAll('.authe-form__input')
    var getListMessage = document.querySelectorAll('.form-message')

    getListMessage.forEach(function(message, index){
        message.style.display = 'none'
    })
    
    getBtnUpLoad.onclick = ()=>{
        getListInfor.forEach(function(infor, index){
            infor.value = ''
        })
    }
}

function showFormCreateNews(){
    var getBtnUpNews = document.querySelector('.btn-createNews')
    var getListInfor = document.querySelectorAll('.authe-form__input')
    
    getBtnUpNews.onclick = ()=>(
        document.querySelector('.modal').style.display = "flex",
        getListInfor.forEach(function(infor, index){
            infor.value = ''
        })
    )
    // uploadNewNews();
    unshowFormCreateNews();
}


function unshowFormCreateNews(){
    var getIconX = document.querySelector('.authe-form__shutdown')
    
    getIconX.onclick = ()=>{
        resetInfor();
        document.querySelector('.modal').style.display = "none"
    }
}

// Hàm kiểm tra đăng tin
function checkSpace() {
    var linkImage = document.getElementById("link-image");
    var linkImageError = document.querySelector(".form-message-image");

    var linkNews = document.getElementById("link-news");
    var linkNewsError = document.querySelector(".form-message-news");

    var categorySelector = document.getElementById("categorySelector");
    var selectorError = document.querySelector(".form-message-selector");

    var titleNews = document.getElementById("title-news");
    var titleError = document.querySelector(".form-message-title");

    var dateUpload = document.getElementById("date-upload");
    var dateError = document.querySelector(".form-message-date");

    // Kiểm tra ô link ảnh
    if (linkImage.value === "") {// Nếu ô link ảnh trống thì báo lỗi
        linkImageError.innerHTML = "*Vui lòng nhập đường link ảnh";
        linkImageError.style.display = "block";
        linkImageError.style.color = "red";
        return false;
    } else {
        linkImageError.innerHTML = "";
        linkImageError.style.display = "none";
    }
    // Kiểm tra ô link tin tức
    if (linkNews.value === "") { // Nếu ô link tin tức trống thì báo lỗi
        linkNewsError.innerHTML = "*Vui lòng nhập đường link tin tức";
        linkNewsError.style.display = "block";
        linkNewsError.style.color = "red";
        return false;
    } else {
        linkNewsError.innerHTML = "";
        linkNewsError.style.display = "none";
    }
    // Kiểm tra ô chọn loại tin tức
    if (categorySelector.value === "") { // Nếu ô chọn loại tin tức trống thì báo lỗi
        selectorError.innerHTML = "*Vui lòng chọn thể loại của tin tức";
        selectorError.style.display = "block";
        selectorError.style.color = "red";
        return false;
    } else {
        selectorError.innerHTML = "";
        selectorError.style.display = "none";
    }
    // Kiểm tra ô tiêu đề tin tức
    if (titleNews.value === "") { // Nếu ô tiêu đề tin tức trống thì báo lỗi
        titleError.innerHTML = "*Vui lòng nhập tiêu đề của tin tức";
        titleError.style.display = "block";
        titleError.style.color = "red";
        return false;
    } else {
        titleError.innerHTML = "";
        titleError.style.display = "none";
    }
    // Kiểm tra ô ngày đăng tin tức
    if (dateUpload.value === "") { // Nếu ô ngày đăng tin tức không xác định thì báo lỗi
        dateError.innerHTML = "*Vui lòng chọn ngày đăng tin tức";
        dateError.style.display = "block";
        dateError.style.color = "red";
        return false;
    } else {
        dateError.innerHTML = "";
        dateError.style.display = "none";
    }
    return true;
}

function uploadNewNews() {
    // var getBtnUpLoad = document.querySelector('.authe-form__controls-upload')
    var listType = document.querySelectorAll('.news-event-category-item')
    if(checkSpace()){
        // getBtnUpLoad.onclick = ()=>{
            newses.unshift(getInforFormCreateNews())
            document.querySelector('.modal').style.display = "none"
            listType.forEach(function(type, index){
                if(type.classList.contains('news-event-category-item--active')){
                    type.classList.remove('news-event-category-item--active')
                }
            })
            listType[0].classList.add('news-event-category-item--active')
            transType();
        // }
        return true
    } else {
        return false
    }
}

// Update News
//Button reset in form Update
function resetInforInUpdateForm() {
    var getBtnUpLoad = document.querySelector('.authe-form__controls-reset-update')
    var getListInfor = document.querySelectorAll('.authe-form__input-update')
    var getListMessage = document.querySelectorAll('.form-message')

    getListMessage.forEach(function(message, index){
        message.style.display = 'none'
    })
    
    getBtnUpLoad.onclick = ()=>{
        getListInfor.forEach(function(infor, index){
            if(index!=4){
                infor.value = ''
            }
        })
    }
}

function unshowFormUpdateNews(){
    var getIconX = document.querySelector('.authe-form__shutdown-update')
    
    getIconX.onclick = ()=>{
        resetInfor();
        document.querySelector('.modal-update').style.display = "none"
    }
}

function checkSpaceUpdate() {
    var linkImage = document.getElementById("editImage");
    var linkImageError = document.querySelector(".form-message-image-update");

    var linkNews = document.getElementById("editLink");
    var linkNewsError = document.querySelector(".form-message-news-update");

    var categorySelector = document.getElementById("editCategory");
    var selectorError = document.querySelector(".form-message-selector-update");

    var titleNews = document.getElementById("editTitle");
    var titleError = document.querySelector(".form-message-title-update");

    var dateUpload = document.getElementById("editDate");
    var dateError = document.querySelector(".form-message-date-update");

    // Kiểm tra ô link ảnh
    if (linkImage.value === "") {// Nếu ô link ảnh trống thì báo lỗi
        linkImageError.innerHTML = "*Vui lòng nhập đường link ảnh";
        linkImageError.style.display = "block";
        linkImageError.style.color = "red";
        return false;
    } else {
        linkImageError.innerHTML = "";
        linkImageError.style.display = "none";
    }
    // Kiểm tra ô link tin tức
    if (linkNews.value === "") { // Nếu ô link tin tức trống thì báo lỗi
        linkNewsError.innerHTML = "*Vui lòng nhập đường link tin tức";
        linkNewsError.style.display = "block";
        linkNewsError.style.color = "red";
        return false;
    } else {
        linkNewsError.innerHTML = "";
        linkNewsError.style.display = "none";
    }
    // Kiểm tra ô chọn loại tin tức
    if (categorySelector.value === "") { // Nếu ô chọn loại tin tức trống thì báo lỗi
        selectorError.innerHTML = "*Vui lòng chọn thể loại của tin tức";
        selectorError.style.display = "block";
        selectorError.style.color = "red";
        return false;
    } else {
        selectorError.innerHTML = "";
        selectorError.style.display = "none";
    }
    // Kiểm tra ô tiêu đề tin tức
    if (titleNews.value === "") { // Nếu ô tiêu đề tin tức trống thì báo lỗi
        titleError.innerHTML = "*Vui lòng nhập tiêu đề của tin tức";
        titleError.style.display = "block";
        titleError.style.color = "red";
        return false;
    } else {
        titleError.innerHTML = "";
        titleError.style.display = "none";
    }
    // Kiểm tra ô ngày đăng tin tức
    if (dateUpload.value === "") { // Nếu ô ngày đăng tin tức không xác định thì báo lỗi
        dateError.innerHTML = "*Vui lòng chọn ngày đăng tin tức";
        dateError.style.display = "block";
        dateError.style.color = "red";
        return false;
    } else {
        dateError.innerHTML = "";
        dateError.style.display = "none";
    }
    return true;
}

function handleUpdateNewsById(id) {
    // Hàm hiển thị thông tin của đối tượng trong form
    document.querySelector('.modal-update').style.display = "flex"
    unshowFormUpdateNews();
    resetInforInUpdateForm();
    function displayNewsInForm(news) {
        // document.getElementById("editId").value = news.id;
        document.getElementById("editLink").value = news.linkNews;
        document.getElementById("editImage").value = news.image;
        document.getElementById("editCategory").value = news.category;
        document.getElementById("editTitle").value = news.title;
        document.getElementById("editDate").value = news.date;
    }
    
    // Gọi hàm hiển thị thông tin của đối tượng
    const newsToDisplay = newses.find(news => news.id === id);
    if (newsToDisplay) {
        displayNewsInForm(newsToDisplay);
    } else {
        console.log(`Không tìm thấy đối tượng news với id ${id}.`);
    }
    // Hàm cập nhật thông tin đối tượng news
    function updateNews() {
        if(checkSpaceUpdate()){
            // const id = parseInt(document.getElementById("editId").value);
            const link = document.getElementById("editLink").value;
            const image = document.getElementById("editImage").value;
            const category = document.getElementById("editCategory").value;
            const title = document.getElementById("editTitle").value;
            const date = document.getElementById("editDate").value;
    
            // Tìm kiếm đối tượng news trong mảng dựa trên id
            const newsToUpdate = newses.find(news => news.id === id);
    
            // Kiểm tra xem đối tượng có tồn tại không
            if (newsToUpdate) {
                // Cập nhật thông tin với dữ liệu mới
                newsToUpdate.linkNews = link;
                newsToUpdate.image = image;
                newsToUpdate.category = category;
                newsToUpdate.title = title;
                newsToUpdate.date = date;
    
                console.log(`Thông tin đối tượng news với id ${id} đã được cập nhật.`);
            } else {
                console.log(`Không tìm thấy đối tượng news với id ${id}.`);
            }
    
            // Hiển thị mảng đối tượng news sau khi đã sửa
            console.log(newses);
            document.querySelector('.modal-update').style.display = "none"
            transType();
            return true
        } else {
            return false
        }
    }

    document.querySelector('#editForm').onclick = ()=>{
        alert('Bạn muốn thay đổi tin tức này?')
        updateNews();
    }
}



// Delete News
function deleteNews(id) {
    newses.reverse();
    newses.splice(id - 1, 1)
    newses.forEach(function(news){
        if(news.id > id) {
            news.id = news.id -1
        }
    })
    newses.reverse();
    transType();
    alert('Bạn muốn xóa tin này?');
}

// Search news
function initializeSearch(newsList) {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Hiển thị kết quả tìm kiếm
    function displaySearchResults(results) {
        searchResults.innerHTML = "";

        if (results.length === 0) {
            const noResultsItem = document.createElement("li");
            noResultsItem.textContent = "Không tìm thấy dữ liệu";
            searchResults.appendChild(noResultsItem);
        } else {
            results.forEach(news => {
                const listItem = document.createElement("li");
                listItem.style.cursor = 'pointer';

                const link = document.createElement("a");
                link.href = news.linkNews; // Sử dụng linkNews của đối tượng news

                // Hiển thị hình ảnh thumbnail nếu có
                if (news.image) {
                    const thumbnail = document.createElement("img");
                    thumbnail.src = news.image;
                    thumbnail.alt = "Thumbnail";
                    thumbnail.className = "thumbnail";
                    link.appendChild(thumbnail);
                }

                const title = document.createElement("span");
                title.innerHTML = `${news.title} - ${news.date}`;

                // Tô đậm từ khóa trong tiêu đề
                const searchTerm = searchInput.value.trim().toLowerCase();
                const titleLower = news.title.toLowerCase();
                const index = titleLower.indexOf(searchTerm);

                if (index !== -1) {
                    const highlighted = document.createElement("span");
                    highlighted.className = "highlight";
                    highlighted.textContent = news.title.substring(index, index + searchTerm.length);
                    title.innerHTML = title.innerHTML.replace(news.title.substring(index, index + searchTerm.length), highlighted.outerHTML);
                }

                link.appendChild(title);
                listItem.appendChild(link);
                searchResults.appendChild(listItem);

                // Sự kiện khi người dùng nhấp vào kết quả
                listItem.addEventListener("click", (event) => {
                    event.preventDefault();
                    // Hiển thị lựa chọn trong console
                    console.log(`Bạn đã chọn: ${news.title} - ${news.linkNews}`);
                    window.open(news.linkNews, '_blank'); // Mở liên kết trong tab mới
                });
            });
        }

        // Hiển thị hoặc ẩn danh sách kết quả tùy thuộc vào có hay không kết quả
        searchResults.style.display = results.length > 0 ? "block" : "none";
    }

    // Tìm kiếm đối tượng news
    function searchNews() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Kiểm tra nếu thanh tìm kiếm rỗng
        if (!searchTerm) {
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
            return;
        }

        // Lọc danh sách theo tiêu đề hoặc ngày
        const filteredNews = newsList.filter(news =>
            news.title.toLowerCase().includes(searchTerm) ||
            news.date.toLowerCase().includes(searchTerm)
        );

        // Hiển thị kết quả tìm kiếm
        displaySearchResults(filteredNews);
    }

    // Hiển thị kết quả tìm kiếm ngay khi gõ vào thanh tìm kiếm
    searchInput.addEventListener("input", searchNews);

    // Ẩn danh sách kết quả khi nhấp chuột bên ngoài
    document.addEventListener("click", function (event) {
        if (event.target !== searchInput && event.target !== searchResults) {
            searchResults.style.display = "none";
        }
    });
}

function start() {
    transType();
    showFormCreateNews();
    initializeSearch(newses);
}   

start();

