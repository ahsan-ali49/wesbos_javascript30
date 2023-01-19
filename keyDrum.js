
window.addEventListener("keydown", function (e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  btn.classList.add("playing");
  setTimeout(function(){
    btn.classList.remove("playing");
  }, 0.7);
});
