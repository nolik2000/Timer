function start() {
    function count() {
        var i = 150;
        var timer = setInterval(function() {
            console.log(i);
            document.getElementById('text').innerHTML = i;
            if (i == 0){
              clearInterval(timer);
            document.getElementById('text').innerHTML = "<div id = 'trailer' class='is_overlay'>  <video autoplay> + <source src = 'vid.mp4' type = 'video/mp4'> + </source> + </video>  </div>" ;
            }
            i--;
        }, 1000);
    }
    count();
}
