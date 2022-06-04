// What I need the button to do is:
// save the number of the assigned button
// save that number for when the user goes to the thank you page
// display that number in the blank space of the header3 on that page

function passvalues(){
    var rating= document.getElementsByClassName("value").value;
    localStorage.setItem("ratingvalue",rating);
    console.log(rating)
    return false;
}

function change_page(){
    window.location.href = "thank-you.html";
  } 
  

document.getElementById("result").innerHTML=localStorage.getItem("ratingvalue");