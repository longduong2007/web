var user = document.getElementById("user")
var pass = document.getElementById("pass")

function DangNhap(){
    if(user.value =="" || pass.value ==""){
        alert("User và mật khẩu không được để trống!")
    }else if (pass.value.length < 6){
        alert("Mật khẩu phải lớn hơn 6 kí tự")
    } else {
        window.location.href = "index.html"
        alert("Đăng nhập thành công!")
    }
}
