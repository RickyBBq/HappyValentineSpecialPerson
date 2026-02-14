function generateSurprise() {
    const nameInput = document.getElementById('userName').value;
    if (!nameInput.trim()) {
        alert("Please enter your name first! ❤️");
        return;
    }

    const lines = [
        `${nameInput} is cute, but I thought your name was Google, because you’re everything I’ve been searching for.`,
        `I think I’m lost, ${nameInput}. Can you give me directions to your heart?`,
        `Are you a magician, ${nameInput}? Because whenever I look at you, everyone else disappears.`,
        `Are you a parking ticket? Because you’ve got 'Fine' written all over you, ${nameInput}.`,
        `${nameInput}, are you WiFi? Because I’m feeling a very strong connection.`,
        `If you were a triangle, ${nameInput}, you’d be acute one.`,
        `I’m not a photographer, ${nameInput}, but I can definitely picture us together.`,
        `${nameInput}, do you have a map? I keep getting lost in your eyes.`,
        `Are you made of Copper and Tellurium? Because you are Cu-Te, ${nameInput}.`,
        `Is there an airport nearby, or is that just my heart taking off because of you, ${nameInput}?`
    ];

    const myImages = [
        "https://i.ibb.co/2fP1WVS/1001819e53f22d7f795d8e177d1d82b5.jpg", 
        "https://i.ibb.co/Xf8kbvBh/4fe59d0b792f4f7cee7f2fa396deb7e7.jpg", 
        "https://i.ibb.co/dwypmsMM/a996754e4c4f72de83c608e926569d04.jpg", 
        "https://i.ibb.co/Jw0ZL9gd/8f9be8ca7a3ef3fa68aed92b0db68323.jpg", 
        "https://i.ibb.co/3yBj3LSR/37a6bcec79d7ebd088a5209463ff00e5.jpg"
    ];

    document.body.classList.add('dark-mode');
    document.getElementById('input-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    document.getElementById('personalized-message').innerText = `For ${nameInput}`;
    document.getElementById('rizz-text').innerText = lines[Math.floor(Math.random() * lines.length)];
    
    const randomPic = myImages[Math.floor(Math.random() * myImages.length)];
    document.getElementById('random-pic').src = randomPic;
    
    createStars(); 
}

function resetPage() {
    document.body.classList.remove('dark-mode');
    document.getElementById('stars-container').innerHTML = ''; // Clear stars
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('input-screen').classList.remove('hidden');
    document.getElementById('userName').value = ''; // Reset input
}

function createStars() {
    const container = document.getElementById('stars-container');
    container.innerHTML = ''; 
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}

// Background petals logic
(function initPetals() {
    for (let i = 0; i < 15; i++) {
        let p = document.createElement('div');
        p.style.cssText = `position: fixed; top: -5%; left: ${Math.random() * 100}vw; width: 10px; height: 10px; background: #f29ca9; border-radius: 50% 0; opacity: 0.4; pointer-events: none; animation: fall ${Math.random() * 3 + 4}s linear infinite;`;
        document.body.appendChild(p);
    }
})();

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(styleSheet);
