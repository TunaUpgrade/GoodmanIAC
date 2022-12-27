var vid = document.getElementById("myVideo");//variable video//
var button = document.querySelector('.play');//variable boton//
            
    function playVid() { 
     vid.play();//se reproduce el video y el boton cambia// 
     button.style.opacity = "0";
     button.style.transition = "all .3s";
} 

     vid.onended = function(){//finaliza el video y vuelve al inicio, el boton vuelve a aparecer//
     button.style.opacity = "100%";
     button.style.transition = "all .10s";
     button.style.display = "block";
     vid.load();
     vid.controls = false;
}