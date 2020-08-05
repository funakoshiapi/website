

let myId = document.getElementById("")
let stack = document.querySelector(".stack");
[...stack.children].reverse().forEach((i) => stack.append(i));





stack.addEventListener("click", swap);
function swap(swapEvent) {
  let card = document.querySelector(".card:last-child");

  let value = card.getAttribute('value');

//  mix match
  if (value === '2'){
    
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "Is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.";
    document.getElementById("proj--link").href="#";
  }

  //liker
  else if (value === '3'){
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "Chrome application that automate instagram likes, the application likes photos on the behalf of your account, pick the hashtags to follow and get to work";

    document.getElementById("proj--link").href="#";

  }

  //covid
  else if (value === '4'){
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "Uses API's to render information about covid-19 cases in diferent countries. Itagrates graphical plots of the renderd data, helping to make sence of the information";

    document.getElementById("proj--link").href="#";

  }



  

  // Aquarium
  else if (value === '1'){
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "C++ desktop application that simulates an aquarium. The fish in the aqurium navigates the screen size on horizontal and vertical axis simulating an alive fish. The application menu allows picking one or mutiple fish. The menu also allows the user to add aquarium decoration to personalize the aquarium. ";

    document.getElementById("proj--link").href="https://github.com/funakoshiapi/Object-Oriented---Software-Dev/tree/master/Aquarium";


  }
  else if (value === '5'){
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "Data manipulation of data file of city and county information in Michigan";

    document.getElementById("proj--link").href="https://github.com/funakoshiapi/Projects/blob/master/DataManipulation.py";

  }
  else{
    oldParag = document.getElementById("paragraph");
    oldParag.innerHTML = "Designed graphical user interface, and programmed logic of winch to adjust the release of cabled sensor underwater based on desired depth. Wrote unit test to prevent system short circuit, that could be caused by realys connected to winch by microcontroller and portable power source.";

    document.getElementById("proj--link").href="https://github.com/funakoshiapi/automated-winch";
  }

  if (swapEvent.target !== card) return;

  card.style.animation = "swap 500ms forwards";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 700);
}
