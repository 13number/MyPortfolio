// 누르면 그위치로 이동

const main = document.querySelector("#main");
const nav = document.querySelectorAll(".nav_click");
const about_me = document.querySelector(".about_me_bg");
const skills = document.querySelector(".skills");
const go_up = document.querySelector(".go_up");

const main_position = main.offsetTop
const nav1_position = about_me.offsetTop
const nav2_position = skills.offsetTop


nav[0].onclick = function(){
    window.scroll({top: main,behavior:'smooth'})
}

nav[1].onclick = function(){
    window.scroll({top:500,behavior:'smooth'})
}

nav[2].onclick = function(){
    window.scroll({top:nav2_position,behavior:'smooth'})
}

go_up.onclick = function(){
    window.scroll({top: main,behavior:'smooth'})
}

// 어느 정도 내리면 상단바 색 변화
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
        console.log(window.scrollY)
        // go_up.classList.add('active')
        // go_up.classList.remove('deactive')
    

    }
    else{
        header.classList.add('deactive')
        header.classList.remove('active')
        headerText[0].classList.remove('active_Text')
        headerText[1].classList.remove('active_Text')
        headerText[2].classList.remove('active_Text')
        headerText[3].classList.remove('active_Text')
        headerText[4].classList.remove('active_Text')
        // go_up.classList.add('deactive')
        // go_up.classList.remove('active')

    }
});

// 어느 정도 내리면 업 버튼 보이게

window.addEventListener('scroll', () => {
    if(window.scrollY > 300 ){
        go_up.classList.add('active')
        go_up.classList.remove('deactive')
    }
    else{
        go_up.classList.add('deactive')
        go_up.classList.remove('active')
    }
});