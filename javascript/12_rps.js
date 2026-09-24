let score = JSON.parse(localStorage.getItem('score'));
     
     if(!score )
     { 
      score = {
         wins : 0,
         losses: 0,
         ties : 0
      };
      }

      updatesocre();

     let isAutoPlaying = false;
      let intervalId;
     function autoplay()
     {
      if(!isAutoPlaying){
         intervalId = setInterval(function()  {
         const playermove = compmove();
         playgame(playermove);
       }, 1000);
       //this function is used to run the code every second

       isAutoPlaying = true;
      }else{
         clearInterval(intervalId);//this function stops the interval 
      }
     }

     //removing the onclick attribute and used EventListner 'click'
     document.querySelector('.js-rock-button').addEventListener('click',()=>{
      playgame('rock');
     });

      document.querySelector('.js-paper-button').addEventListener('click',()=>{
      playgame('paper');
     });
     
      document.querySelector('.js-scissors-button').addEventListener('click',()=>{
      playgame('scissors');
     });

     //EventListener 'keydown',game is played by pressing the keboard key r = rock,p = paper,s = scissors
     document.body.addEventListener('keydown',(event)=>{
     if(event.key === 'r')
     {
      playgame('rock');
     }else if(event.key==='p')
     {
      playgame('paper');
     }else if(event.key==='s')
     {
      playgame('scissors');
     }
     });

     //function for player move
      function playgame(playermove)
      {
         const computermove1 = compmove();
         let result ='';

         if(playermove === 'rock')
            {
                           
               if(computermove1 === 'rock')
               {
                  result = 'tie.';
               }
               else if(computermove1 === 'paper')
               {
                  result = 'you lose.';
               }
               else if(computermove1 === 'scissors')
               {
                  result = 'you win.';
               }

            }
         else if(playermove === 'paper')
            {
               if(computermove1 === 'rock')
               {
                  result = 'you win.';
               }
               else if(computermove1 === 'paper')
               {
                  result = 'tie.';
               }
               else if(computermove1 === 'scissors')
               {
                  result = 'you lose.';
               }

            }

         else if(playermove === 'scissors')
            {
                if(computermove1 === 'rock')
                  {
                     result = 'you lose.';
                  }
                  else if(computermove1 === 'paper')
                  {
                     result = 'you win.';
                  }
                  else if(computermove1 === 'scissors')
                  {
                     result = 'tie.';
                  }
            }
//update the score
            if(result === 'you win.')
            {
                score.wins += 1;
            }
            else if(result ==='you lose.')
            {
                score.losses +=1;
            }
            else if(result === 'tie.')
            {
                score.ties += 1;
            }


            localStorage.setItem('score',JSON.stringify(score));//here we store the updated score in local storage

            
            updatesocre();
            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `  you 
        <img src="images/${playermove}-emoji.png" class="rock-button">
        :
          computer
        <img src="images/${computermove1}-emoji.png" class="rock-button">`;


      }

      //this function is for the update the socre on web page 
      function updatesocre()
      {
         document.querySelector('.js-socre').innerHTML=`wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
      }


// differencitate the random number between rock paper and scissor.
      function compmove()
      {
         const randomNumber1 = Math.random();
         let computermove1 = '';

         if(randomNumber1 > 0 && randomNumber1 < 1/3){
            computermove1 = 'rock';
         }
         else if(randomNumber1 > 1/3 && randomNumber1 < 2/3){
            computermove1 = 'paper';
         }
         else if(randomNumber1 >2/3 && randomNumber1 < 1){
            computermove1 = 'scissors';
         }
         return computermove1;
      }