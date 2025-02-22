document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const overlay = document.querySelector('.overlay');

    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            // 防止重复激活
            if(box.classList.contains('active')) return;

            // 添加激活状态
            box.classList.add('active');
            overlay.style.display = 'block';

            // 播放音频
            const audio = box.querySelector('audio');
            if(audio) audio.play();
        });

        // 关闭按钮事件
        box.querySelector('.close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            box.classList.remove('active');
            overlay.style.display = 'none';

            // 暂停音频
            const audio = box.querySelector('audio');
            if(audio) audio.pause();
        });
    });

    // 点击遮罩层关闭
    overlay.addEventListener('click', () => {
        boxes.forEach(box => {
            box.classList.remove('active');
            box.querySelector('audio').pause();
        });
        overlay.style.display = 'none';
    });
});