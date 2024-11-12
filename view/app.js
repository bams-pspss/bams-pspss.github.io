let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let myName = document.getElementById('myName');

let homeButt = document.querySelector('.home a');
let abtmeButt = document.querySelector('.aboutMe a');


let homeSec = document.getElementById('home');
let abtMeSec = document.getElementById('aboutMe');





window.addEventListener('DOMContentLoaded', function(){
    this.setTimeout(()=>{
        logoSpan.forEach((span, idx) =>{
            this.setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        this.setTimeout(()=> {
            logoSpan.forEach((span, idx) =>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1 ) * 50)
            })
        }, 2000);

        this.setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300);
    }, 100)

    this.setTimeout(()=>{
        myName.classList.add('play');
    }, 5000);
})


