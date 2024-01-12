console.log("Hello, website");
//const buttonChange = document.getElementsByClassName("links");

//function colorChange() {
//  if (document.body.style.background = "white", document.body.style.background = "tomato")
//else
//  console.log("You changed the colour");
//}
//buttonChange.addEventListener("mouseOver", colorChange);

//I tried experimenting with javascript. at the top I tried to attempt changing the hover to be with javascript (or to do a similar function). At the bottom I tried to create an alert using some DOM stuff. I can't really see where I am going wrong but I'm sure I will learn more about this next week. Hope you enjoyed the rickroll :D

const aliensounds = document.getElementById("aliensounds");

function rickroll() {
  if (aliensounds.play) {
    console.log("Congratulations! You just got successfully rick roll'd");
  } else console.log("you missed the secret challenge, click the alien audio");
}

aliensounds.addEventListener("click", rickroll);
