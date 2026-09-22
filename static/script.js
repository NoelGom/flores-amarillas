const flowersContainer = document.getElementById('flowers-container');
const fallingContainer = document.getElementById('falling-container');
const particlesContainer = document.getElementById('particles');

function buildFlower(el, petals = 10) {
    for (let i = 0; i < petals; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.style.transform = `translate(-50%, -92%) rotate(${i * (360 / petals)}deg)`;
        el.appendChild(petal);
    }

    const center = document.createElement('span');
    center.className = 'center';
    el.appendChild(center);

    const spark = document.createElement('span');
    spark.className = 'spark';
    el.appendChild(spark);
}

function makeFlower(x, y, size, delay = 0) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${x}%`;
    flower.style.top = `${y}%`;
    flower.style.setProperty('--size', `${size}px`);
    flower.style.animationDelay = `${delay}ms, ${delay + 1000}ms`;
    buildFlower(flower, 10);
    flowersContainer.appendChild(flower);
}

function fillScreen(amount = 110) {
    for (let i = 0; i < amount; i++) {
        makeFlower(
            Math.random() * 100,
            Math.random() * 100,
            26 + Math.random() * 72,
            Math.random() * 1300
        );
    }
}

function flowerBurst(amount = 32, extraFlowers = 18) {
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement('span');
        confetti.className = 'confetti';
        confetti.style.left = `${36 + Math.random() * 28}%`;
        confetti.style.top = `${40 + Math.random() * 24}%`;
        confetti.style.animationDelay = `${Math.random() * 250}ms`;
        flowersContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1800);
    }

    for (let i = 0; i < extraFlowers; i++) {
        makeFlower(
            4 + Math.random() * 92,
            5 + Math.random() * 90,
            34 + Math.random() * 70,
            Math.random() * 400
        );
    }
}

function superExplosion() {
    flowerBurst(60, 34);
    setTimeout(() => flowerBurst(40, 20), 280);
    setTimeout(() => flowerBurst(30, 14), 520);
}

function makeFallingFlower() {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.setProperty('--size', `${18 + Math.random() * 30}px`);
    flower.style.setProperty('--drift', `${-120 + Math.random() * 240}px`);
    flower.style.setProperty('--spin', `${-220 + Math.random() * 440}deg`);
    flower.style.animationDuration = `${7 + Math.random() * 6}s`;
    buildFlower(flower, 8);
    fallingContainer.appendChild(flower);
    setTimeout(() => flower.remove(), 14000);
}

function rainLoop() {
    makeFallingFlower();
    setTimeout(rainLoop, 120 + Math.random() * 200);
}

function makeParticle() {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 17000);
}

function particleLoop() {
    makeParticle();
    setTimeout(particleLoop, 220 + Math.random() * 240);
}

fillScreen(185);
for (let i = 0; i < 30; i++) makeParticle();
for (let i = 0; i < 45; i++) setTimeout(makeFallingFlower, i * 75);

setTimeout(() => flowerBurst(70, 45), 120);
setTimeout(() => flowerBurst(60, 38), 420);
setTimeout(superExplosion, 760);
setTimeout(() => flowerBurst(55, 34), 1100);
setTimeout(superExplosion, 1500);
setTimeout(() => flowerBurst(65, 40), 2100);

rainLoop();
particleLoop();

setInterval(() => flowerBurst(32, 18), 4500);
