// document.addEventListener('DOMContentLoaded', () => {

//     // --- DETECÇÃO DE DISPOSITIVO DE TOQUE ---
//     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//     if (isTouchDevice) {
//         document.body.classList.add('touch-device');
//     }

//     // --- LÓGICA DO MENU MOBILE (HAMBURGER) ---
//     const hamburgerBtn = document.getElementById('hamburger-btn');
//     const mobileNav = document.getElementById('main-nav');
//     if (hamburgerBtn && mobileNav) {
//         const navLinks = mobileNav.querySelectorAll('a');
//         const toggleMenu = () => {
//             hamburgerBtn.classList.toggle('active');
//             mobileNav.classList.toggle('mobile-active');
//             const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
//             hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
//         };
//         hamburgerBtn.addEventListener('click', toggleMenu);
//         navLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 if (mobileNav.classList.contains('mobile-active')) {
//                     toggleMenu();
//                 }
//             });
//         });
//     }

//     // --- ANIMAÇÃO DO TÍTULO HERO ---
//     gsap.to(".hero-title .line", {
//         y: 0,
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.2,
//         delay: 0.8
//     });
    
//     // --- LÓGICA DE ANIMAÇÃO E SCROLL ---
//     if (!isTouchDevice) {
//         // --- DESKTOP: INICIA LOCOMOTIVE SCROLL E ANIMAÇÕES COMPLEXAS ---
//         const scroller = document.querySelector("#main-content");
//         const locoScroll = new LocomotiveScroll({
//             el: scroller,
//             smooth: true,
//             lerp: 0.08,
//             multiplier: 1
//         });

//         locoScroll.on("scroll", ScrollTrigger.update);

//         ScrollTrigger.scrollerProxy(scroller, {
//             scrollTop(value) {
//                 return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//             },
//             getBoundingClientRect() {
//                 return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//             },
//             pinType: scroller.style.transform ? "transform" : "fixed"
//         });

//         // Animação de Parallax com data-scroll-speed
//         gsap.utils.toArray("[data-scroll-speed]").forEach(el => {
//             gsap.to(el, {
//                 y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.scrollSpeed,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: scroller,
//                     start: "top top",
//                     end: "bottom bottom",
//                     scrub: true,
//                     scroller: scroller, 
//                 }
//             });
//         });

//         // Lógica do Header Scrolled
//         locoScroll.on('scroll', (instance) => {
//             document.getElementById('main-header').classList.toggle('scrolled', instance.scroll.y > 50);
//         });

//         // Lógica do Cursor Magnético
//         const cursor = document.querySelector('.cursor');
//         const magneticLinks = document.querySelectorAll('.magnetic-link');
//         if (cursor) {
//             window.addEventListener('mousemove', (e) => {
//                 gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power2.out' });
//             });
//             magneticLinks.forEach(link => {
//                 link.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 4, duration: 0.3, ease: 'power3.out' }));
//                 link.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power3.out' }));
//             });
//         }
        
//         ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//         ScrollTrigger.refresh();

//     } else {
//         // --- MOBILE: USA SCROLL NATIVO ---
//         document.querySelectorAll('a[data-scroll-to]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const targetId = this.getAttribute('href');
//                 const targetElement = document.querySelector(targetId);
//                 if (targetElement) {
//                     targetElement.scrollIntoView({ behavior: 'smooth' });
//                 }
//             });
//         });

//         // Lógica do Header Scrolled
//         window.addEventListener('scroll', () => {
//             document.getElementById('main-header').classList.toggle('scrolled', window.scrollY > 50);
//         });

//         // Esconde o cursor customizado
//         const cursor = document.querySelector('.cursor');
//         if (cursor) cursor.style.display = 'none';
//     }

//     // --- ANIMAÇÕES DE ENTRADA (FUNCIONAM EM AMBOS) ---
//     const revealElements = document.querySelectorAll(".anim-reveal");
//     revealElements.forEach((el) => {
//         gsap.from(el, {
//             y: 70,
//             opacity: 0,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: el,
//                 scroller: isTouchDevice ? window : "#main-content", // Usa o scroller correto
//                 start: "top 90%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none none"
//             }
//         });
//     });

// });
