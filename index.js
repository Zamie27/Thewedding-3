// <!-- simply countdown js -->

simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 10, // required
  day: 7, // required
  hours: 10, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// <!-- hamburger menu js -->
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// <!-- Disable Scroll -->
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const bgm = document.querySelector("#bgm");
let isPlaying = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");
  playAudio();
}

// <!-- bgm audio -->
function playAudio() {
  bgm.volume = 0.5;
  audioIconWrapper.style.display = "flex";
  bgm.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    bgm.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    bgm.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }
disableScroll();

// <!-- Disable alert Sucses form -->
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
    });
  });
});

//   <!-- Pronoun dan nama ucapan --!>
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;
