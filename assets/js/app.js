    // var startBtn = document.getElementById('startBtn')
    // var number = 10;

    // var intervalId;

  

    // function run() {
    //   $("#startBtn").hide();
    //   clearInterval(intervalId)
    //   intervalId = setInterval(decrement, 1000);
      
    // }
    

    // function decrement() {

      

    //   number--;

    //   $("#timer").html("<h2>" + number + "</h2>");

    //   if (number === 0) {

    //     stop();

    //     alert("Time Up!");
    //   }
    // }

    // function stop() {

    //   clearInterval(intervalId);
    // }

    // // run();


    var time = 10;
    var questions = {
      q1: 'What is full form of HTML?'
    };
    var correctAnswer;
    var wrongAnswer;
    var intervalId;

    function startGame(){

    }

    function gameplay(){
      $('#startBtn').on('click',function(){

        $('button').remove('#startBtn')
        quest1()
      });
    }

    function quest1(){
      var newDiv = $('<div class="quest1">');
      newDiv.html(questions.q2);

      $('.startBtn').append(newDiv)
      intervalId = setInterval(timecount,1000);
    }

    function timecount(){
      time--
      console.log(time)

      if(time === 0){
        clearInterval(intervalId)
        console.log(true)
      }
    }



  


  

    
















