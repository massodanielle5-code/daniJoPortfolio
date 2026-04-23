  // ====== Défilement fluide vers les sections ======
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// ====== Mise en surbrillance du lien actif ======
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ====== Style du lien actif ======
const style = document.createElement('style');
style.innerHTML = `
    nav a.active {
        color: #ffe082;
        text-decoration: underline;
    }
`;
document.head.appendChild(style);

// ====== Bouton Retour en haut ======
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====== Message de bienvenue dans la console ======
console.log("Bienvenue sur le portfolio de Danielle Masso ✨");

// ====== Accordéon du projet APPTA ======
const projectToggle = document.getElementById('projectToggle');
const projectContent = document.getElementById('projectContent');

projectToggle.addEventListener('click', () => {
    projectToggle.classList.toggle('active');
    projectContent.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + elementPosition - headerHeight - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});