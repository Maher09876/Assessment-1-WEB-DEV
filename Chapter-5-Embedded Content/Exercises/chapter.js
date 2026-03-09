const buttons = document.querySelectorAll('.sound-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = new Audio(btn.dataset.audio);
        audio.play().catch(err => console.log("audio error:", err));
    });
});
