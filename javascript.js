document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(eyeRect.width / 2 - pupil.offsetWidth / 2, Math.hypot(deltaX, deltaY));

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
