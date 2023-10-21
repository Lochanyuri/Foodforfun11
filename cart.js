alert(" Proprietor is too busy,so this page not fully done.")
 
 let audio = document.querySelector("audio");
 let img = document.querySelector("img");
 let index = 0;
img.addEventListener("click", ( ) => {
  audio.play()
  index++
  if(index ==2){
    audio.src = "obito-speech-pt.3-made-with-Voicemod-technology.mp3"
    audio.play()
  }
  if(index == 3){
    audio.src = "obito-speech-made-with-Voicemod-technology.mp3"
    audio.play()
  }
})