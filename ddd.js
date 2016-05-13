//this names id of the spots that are in the 3 boxes
var slot1 = document.getElementById("slot1") 
var slot2 = document.getElementById("slot2")
var slot3 = document.getElementById("slot3")
var control = document.getElementById("control")

//the control button makes it click when ever you click on the button
control.addEventListener("click", function(){
    //this makes the number go to one to seven on the box
    var spot1 = Math.floor((Math.random() * 7) + 1);
    var spot2 = Math.floor((Math.random() * 7) + 1);
    var spot3 = Math.floor((Math.random() * 7) + 1);

    slot1.innerHTML = spot1;
    slot2.innerHTML = spot2;
    slot3.innerHTML = spot3;
    
    function write_message($message) {
     document.getElementById('messages').innerHTML = $message;
 }
    //it checks out the numbers if they are all equal
    if (spot1 == spot2 && spot2 == spot2 && spot3 == spot1) {
          //writes a message say winner
            write_message('Winner!');
             
         }
         // checks out the numbers if the are equal to 2 numbers
    else if(spot2 == spot3 || spot1 == spot2 || spot3 ==spot1){
        //writes the message if got 2
            write_message('you got 2')
        }
})