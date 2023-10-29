let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
            })
        }

    })
    let header = document.querySelector('.header');
    header.classList.toggle('ssticky',window.srollY > 100)

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


var csr = document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
    gsap.to(csr,{
        left:dets.x+25,
        top:dets.y+25
    })
})

const typed = new Typed(".multiple-text",{
    strings : ["Full Stack Developer", "Front-End Developer", "Back-End Developer"],
    typeSpeed: 100,
    backspeed:100,
    backDelay:1000,
    loop:true,
});

function scrollAnimation() {
    
gsap.from(".navbar",{
    y: -60,
    stagger:.5,
    duration: .8,
    delay: .3,
    opacity: 0,
  
})
gsap.from(".logo",{
    y: -60,
   duration: 1,
   opacity:0,
   delay:1
})
gsap.from(".homepart1 h3",{
    x: 200,
    duration: 1,
    delay:1,
    stagger: .3,
    opacity:0
})

gsap.from(".homepart1 p",{
    x: -200,
    duration: 1,
    delay:1,
    stagger: .3,
    opacity:0
})

gsap.from(".social-media  ",{
    y: 200,
    duration: 1,
    scale:3,
    delay:1,
    stagger: .3,
    opacity:0
})
gsap.from(".social-media a i ",{
    x: 200,
    scale:3,
    duration: 1,
    delay:1,
    stagger: .3,
    opacity:0
})


gsap.from(".about-img img",{
   y: 400,
   scale: .45,
   duration: 1.5,
   opacity: 0,
   scrollTrigger:{
    trigger:".about ",
    scroller:"body",
    start: "top 40%",
    end: "top 80%",
   scrub:2
}
})
gsap.from(".about-content h2,.about-content h3",{
    x: 300,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
     trigger:".about ",
     scroller:"body",
     start: "top 40%",
     end: "top 80%",
    scrub:2
 }
 })

 gsap.from(".about-content p",{

    y: 500,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about",
        scroller:"body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2

    }
 })
 gsap.from(".contact .heading",{

    y: -150,
    duration:.75,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contact",
        scroller:"body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2

    }
 })

 gsap.from(".contact form",{

    y: 150,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: "form",
        scroller:"body",
        start: "top 70%",
        end: "top 100%",
        scrub: 2

    }
 })

 gsap.from(".services .heading",{

    y: -150,
    duration:.75,
    opacity: 0,
    scrollTrigger: {
        trigger: ".services",
        scroller:"body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2

    }
 })

 gsap.from(".services-container .services-box",{

    y: 150,
    duration:.75,
    opacity: 0,
    scrollTrigger: {
        trigger: ".services-container .services-box",
        scroller:"body",
        start: "top 70%",
        end: "top 100%",
        scrub: 2

    }
 })
 gsap.from(".portfolio .heading",{

    y: -150,
    duration:.75,
    opacity: 0,
    scrollTrigger: {
        trigger: ".portfolio",
        scroller:"body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2

    }
 })

 gsap.from(".portfolio-container .portfolio-box",{

    y: 150,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".portfolio-container .portfolio-box",
        scroller:"body",
        start: "top 70%",
        end: "top 100%",
        scrub: 2

    }
 })
}
scrollAnimation()



