
      function checkAnswers() {
        var q1 = document.querySelector('input[name="q1"]:checked').value;
        var q2 = document.querySelector('input[name="q2"]:checked').value;
        var score = 0;
        if (q1 === 'b') {
            score++;
          }
  
          if (q2 === 'a') {
            score++;
          }
  
          alert('Your score is: ' + score);
        }