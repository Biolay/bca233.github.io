let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://s21.ax1x.com/2024/08/13/pApyKeg.jpg') {
    myImage.setAttribute ('src','https://s2.loli.net/2024/08/13/uemLP64qgfpzVKI.webp');
  } else {
    myImage.setAttribute ('src','https://s21.ax1x.com/2024/08/13/pApyKeg.jpg');
  }
};

function 测试() { alert('都叫你别点这里了。')}

//人机验证
function RJ储存() {
    let blend;
    const music = new Audio('https://github.com/Biolay/bca233.github.io/blob/main/bi/nb1.mp3');
    // 创建音频+执行对象
    while (true) {
        blend = prompt('请问您是人类吗？');
        
        if (blend === '是') {
            localStorage.setItem('name', blend);
            console.log(blend);
            break; // 输入正确，退出循环
        } else {
            alert('人机，乐子人滚出去！');
          music.play();// 提示用户重新输入
        }
    }
}

// 初次构造
if (!localStorage.getItem('name')) {
    RJ储存()
  }
