const pathPrefix = location.pathname.includes("/pages/") ? "../" : "";

const bgImages = [
  `${pathPrefix}assets/bg/1.jpg`,
  `${pathPrefix}assets/bg/2.jpg`,
  `${pathPrefix}assets/bg/3.jpg`,
  `${pathPrefix}assets/bg/4.jpg`,
  `${pathPrefix}assets/bg/5.jpg`,
  `${pathPrefix}assets/bg/6.jpg`,
  `${pathPrefix}assets/bg/7.jpg`,
  `${pathPrefix}assets/bg/8.jpg`,
  `${pathPrefix}assets/bg/9.jpg`,
  `${pathPrefix}assets/bg/10.jpg`
];

function setRandomBackground() {
  const index = Math.floor(Math.random() * bgImages.length);
  const image = bgImages[index];

  document.body.style.backgroundImage = `url(${image})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.transition = "background-image 1s ease-in-out";
}

setRandomBackground();
setInterval(setRandomBackground, 15000);

  