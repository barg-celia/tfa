"use strict";

// Nav portfolio

const toggleBtn = document.querySelector('.menu__toggle');
const menu1 = document.querySelector('.menu1');

if (toggleBtn && menu1) {
  toggleBtn.addEventListener('click', () => {
    menu1.classList.toggle('menu--open');
  });
}

// Lien actif portfolio

const menuLinks = document.querySelectorAll('.a-menu');

if (menuLinks.length) {
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Nav rux/dataplay

const menuBtn = document.querySelector('.menu__toggle--rux');
const menu2 = document.querySelector('.menu2');

if (menuBtn && menu2) {
  menuBtn.addEventListener('click', () => {
    menu2.classList.toggle('menu--open');
  });
}

// Lien actif rux/dataplay

const ruxLinks = document.querySelectorAll('.a-menu--rux');

if (ruxLinks.length) {
  ruxLinks.forEach(link => {
    link.addEventListener('click', function () {
      ruxLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// carroussel des filtres 

const track = document.querySelector('.filtres__track');
const slides = document.querySelectorAll('.filtres__presentations');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = 200; // taille de la slide
  if (track) {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

if (nextBtn && prevBtn && slides.length) {
  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
}

// détails qui apparaissent quand on clique sur un des filtres

const filtreDetails = [
  {
    text: "Filtre sensoriel : c'est un filtre qui permet de changer l'univers de la photo avec pleins de particules qui se rapport au produit",
    url: "#filtre-1"
  },
  {
    text: "Filtre éducatif : c'est un filtre qui permet de voir les bons et les mauavis ingrédients du produit qu'on prend en photo.",
    url: "#filtre-2"
  },
  {
    text: "Filtre rétro : c'est un filtre qui peut te faire revenir en arrière, pour te rappeler des souvenirs d'avant, et changer ton environnement pour revenir dans le passé",
    url: "#filtre-3"
  }
];

// --- OVERLAY MODAL POUR FILTRES ---
// fait avec l'aide de chatgpt
// début 

const presentations = document.querySelectorAll('.filtres__presentations');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const voirPlusBtn = document.getElementById('voirPlusBtn');

if (presentations.length && modalOverlay && modalContent && closeModal && voirPlusBtn) {
  presentations.forEach((item, index) => {
    item.addEventListener('click', () => {
      modalContent.textContent = filtreDetails[index].text;
      voirPlusBtn.href = filtreDetails[index].url;
      modalOverlay.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
    }
  });

  voirPlusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = voirPlusBtn.getAttribute('href');
    modalOverlay.classList.add('hidden');

    setTimeout(() => {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  });
}
// fin

// aide de chat gpt pour faire des particules
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 2,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}
)
}
