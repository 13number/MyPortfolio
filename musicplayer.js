let repeat = document.querySelector("#repeat_song");
let previous = document.querySelector("#previous_song");
let play = document.querySelector("#play_song");
let next = document.querySelector("#next_song");
let shuffle = document.querySelector("#shuffle_song");
let title = document.querySelector("#title_song");
let artist = document.querySelector("#artist_song");
let slider = document.querySelector("#slider_song");
let track_img = document.querySelector("#track_img");
let total = document.querySelector("#total");
let present = document.querySelector("#present");
let recent_volume = document.querySelector('#volume_bar')
let repeat_style = document.querySelector(".repeat_song_style")

let timer;
let index_no =0;
let playing_song = false;
repeat = 0;

let track = document.createElement('audio')

// song list

let All_song = [
    {
        name: "Schneider",
        path: "audio/Schneider.mp3",
        img: "images/트렌디팝.jpg",
        singer: "김예찬",
    },
    {
        name: "Dark Toy",
        path: "audio/darktoy.mp3",
        img: "images/darktoy.jpg",
        singer: "김예찬",
    },
    {
        name: "Gag Concert",
        path: "audio/gagconcert.mp3",
        img: "images/신나는.jpg",
        singer: "김예찬",
    },
    {
        name: "Vacant",
        path: "audio/vacant.mp3",
        img: "images/혼란스러운.jpg",
        singer: "김예찬",
    },
];

//All function

function load_track(index_no){
    reset_slider()
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_img.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider,1000);
}

load_track(index_no);

//reset song slider
function reset_slider(){
    slider.value = 0;
}


//checking the song is playing or not

function justplay(){
    if(playing_song == false){
        playingsong();
    }else{
        pausesong();
    }
}
//play song

function playingsong(){
    track.play()
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause fa-4x"></i>';
}

//pause song
function pausesong(){
    track.pause()
    playing_song = false;
    play.innerHTML = '<i class="fa-solid fa-circle-play fa-4x" ></i>';
}

//next song

function next_song(){
    if(index_no < All_song.length -1){
        index_no +=1;
        load_track(index_no);
        playingsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playingsong();
    }
}

function previous_song(){
    if(index_no > 0){
        index_no -=1;
        load_track(index_no);
        playingsong();
    }
    else{
        index_no = All_song.length - 1;
        load_track(index_no);
        playingsong();
    }
}

//change volume

function volume_change(){
    track.volume = recent_volume.value /100;
}

//repeat function
function repeat_song(){
    if(repeat == 1){
        repeat = 0;
        repeat_style.style.color = "black";
    }else{
        repeat = 1;
        repeat_style.style.color = "#ff0000";
    }
}

//change slider

function music_duration_change(){
    slider_position = track.duration * (slider.value/100)
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;

    //update slider position
    if(!isNaN(track.duration)){
        position = (track.currentTime / track.duration) * 100;
        slider.value = position;
    }

//function will run when the song is over
if(track.ended){
    play.innerHTML = '<i class="fa-solid fa-circle-play fa-4x" ></i>';
    if(repeat==1){
        // index_no += 1;
        load_track(index_no);
        playingsong();
    }
}


}