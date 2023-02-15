var objects = [
	"It was as if I had waited all this time for this moment and for the first light of this dawn to be vindicated.",
	"Nothing, nothing mattered, and I knew why. So did he.",
	"Throughout the whole absurd life I'd lived, a dark wind had been rising toward me from somewhere deep in my future, across years that were still to come, and as it passed, this wind leveled whatever was offered to me at the time.",
	"What did other people's deaths or a mother's love matter to me? What did his God or the lives people choose or the fate they think they elect matter to me- ",
	"when we're all elected by the same fate, me and billions of privileged people like him who also called themselves my brothers?",
	"Couldn't he see, couldn't he see that?",
	"Everybody was privileged.",
	".",
	"The rain goes clickety clack tack.", 
	"It was a cold night and a ruthful glimmer of azure pervaded the skies, which were dormantly laid above the cosmopolitan city. The children quietly wept under tattered rags and the grown ups began celebrating on the filth-stained juice joints, while the Plenilune was shining brightly upon them, giving an everlasting impression of cruel romanticism.",
	"Me and Mary went on a ride with the new red car through the woods. We had an argument about Helena. And then an accident happened. The car crashed. I-I hope she's dead.",
	"I wandered the woods and the memories slowly faded away. The insects were buzzing and the birds were chirping. As I was walking towards the forest's insides, I came across a group of people mourning over a mutilated body.",
	"Among them there was a priest. ''Dearly beloved...'' the priest said in a prolonged manner. ''Dearly beloved...'' he repeated.",
	"''We miss you so - so much. You have departed too soon, I admit. Oh my, what a shame. You were a dreamer, boy. A writer of forgotten tales... One that inspired countless individuals to pursue a life of moral dignity and righteousness. But perhaps you also reaped seeds of entropy?''",
	"The priest suddenly looked at me, with two devouring eyes and with a sorrowful tone said: ''Let us remember that through Micheal's dreams we managed to compose a string quartetto that speaks, create literature that rhymes, lullabies that torment and plead in desperate cries.''",
	"''May the Lord have mercy on his soul...''",
	"''I'M NOT DEAD!'' I intoned with a wild, turbulent ferocity. But no one could hear me.",
	"A strange figure approached me and uttered an unsettling sentence with a rasp timbre. ''I'm the one who drowns in the pity of the dead!''",
	"''What is happening?'' I quickly said, dazed by the creature's presence.",
	"''A dark cimmerian veil, an unusual obscuration has spread in this place. A percipient use of colors, faint moans of lust and impetuous crackles. Now ask me what you wish to know, Micheal.''",
	"''You are insane. Who sent you?''",
	"''The king of the purgatory. I'm his general. The pitiful one. The one that always speaks in riddles, I'm afraid.''",
	"''I'm not following you, you wretched beast.''",
	"''Look, soon rocks will fall from the sky, rocks made out of the titans black flesh. Just know that the red woman (the king's wife) and the two face jester are sending their regards. We admire your sociopathic calculation and deeply apologize for the punishment that will soon be inflicted upon you.''",
	"''Where are you going, you foul beast?''"
];

var images = ["rust.jpg","rust.jpg","rust.jpg","rust.jpg","rust.jpg","rust.jpg","rust.jpg","un.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg",
"Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","Caniglia-Image-07_Karl-Liebknecht_Kollwitz-1-1024x663.jpg","monster.jpg","monster.jpg","monster.jpg","monster.jpg","monster.jpg","monster.jpg","monster.jpg","monster.jpg"];


function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.getElementById("doThis");
  const img = document.getElementById("img")
  const writeSpeed = 30;
  let letterIndex = 0;
  let objectsIndex = 0;
  let tId;
  let oldIndex; 
  const write = () => {
    const sentence = objects[objectsIndex];
    if (objectsIndex != oldIndex) {
      img.src = images[objectsIndex];
      oldIndex = objectsIndex; 
    }  
    if (letterIndex > sentence.length) {
      letterIndex = 0;
      objectsIndex++;
      clearInterval(tId);
      return;
    }
    paragraph.innerHTML += sentence.charAt(letterIndex);
    letterIndex++;
  };

  document.getElementById("start").addEventListener("click", () => {
    paragraph.innerHTML = "";
    write();
    clearInterval(tId);
    tId = setInterval(write, writeSpeed); 
  });
});

