var index = 0
const banner_img =document.getElementsByClassName("banner_img")// Trả ra 1 mảng các phần tủ có class là banner_img

banner_img[0].style.display = "block";

setInterval(function autoShow(){
    index++;
    for(var i = 0; i<banner_img.length; i++){
        banner_img[i].style.display = "none";
    }
    if (index>2){
        index=0;
    }
    banner_img[index].style.display = "block";

},2000)

const container = document.getElementById("container")
const setting = document.getElementsByClassName("material-symbols-outlined")
const text_color = document.getElementsByClassName("text_color")
// const h2 = document.getElementsByTagName("h2")
var themes = true;
function changeThemes(){
    if(themes == true){
        container.style.backgroundColor = "black"
        setting[0].style.color = "white"
        for(var i = 0;i<text_color.length;i++){
            text_color[i].style.color = "white"
        }
        themes = false;
    }else{
        container.style.backgroundColor = "white"
        setting[0].style.color = "black"
        for(var i = 0;i<text_color.length;i++){
            text_color[i].style.color = "black"
        }
        themes = true;
    }

}



