import { Howl } from "../../../node_modules/howler/dist/howler";

// Element selectors
const elPlay = document.querySelector(".js-play");
const elBackward = document.querySelector(".js-backward");
const elForward = document.querySelector(".js-forward");
const elPlayer = document.querySelector(".js-player");
const elProgressbar = document.querySelector(".js-progress");

let progress = 0; // int
let duration;
let ratio;
let soundStatu = 0; // int
let lastAction;

const sound = new Howl({
  src: "sound/song.mp3",

  onload: () => {
    // Sound Loaded

    // Fading sound for intro
    sound.fade(0, 1, 1500, sound.play());

    // Gets sound total time
    duration = Math.round(sound.duration());

    // Gets the ratio and base it to 1000 for setInterval
    ratio = duration / 100;

    setInterval(fireProgressbar, 1000);
  },

  onplay: () => {
    // Sound has been played, state class is added for animations
    elPlayer.classList.add("is-playing");

    setIconToPlay("fa-pause");

    // Make aware that sound is started
    lastAction = "play";
  },

  onpause: () => {
    // Sound has been paused, stops animations
    elPlayer.classList.remove("is-playing");

    setIconToPlay("fa-play");

    // Make aware that sound is paused
    lastAction = "pause";
  },

  onend: () => {
    // Stop the player, sound is over
    elPlayer.classList.remove("is-playing");

    setIconToPlay("fa-spinner fa-spin");

    // Restart the sound after 5 seconds
    setTimeout(restart, 5000);
  }
});

const playOrPause = () => {
  sound.playing() ? sound.pause() : sound.play();
};

const setIconToPlay = iconName => {
  const icon = `<i class="fa ${iconName}"></i>`;

  elPlay.innerHTML = icon;
};

const progressController = () => {
  if (soundStatu < 0 || progress < 0) {
    soundStatu = 0;
    progress = 0;
  }
};

const setToProgressbar = () => {
  elProgressbar.style.width = `${progress}%`;
};

const seekBack = time => {
  lastAction = "seekBack";
  progress = progress - time / ratio;
  soundStatu = soundStatu - time;

  progressController();

  sound.seek(soundStatu);

  setToProgressbar();
};

const seekForward = time => {
  lastAction = "seekForward";
  progress = progress + time / ratio;
  soundStatu = soundStatu + time;

  progressController();

  sound.seek(soundStatu);

  setToProgressbar();
};

const restart = () => {
  soundStatu = 0;
  progress = 0;
  sound.seek(0);

  setToProgressbar();

  sound.play();
};

function fireProgressbar() {
  // Sound is paused, don't do anything
  if (lastAction == "pause") {
    return;
  }

  // Sound is playing, set it to progress
  else if (lastAction == "play") {
    progress = progress + 1 / ratio;
    soundStatu++;
    elProgressbar.style.width = `${progress}%`;
  }

  // Action statu is not play or pause, then turn it to play for move on
  else {
    lastAction = "play";
  }
}

// Plays/pauses the sound
elPlay.addEventListener("click", playOrPause);

// Go back 5 seconds in sound
elBackward.addEventListener("click", () => {
  seekBack(5);
});

// Go forward 5 seconds in soun
elForward.addEventListener("click", () => {
  seekForward(5);
});
