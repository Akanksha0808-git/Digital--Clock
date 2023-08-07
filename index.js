let timeText = document.getElementById("timeText");
let greetText = document.getElementById("greetText");

function showTime() {
  let showDisplayTime = new Date();
  let hours = showDisplayTime.getHours();
  let mins = showDisplayTime.getMinutes();
  let secs = showDisplayTime.getSeconds();
  let session = document.getElementById("session");

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
  if ((hours + "").length === 1) {
    hours = "0" + hours;
  }
  if ((mins + "").length === 1) {
    mins = "0" + mins;
  }
  if ((secs + "").length === 1) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerHTML = hours + `<br>hours`;
  document.getElementById("mins").innerHTML = mins + `<br>mins`;
  document.getElementById("secs").innerHTML = secs + `<br>secs`;
  document.getElementById("changeImage").style.borderRadius = "10px";
}
setInterval(showTime, 1000);

function function2() {
  // Check if the alarm should be triggered
  const OptionOne = document.getElementById("OptionOne").value;
  const OptionTwo = document.getElementById("OptionTwo").value;
  const OptionThree = document.getElementById("OptionThree").value;
  const OptionFour = document.getElementById("OptionFour").value;

  const date = new Date();
  const hours = date.getHours();

 
  let wakeTime =
    document.getElementById("OptionOne").options[
      document.getElementById("OptionOne").selectedIndex
    ].text;
  let lunchTime =
    document.getElementById("OptionTwo").options[
      document.getElementById("OptionTwo").selectedIndex
    ].text;
  let napTime =
    document.getElementById("OptionThree").options[
      document.getElementById("OptionThree").selectedIndex
    ].text;
  let nightTime =
    document.getElementById("OptionFour").options[
      document.getElementById("OptionFour").selectedIndex
    ].text;

  // Update the text content of the guide div
  document.getElementById("wakeTime").textContent = wakeTime;
  document.getElementById("lunchTime").textContent = lunchTime;
  document.getElementById("napTime").textContent = napTime;
  document.getElementById("nightTime").textContent = nightTime;


  if (hours === parseInt(OptionOne)) {
    image = "./img/Component.png"; 
    wakeTime.innerHTML;
  } else if (hours === parseInt(OptionTwo)) {
    image = "./img/lunch.jpg"; 
    timeText.innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP`;
   
  } else if (hours === parseInt(OptionThree)) {
    image = "./img/afternoon.jpg"; 
    timeText.innerHTML = `GOOD EVENING !!`;
    
  } else if (hours === parseInt(OptionFour)) {
    image = "./img/Nightimg.jpg"; 
    timeText.innerHTML = `GOOD NIGHT !!`;
   
  }
  
  document.getElementById("changeImage").src = image;
}
function showChanges() {
  let Time = new Date();
  let hour = Time.getHours();

  if (hour > 5 && hour < 11) {
    image = "./img/Component.png";
  }

  else if (hour > 10 && hour < 15) {
  
    greetText.innerHTML = `LET'S HAVE SOME LUNCH !!`;
  } else if (hour > 14 && hour < 19) {
   
    greetText.innerHTML = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
  }

  else {
   
    greetText.innerHTML = `CLOSE YOUR EYES AND GO TO SLEEP`;
  }

}
setInterval(showChanges, 1000);