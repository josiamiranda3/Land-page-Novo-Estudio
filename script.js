// --- INICIALIZAÇÃO DO GSAP E SCROLL SUAVE ---
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main-content"),
    smooth: true,
    lerp: 0.08
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main-content", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main-content").style.transform ? "transform" : "fixed"
});

// --- ANIMAÇÃO DO TÍTULO HERO ---
const heroTitleLines = document.querySelectorAll(".hero-title .line");
gsap.to(heroTitleLines, {
    y: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2,
    delay: 0.5
});


// --- LÓGICA DO CURSOR MAGNÉTICO ---
const cursor = document.querySelector('.cursor');
const magneticLinks = document.querySelectorAll('.magnetic-link');

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
    });
});

magneticLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            width: 80,
            height: 80,
            duration: 0.3,
            ease: 'power3.out'
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            width: 20,
            height: 20,
            duration: 0.3,
            ease: 'power3.out'
        });
    });
});


// --- ATUALIZAÇÃO DO SCROLLTRIGGER ---
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


// --- ANIMAÇÕES DE SCROLL COM GSAP (Exemplo para a seção de projetos) ---
const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            scroller: "#main-content",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out'
    });
});

// --- LÓGICA DO MENU MOBILE (HAMBURGER) ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('main-nav');
const navLinks = mobileNav.querySelectorAll('a');

if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
        // Adiciona/remove a classe 'active' para animar o botão e mostrar/esconder o menu
        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('mobile-active');
        
        // Atualiza o atributo aria-expanded para acessibilidade
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    });

    // Adiciona um listener para cada link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Fecha o menu quando um link é clicado
            if (mobileNav.classList.contains('mobile-active')) {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.remove('mobile-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
            // A lógica de scroll suave (data-scroll-to) já deve funcionar
            // pois está sendo gerenciada pelo Locomotive Scroll.
        });
    });
}
