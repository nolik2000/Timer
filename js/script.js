var counter = 0

function start() {
    counter += 1
    if (counter == 1) {
        function count() {
            var i = 666;
            var timer = setInterval(function() {
                console.log(i);
                document.getElementById('text').innerHTML = i;
                document.getElementById('audi').innerHTML = "<audio src='tick.mp3' autoplay loop> </audio>";
                if (i == 0) {
                    clearInterval(timer);
                    document.getElementById('text').innerHTML = "<div id = 'trailer' class='is_overlay'>  <video autoplay> + <source src = 'vid.mp4' type = 'video/mp4'> + </source> + </video>  </div>";
                    document.getElementById('audi').innerHTML = "<audio src='T_H.mp3' autoplay> </audio>";
                }
                i--;
            }, 1000);
        }
        count();
    }
}
