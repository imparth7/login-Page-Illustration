// dblue => #1b1a30 - #07305f
// red => #4b1720 - #f85460
// blue => #1b2a55 - #977ba0
// yellow => #feb263 - #fd8c5e
// orange => #fe6d5b - #692e36
// black => #251f22 - #c34c31
// extra => #111111 - #455785

var darkblue = document.querySelector('.darkblue'),
    red = document.querySelector('.red'),
    blue = document.querySelector('.blue'),
    yellow = document.querySelector('.yellow'),
    orange = document.querySelector('.orange'),
    black = document.querySelector('.black');

let body = document.querySelector('body');
let themeColor = document.querySelectorAll('.themeColor');

darkblue.addEventListener('click', themechange);
red.addEventListener('click', themechange);
blue.addEventListener('click', themechange);
yellow.addEventListener('click', themechange);
orange.addEventListener('click', themechange);
black.addEventListener('click', themechange);

function themechange(){
    var changecolor = this.getAttribute('style');
    body.setAttribute('style', changecolor);
}

// LoginIllu
let LoginIllu = document.querySelector('.LoginIllu'),
    illu = document.querySelector('.img.illu'),
    khaby = document.querySelector('.img.khaby');

illu.addEventListener('click', changeIllu);
khaby.addEventListener('click', changeIllu);

function changeIllu(){
    let src = this.children[0].getAttribute('src');
    LoginIllu.setAttribute('src', src);
}

// hide and see password
let eye = document.querySelector('#password'),
    passwordtext = document.querySelector('#pwordtext'),
    state = false;

eye.addEventListener('click', eyefun);
function eyefun(){
    eye.classList.toggle('fa-eye-slash');
    if(state){
        passwordtext.setAttribute('type', 'password');
        state = false;
    }else{
        passwordtext.setAttribute('type', 'text');
        state = true;
    }
}