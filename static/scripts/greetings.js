document.addEventListener("DOMContentLoaded", function() {
    async function displayGreetings() {
        try {
          const greetingsElement = document.getElementById('nameintro');
          const date = new Date();
          const hours = date.getHours();
        
          const greetings = {
            morning: "Good Morning",
            afternoon: "Good Afternoon",
            evening: "Good Evening",
            night: "Good Night"
          };
        
          let greeting = "";
          if (hours < 3) {
            greeting = greetings.evening;
          } else if (hours < 12) {
            greeting = greetings.morning;
          } else if (hours < 17) {
            greeting = greetings.afternoon;
          } else if (hours < 21) {
            greeting = greetings.evening;
          } else {
            greeting = greetings.evening;
          }
          greetingsElement.style.width = '80%';
        
        
          if (greetingsElement) {
            greetingsElement.textContent = `${greeting},` 
          } else {
            console.log(`${greeting}, I'm David Njagi`);
          }
        } catch(error) {
          console.log("error is: ", error);
        }
      }
    setInterval(displayGreetings, 3600000);
    window.onload = displayGreetings;
  });