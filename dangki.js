var matkhau = document.getElementById("matkhau")
var rpp = document.getElementById("rpp")

function DangKy(){
    if (matkhau.value.length < 6){
        alert("Mật khẩu phải lớn hơn 6 kí tự")
    } else if(matkhau.value == rpp.value) {
        window.location.href = "dangnhap.html"
        alert("Đăng ký thành công!")
    } else{
        alert("Mật khẩu điền lại ko trùng khớp")
    }

}
