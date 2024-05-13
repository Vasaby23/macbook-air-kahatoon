let infoNav = document.querySelector(".info-nav");
let scrolled = false;

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    infoNav.style.marginTop = '-90px';
    scrolled = true;
  } else {
    infoNav.style.marginTop = '0';
    scrolled = false;
  }
});

function changePhotos(number) {
  document.getElementById('charge').src = `/imgs/charge${number}.jpg`;
  document.getElementById('lap').src = `/imgs/lap${number}.jpg`;
  document.getElementById('mac').src = `/imgs/mac${number}.jpg`;
  let allSwitches = document.querySelectorAll('.switch');
  allSwitches.forEach(function (element) {
    element.classList.remove('selected');
  });
  let selectedSwitch = document.getElementById(`switch_${number}`);
  selectedSwitch.classList.add('selected');
  let allLabels = document.querySelectorAll('.switch-label');
  allLabels.forEach(function (label) {
    label.classList.remove('selected-label');
  });
  let selectedLabel = document.getElementById(`label_${number}`);
  selectedLabel.classList.add('selected-label');
  let allNumberings = document.querySelectorAll('.numbering');
  allNumberings.forEach(function (num) {
    num.classList.remove('active');
  });
  let selectedNumbering = document.getElementById(`numbering_${number}`);
  selectedNumbering.classList.add('active');
}

let currentSlide = 0;
let autoInterval;
const slides = document.querySelectorAll('.slide');
const slideTexts = document.querySelectorAll('.slide-text');
const slideTexts1 = document.querySelectorAll('.slide-text-1');

function showSlide(index) {
  slides.forEach((slide, i) => {
    const opacity = i === index ? 1 : 0;
    slide.style.opacity = opacity;
    slideTexts[i].style.opacity = opacity;
    slideTexts1[i].style.opacity = opacity;
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function toggleAuto() {
  const autoButton = document.querySelector('.auto-icon');
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    autoButton.src = '/imgs/icon_play__c1w1nbnuzqwm_large.svg';
  } else {
    autoInterval = setInterval(() => {
      changeSlide(1);
    }, 3000);
    autoButton.src = '/imgs/solar--pause-bold.svg';
  }
}

showSlide(currentSlide);

document.addEventListener('keydown', function (event) {
  if (event.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (event.key === "ArrowRight") {
    changeSlide(1);
  }
});

function toggleRotationMacOs() {
  const button = document.getElementById("myButton");
  const div = document.getElementById("myDiv-macos");

  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

function toggleRotationInfoWithMac() {
  const button = document.getElementById("myBtn");
  const div = document.getElementById("Div-mac");
  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

const container = document.querySelector('.container');
let shift = 0;

function moveForward() {
  container.style.transition = 'none';
  shift -= 350;
  container.style.transform = `translateX(${shift}px)`;
  document.querySelector('.backButton').disabled = false;
  document.querySelector('.forwardButton').disabled = true;
  setTimeout(() => {
    container.style.transition = '';
  });
}

function moveBackward() {
  container.style.transition = 'none';
  shift += 350;
  container.style.transform = `translateX(${shift}px)`;
  document.querySelector('.backButton').disabled = shift === 0;
  document.querySelector('.forwardButton').disabled = false;
  setTimeout(() => {
    container.style.transition = '';
  });
}

function toggleRotationMacOsCustom() {
  const button = document.getElementById("myBtn-custom");
  const div = document.getElementById("myDiv-macos-custom");

  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

function toggleRotationMacOsCustom2() {
  const button = document.getElementById("plus-1");
  const div = document.getElementById("myDiv-macos-2");

  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

function toggleRotationMacOsCustom3() {
  const button = document.getElementById("myBtn-3");
  const div = document.getElementById("myDiv-macos-3");
  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

function toggleRotationMacOsCustom4() {
  const button = document.getElementById("plus-4");
  const div = document.getElementById("myDiv-macos-4");

  button.classList.toggle("rotate");
  div.style.display = div.style.display === "block" ? "none" : "block";
}

let items = document.querySelectorAll('.item-with-div-info');
setTimeout(function () {
  for (let i = 0; i < 4; i++) {
    items[i].classList.add('active');
  }
}, 100);

document.getElementById('select-with-item-mac').addEventListener('change', function () {
  let selectedOption = parseInt(this.value);
  items.forEach(function (item) {
    item.classList.remove('active');
  });
  setTimeout(function () {
    for (let i = (selectedOption - 1) * 4; i < selectedOption * 4; i++) {
      items[i].classList.add('active');
    }
  });
});

function changePhoto(number) {
  let photo = document.getElementById('photo-second');
  photo.src = `/imgs/phone${number}.jpg`;

  let allSwitches = document.querySelectorAll('.switch-second');
  allSwitches.forEach(function (element) {
    element.classList.remove('selected-second');
  });

  let selectedSwitch = document.getElementById(`switch_${number}_second`);
  selectedSwitch.classList.add('selected-second');

  let allLabels = document.querySelectorAll('.switch-label-second');
  allLabels.forEach(function (label) {
    label.classList.remove('selected-label-second');
  });

  let selectedLabel = document.getElementById(`label_${number}_second`);
  selectedLabel.classList.add('selected-label-second');

  let allNumberings = document.querySelectorAll('.numbering-second');
  allNumberings.forEach(function (num) {
    num.classList.remove('active-second');
  });

  let selectedNumbering = document.getElementById(`numbering_${number}_second`);
  selectedNumbering.classList.add('active-second');
}
