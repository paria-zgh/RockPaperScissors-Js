 let playerScore=0;
    let computerScore=0;   
    function choice(user){
       let pcChoice="";
       let result="";
       let pc=Math.floor(Math.random()*3)+1;
       switch(pc){
        case 1:
            pcChoice="paper";
        break;
        case 2:
            pcChoice="rock";
            break;
        case 3:
            pcChoice="scissors";
        break;
       }      
       if(
       (pc==1 && user=="scissors")||
       (pc==2 && user=="paper")||
       (pc==3 && user=="rock")       
       ){
        result="you win!";
        playerScore++; 
       }else if(
        (pc==1 && user=="paper")||
        (pc==2 && user=="rock")||
        (pc==3 && user=="scissors")
       ){
       result="It's a draw"
       }
       else{
        result=" you lose!";
        computerScore++;
       }      
     document.getElementById("yourChoice").innerHTML="Your Choice:"+" "+user;
     document.getElementById("pcChoice").innerHTML="Computer Choice:"+" "+pcChoice;
     document.getElementById("result").innerHTML=result;
     document.getElementById("playerScore").innerHTML="Your Score:"+playerScore;
     document.getElementById("computerScore").innerHTML="Computer Score:"+computerScore;   
    }
    function resetGame(){
       playerScore=0;
       computerScore=0;
       result='';     
     document.getElementById("yourChoice").innerHTML="Choose one"+"<br>"+"for start the game!";
     document.getElementById("pcChoice").innerHTML="";
     document.getElementById("result").innerHTML=result;
     document.getElementById("playerScore").innerHTML="Your Score:"+playerScore;
     document.getElementById("computerScore").innerHTML="Computer Score:"+computerScore;
    }