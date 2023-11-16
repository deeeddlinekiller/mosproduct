// 更新图像位置的函数
function updatePosition(element, x, y) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';
}

// 生成随机位置的函数
function generateRandomPosition(element) {
    const x = Math.random() * (window.innerWidth - element.clientWidth);
    const y = Math.random() * (window.innerHeight - element.clientHeight);
    return { x, y };
}

// 将浮动逻辑封装在一个函数中
function setupFloatingImage(imageId, soundId, popupTextId) {
    const floatingImage = document.getElementById(imageId);
    const soundEffect = document.getElementById(soundId);
    const popupText = document.getElementById(popupTextId);
    let isHovered = false;

    // 鼠标悬停事件
    floatingImage.addEventListener('mouseover', () => {
        isHovered = true;
        soundEffect.play();
    });

    // 鼠标移出事件
    floatingImage.addEventListener('mouseout', () => {
        isHovered = false;
        soundEffect.pause(); // 停止音效播放
    });

    // 点击事件显示弹窗
    floatingImage.addEventListener('click', () => {
        popupText.style.display = 'block';
    });

    // 实现漂浮效果的函数
    function floatImage() {
        if (!isHovered) {
            const newPosition = generateRandomPosition(floatingImage);
            updatePosition(floatingImage, newPosition.x, newPosition.y);
        }
    }

    // 设置定时器以定期更新位置
    setInterval(floatImage, 4000); // 每4秒更新一次位置
    floatImage(); // 初始化位置
}

// 应用浮动逻辑到每个浮动图像
setupFloatingImage('floatingImage1', 'soundEffect1', 'popupText1');
setupFloatingImage('floatingImage2', 'soundEffect2', 'popupText2');
setupFloatingImage('floatingImage3', 'soundEffect3', 'popupText3');

// 为关闭按钮添加禁用警告
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('This button is disabled. Click outside the window to close it.');
    });
});

// 点击事件关闭弹窗
window.addEventListener('click', event => {
    document.querySelectorAll('.popup-window').forEach(popupWindow => {
        if (event.target == popupWindow) {
            popupWindow.style.display = 'none';
        }
    });
});