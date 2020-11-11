//태그 선택
//var button1 = document.querySelector('.drum')
var buttons = document.querySelectorAll('.drum') //querySelectorAll로 지정하면 배열이 된다.



//이벤트
//button1.addEventListener('click',btnClick) //콜백함수 삽입


document.addEventListener('keydown',keyClick)

  for(i=0;i<buttons.length;i++)
  {
      buttons[i].addEventListener('click',btnClick);
  }


function keyClick(e) {
    console.log(e.key);
    drumSound(e.key);
}


function btnClick() {

    console.log(this.textContent); 
    drumSound(this.textContent)
}

function drumSound(x) {
switch(x){
    case 'w':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        buttons[0].classList.add('pressed');
        setTimeout(function(){ //setTimeout에 익명함수 넣음
            buttons[0].classList.remove('pressed')
        } ,200)
        break;
    case 'a':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        buttons[1].classList.add('pressed');
        setTimeout(function(){ 
            buttons[1].classList.remove('pressed')
        } ,200)
        break;
    case 's':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        buttons[2].classList.add('pressed');
        setTimeout(function(){ 
            buttons[2].classList.remove('pressed')
        } ,200)
        break;
    case 'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        buttons[3].classList.add('pressed');
        setTimeout(function(){ 
            buttons[3].classList.remove('pressed')
        } ,200)
        break;
    case 'j':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        buttons[4].classList.add('pressed');
        setTimeout(function(){ 
            buttons[4].classList.remove('pressed')
        } ,200)
        break;
    case 'k':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        buttons[5].classList.add('pressed');
        setTimeout(function(){ 
            buttons[5].classList.remove('pressed')
        } ,200)
        break;
    case 'l':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        buttons[6].classList.add('pressed');
        setTimeout(function(){ 
            buttons[6].classList.remove('pressed')
        } ,200)
        break;
    }
}


