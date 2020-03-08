 function clock(){
         const fullDate= new Date();
         var hours= fullDate.getHours();
         var minutes= fullDate.getMinutes();
         var seconds= fullDate.getSeconds();


         if (hours < 10){
             hours= "0" + hours;
        }
        if (minutes < 10){
             minutes= "0" + minutes;
        }
        if (seconds < 10){
             seconds= "0" + seconds;
        }

        if(hours > 00) {message= "Have Good Day";}

        document.getElementById("hour").innerHTML= hours;
        document.getElementById("mins").innerHTML= minutes;
        document.getElementById("secs").innerHTML= seconds;
        document.getElementById("msgs").innerHTML= message;
   }

   setInterval(clock, 1000);