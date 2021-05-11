window.onload = function(){

    var segundos = 00;
    var milesimos = 00;
    var appendMilesimos = 
    document.getElementById("milesimos")
    var appendSegundos =
    document.getElementById("segundos")
    var buttonStart =
    document.getElementById('button-start');
    var buttonStop =
    document.getElementById('button-stop');
    var buttonReset =
    document.getElementById('button-reset');
    var interval;

    buttonStart.onclick = function() {
        
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
        clearInterval(interval);
   }
   
    buttonReset.onclick = function() {
        
        clearInterval(interval);
        milesimos = "00";
        segundos = "00";
        appendMilesimos.innerHTML = milesimos;
        appendSegundos.innerHTML = segundos;

    }



    function startTimer (){
        
        milesimos++;

        if (milesimos <= 9){
            
            appendMilesimos.innerHTML = "0" + milesimos;
        }
        if (milesimos > 9){

            appendMilesimos.innerHTML = milesimos;
        }
        if (milesimos > 99){
            
            console.log("segundos");
            segundos++;
            appendSegundos.innerHTML = "0" + segundos;
            milesimos = 0;
            appendMilesimos.innerHTML = "0" + 0;
        }
        if(segundos > 9){
            
            appendSegundos.innerHTML = segundos;

        }



    }
}
