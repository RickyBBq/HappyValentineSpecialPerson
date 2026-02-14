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

    // Add your 5 image names here
    const myImages = [
        "pic1.jpg", 
        "pic2.jpg", 
        "pic3.jpg", 
        "pic4.jpg", 
        "pic5.jpg"
    ];

    // Switch to dark mode and show result screen
    document.body.classList.add('dark-mode');
    document.getElementById('input-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    // Update Content
    document.getElementById('personalized-message').innerText = `For ${nameInput}`;
    document.getElementById('rizz-text').innerText = lines[Math.floor(Math.random() * lines.length)];
    
    // Pick a random image from your list
    const randomPic = myImages[Math.floor(Math.random() * myImages.length)];
    document.getElementById('random-pic').src = randomPic;
}

// Falling petals animation background
(function initPetals() {
    for (let i = 0; i < 20; i++) {
        let p = document.createElement('div');
        p.style.cssText = `
            position: fixed; top: -5%; left: ${Math.random() * 100}vw;
            width: 10px; height: 10px; background: #f29ca9;
            border-radius: 50% 0; opacity: 0.5; pointer-events: none;
            animation: fall ${Math.random() * 3 + 4}s linear infinite;
        `;
        document.body.appendChild(p);
    }
})();

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(styleSheet);
