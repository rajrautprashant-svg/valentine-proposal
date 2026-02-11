const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');
let noClickCount = 0;

noBtn.addEventListener('click', function() {
    noClickCount++;
    
    // Yes button size बढाउने
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    let newSize = currentSize + 10;
    yesBtn.style.fontSize = newSize + 'px';
    yesBtn.style.padding = (15 + noClickCount * 2) + 'px ' + (40 + noClickCount * 4) + 'px';
    
    // No button सानो बनाउने
    let noCurrentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (noCurrentSize > 12) {
        noBtn.style.fontSize = (noCurrentSize - 3) + 'px';
        noBtn.style.padding = (15 - noClickCount) + 'px ' + (40 - noClickCount * 2) + 'px';
    }
    
    // Random हल्लाउने effect
    noBtn.style.transform = 'translateX(' + (Math.random() * 50 - 25) + 'px) translateY(' + (Math.random() * 50 - 25) + 'px)';
    setTimeout(() => {
        noBtn.style.transform = 'translateX(0) translateY(0)';
    }, 200);
    
    // Yes button को text पनि ठूलो हुँदै जान्छ
    if (noClickCount === 3) {
        yesBtn.innerHTML = 'Yes ❤️ Please!';
    } else if (noClickCount === 5) {
        yesBtn.innerHTML = 'YES ❤️ PLEASE!';
    } else if (noClickCount === 7) {
        yesBtn.innerHTML = 'YESSSSS!!! ❤️';
    }
});

yesBtn.addEventListener('click', function() {
    responseMessage.classList.remove('hidden');
    yesBtn.style.transform = 'scale(1.2)';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    
    // धेरै confetti effect
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 20);
    }
    
    // धेरै hearts effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 50);
    }
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animation = 'confetti 3s ease-out';
    confetti.style.position = 'fixed';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.zIndex = '1000';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '70%';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.animation = 'float 3s ease-out';
    heart.style.zIndex = '1000';
    heart.style.opacity = '0.8';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Confetti animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
