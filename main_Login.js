// Đoạn code xử lý hiện và ẩn model quên mật khẩu
// Tên biến
const pFogotPassword = document.querySelector('.js-fogot-password'); // Lấy text 'Quên mật khẩu'
const modal = document.querySelector('.js-modal-fogot-password'); // Lấy phần tử có class modal-fogot-password
const modalContainer = document.querySelector('.js-modal-container'); // Lấy phần tử có class js-modal-container
const pLogin = document.querySelector('.js-login'); // Lấy text 'Đăng nhập' của trang chủ
const form = document.querySelectorAll('.wrapper'); // Lấy phần tử có class wrapper
const formLoginContainer = document.querySelectorAll('.js-form-login'); // Lấy tất cả phần tử có class js-form-login vào mảng formLoginContainer
const pSignup = document.querySelector('.js-signup'); // Lấy text 'Đăng kí' của trang chủ
const textRigter = document.querySelectorAll('.js-text-rigter'); // Lấy tất cả phần tử có class js-text-rigter vào mảng textRigter
// Xử lý hiện ẩn modal 
pFogotPassword.addEventListener('click',function(){modal.classList.add('open');});//Ấn vào chữ "Quên mật khẩu" thì hiện model
modal.addEventListener('click',function(){modal.classList.remove('open');});// Click bất kì chỗ nào ngoài model thì ẩn model
modalContainer.addEventListener('click',function(e){e.stopPropagation();});// Xử lý lỗi khi click vào thành phần bên trong model thì model cũng bị tắt
// Xử lý hiện ẩn form đăng nhập
pLogin.addEventListener('click',function(){form[0].classList.add('open');}); // Ấn vào đăng nhập thì hiện form đăng nhập
form[0].addEventListener('click',function(){form[0].classList.remove('open');});// Ấn ra ngoài form thì ẩn form 
formLoginContainer[0].addEventListener('click',function(e){e.stopPropagation();}); // Xử lý lỗi
// Xử lý hiện ẩn form đăng kí
pSignup.addEventListener('click',function(){form[1].classList.add('open');});
form[1].addEventListener('click',function(){form[1].classList.remove('open');});
formLoginContainer[1].addEventListener('click',function(e){e.stopPropagation();});
// Xử lý khi ấn vào text 'Đăng kí ngay' thì hiện form đăng kí
textRigter[0].addEventListener('click',function(){
    form[1].classList.add('open');
    form[0].classList.remove('open');
});
// Xử lý khi ấn vào text 'Đăng nhập ngay' thì hiện form đăng nhập
textRigter[1].addEventListener('click',function(){
    form[0].classList.add('open');
    form[1].classList.remove('open');
});

// Hàm xử lý hiện/ẩn mật khẩu
let currentImage = 1;
function toggleImage() {
    const eyes = document.querySelectorAll(".eye"); // Lấy tất cả phần tử có class eye
    const isImageOpen = currentImage === 1; // Biến isImageOpen là kiểu boolean
    for (const eye of eyes) {
        eye.src = isImageOpen ? "./img_Login/eye-open.png" : "./img_Login/eye-closed.png";
    }
    const passwords = document.querySelectorAll(".passWord");
    for (const password of passwords) {
        password.type = isImageOpen ? "text" : "password";
    }
    currentImage = isImageOpen ? 2 : 1;
}

// Hàm kiểm tra độ dài tên tài khoản và độ phức tạp của mật khẩu
function checklength() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var passWord = document.getElementById("passWord").value;
    var replacePassWord = document.getElementById("replace-passWord").value;
    if(firstName.length < 1 && firstName.length > 31){
        alert("Độ dài first name khoản từ 2-30 kí tự");
        return false;
    }
    if(lastName.length < 1 && lastName.length > 31){
        alert("Độ dài last name khoản từ 2-30 kí tự");
        return false;
    }
    if(passWord.length < 5 && passWord.length > 31){
        alert("Độ dài mật khẩu phải từ 6-30 kí tự");
        return false;
    }
    var regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (!regex.test(passWord)) {
        alert("Mật khẩu phải có ít nhất 1 chữ cái và 1 số.");
    }else{
        if(replacePassWord !== passWord){
            alert("Mật khẩu nhập lại không chính xác");
        }else {
            alert("Tạo tài khoản thành công");
            form[0].classList.add('open');
            form[1].classList.remove('open');
            return false;
        }
    }
    return false;
}

// Hàm kiểm tra đăng nhập
function validate() {
    var userName = document.getElementById("userName");
    var passWord = document.getElementById("passWord");
    var userNameError = document.getElementById("userName-error");
    var passWordError = document.getElementById("passWord-error");
    // Kiểm tra ô tài khoản
    if (userName.value === "") {// Nếu ô tài khoản trống thì báo lỗi
        userNameError.innerHTML = "*Vui lòng nhập tên tài khoản";
        userNameError.style.display = "block";
        userNameError.style.color = "red";
        return false;
    } else {
        userNameError.innerHTML = "";
        userNameError.style.display = "none";
    }
    // Kiểm tra ô mật khẩu
    if (passWord.value === "") { // Nếu ô mật khẩu trống thì báo lỗi
        passWordError.innerHTML = "*Vui lòng nhập mật khẩu";
        passWordError.style.display = "block";
        passWordError.style.color = "red";
        return false;
    } else {
        passWordError.innerHTML = "";
        passWordError.style.display = "none";
    }
    // Kiểm tra tài khoản và mật khẩu
    if (userName.value === "admin@gmail.com" && passWord.value === "1234") {

        // Ẩn nút đăng nhập và đăng ký
        const authButtons = document.getElementById('authButtons');
        authButtons.style.display = 'none';

        // Thay thế bằng tên tài khoản và avatar
        const headerRightSide = document.querySelector('.header__right-side');
        headerRightSide.innerHTML = '<ul class="header__navbar-list">'+
                                        '<li class="header__navbar-item admin-name">ADMIN</li>'+
                                        '<li class="header__navbar-item"><img src="./img_Login/user.png"></img></li>'+
                                    '</ul>';

        // Ẩn phần đăng nhập
        form[0].classList.remove('open');

        //Hiển thị quyền của admin
        const getButtonCreateNews = document.querySelector('.btn-createNews')
        getButtonCreateNews.style.display = 'block'

        transType();

        return false;
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
    return true;
}



function fb(){
    window.location.href = "https://www.facebook.com/"
}
function gm(){
    window.location.href = "https://www.google.com/intl/vi/gmail/about/"
}
function gh(){
    window.location.href = "https://www.github.com/"
}

// function addHtmlIcon(name) {
//     const getListNews = document.querySelectorAll('#news')

//     if(name=='ADMIN') {
//         getListNews.forEach((news)=>{
//             news.innerHTML =
//             '<span class="home-news-item__icon home-news-item__icon-update"><i class="fa-solid fa-gear"></i></span>' +
//             '<span class="home-news-item__icon home-news-item__icon-delete" onclick = "deleteNews(${news.id})"><i class="fa-solid fa-x"></i></span>'
//         })
//     }
// }