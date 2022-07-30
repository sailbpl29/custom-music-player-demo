
let musics=[

    {
        id:1,
        songName:"Fitoor",
        singerName:"Arjiit Singh, Niti Mohan",
        audioFileSrc:"audiofile/fitoor.mp3",
        imageFileSrc:"img/Shamshera.png"
    },
    {
        id:2,
        songName:"Kesariya",
        singerName:"Arjiit Singh",
        audioFileSrc:"audiofile/kesariya.mp3",
        imageFileSrc:"img/brahmastra Part One Shiva.png"
    },
    {
        id:3,
        songName:"Mann Bharrya",
        singerName:"B Paraak",
        audioFileSrc:"audiofile/mann-bharrya.mp3",
        imageFileSrc:"img/Shershaah.png"
    },
    {
        id:4,
        songName:"Shaamat",
        singerName:"Ankit Tiwari, Tara Sutria",
        audioFileSrc:"audiofile/shaamat.mp3",
        imageFileSrc:"img/ek-villan-return.png"
    },
    {
        id:5,
        songName:"Sun Raha Hai",
        singerName:"Sachet Parampara",
        audioFileSrc:"audiofile/sun-raha-hai.mp3",
        imageFileSrc:"img/Aashiqui 2.png"
    }

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageFileSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("songName");
    h2.append(musics[i].songName);
    description.append(h2);

    let h3=document.createElement("singerName");
    h3.append(musics[i].singerName);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageFileSrc;
    document.querySelector(".song-name").innerText=music.songName;
    document.querySelector(".singer-name").innerText=music.singerName;
    document.querySelector(".audio").src=music.audioFileSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
     document.querySelector(".audio").pause();
}