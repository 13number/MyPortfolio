
function number_up(){
    const like_button = document.getElementById("like_number");
    let number = like_button.innerText;
    number = parseInt(number) + 1

    like_button.innerText = number;
    console.log(like_button.innerText);
}