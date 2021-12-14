export function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

export const music1 = new sound("/home/plume/samsara-engine/src/assets/CO.AG_DarkEncounters.ogg");
export const music2 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music3 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music4 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music5 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music6 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music7 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music8 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music9 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music10 = new sound("src/assets/CO.AG_DarkEncounters.ogg");
export const music11 = new sound("src/assets/CO.AG_DarkEncounters.ogg");