

        document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    

    var callsign = document.getElementById('callsign').value;

    var route = document.getElementById('route').value;

    var logOutput = document.getElementById('logOutput');

    

    if (route === "FYM0001") {

      logOutput.textContent = "```•Pilot callsign was• " + callsign + "•```" ". ```•Route : Zurich to Naples.•```• ```•Total time taken : approximately 1 hour 40 minutes.•```";

    }

      if (route === "FYM0002") {

      logOutput.textContent = "```•Pilot callsign :```"+callsign+"```" "```•Route : Jeju to Seoul•```•```•Total time taken:approximately 1 hour 10 minutes•```"

    }

  });

});

     

    

   

  

    
