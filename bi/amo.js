let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://s21.ax1x.com/2024/08/13/pApyKeg.jpg') {
    myImage.setAttribute ('src','https://s2.loli.net/2024/08/13/uemLP64qgfpzVKI.webp');
  } else {
    myImage.setAttribute ('src','https://s21.ax1x.com/2024/08/13/pApyKeg.jpg');
  }
};
