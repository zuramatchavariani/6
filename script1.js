var myAge = parseInt(prompt("Enter your age:", "22"));
age(myAge);
function age(myAge){

    switch (true) {
        
        case (myAge >= 0 && myAge <=6):
            document.write("bagis moswavle <br />");
        break;
        case myAge >= 6 && myAge <= 18:
            document.write("skolis msowavle ");
            break;

        case myAge >=18 && myAge <=22:
            document.write("universitetis moswavle ");
            break;

       
        default:
              console.log(myAge);
        }
        
  }
