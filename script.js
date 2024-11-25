const Saturate = document.getElementById("sat");
const img = document.getElementById("img");
const Contrast = document.getElementById("con");
const Brightness = document.getElementById("bri");
const Sepia = document.getElementById("sep");
const Grayscale = document.getElementById("gry");
const Blur = document.getElementById("blur");
const Hue = document.getElementById("hue");
const download = document.getElementById("dow");
const upload = document.getElementById("upload");
const span = document.getElementById("span");
const box = document.getElementById("imgg");
const canvas = document.getElementById(`can`);
const ct = canvas.getContext(`2d`);

window.onload = function () {
  download.style.display = `none`;
  span.style.display = `none`;
  box.style.display = `none`;
};

upload.onchange = function () {
  download.style.display = `block`;
  span.style.display = `block`;
  box.style.display = `block`;
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
};

const filters = document.querySelectorAll("ul li input");
filters.forEach((input) => {
  input.addEventListener(`input`, function () {
    ct.filter = `
      saturate(${Saturate.value}%)
      contrast(${Contrast.value}%)
      brightness(${Brightness.value}%)
      sepia(${Sepia.value}%)
      grayscale(${Grayscale.value})
      blur(${Blur.value}px)
      hue-rotate(${Hue.value}deg)
    `;
    ct.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = `none`;
  });
});

function load() {
  img.style.filter = `none`;
  Saturate.value = `100`;
  Contrast.value = `100`;
  Brightness.value = `100`;
  Sepia.value = `0`;
  Hue.value = `0`;
  Grayscale.value = `0`;
  Blur.value = `0`;
}

download.onclick = function () {
  download.href = canvas.toDataURL();
};

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ct.drawImage(img, 0, 0, canvas.width, canvas.height);
  img.style.display = `none`;
};
