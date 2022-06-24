
const main = document.querySelector("#main");
const nav = document.querySelectorAll(".nav_click");
const about_me = document.querySelector(".about_me");
const skills = document.querySelector(".skills");

const main_position = main.offsetTop
const nav1_position = about_me.offsetTop
const nav2_position = skills.offsetTop

nav[0].onclick = function(){
    window.scroll({top: main,behavior:'smooth'})
}

nav[1].onclick = function(){
    window.scroll({top:nav1_position,behavior:'smooth'})
}

nav[2].onclick = function(){
    window.scroll({top:nav2_position,behavior:'smooth'})
}


// $(function(){
//     // 스크롤 시 header fade-in
//     $(document).on('scroll', function(){
//         if($(window).scrollTop() > 100){
//             $("#header").removeClass("deactive");
//             $("#header").addClass("active");
//         }else{
//             $("#header").removeClass("active");
//             $("#header").addClass("deactive");
//         }
//     })
// });

const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height
const headerText = document.querySelectorAll(".nav_click")

window.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight ){
        header.classList.add('active')
        header.classList.remove('deactive')
        headerText[0].classList.add('active_Text')
        headerText[1].classList.add('active_Text')
        headerText[2].classList.add('active_Text')
        headerText[3].classList.add('active_Text')
        headerText[4].classList.add('active_Text')
    }
    else{
        header.classList.add('deactive')
        header.classList.remove('active')
        headerText[0].classList.remove('active_Text')
        headerText[1].classList.remove('active_Text')
        headerText[2].classList.remove('active_Text')
        headerText[3].classList.remove('active_Text')
        headerText[4].classList.remove('active_Text')
    }
});