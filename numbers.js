// What I need the button to do is:
// save the number of the assigned button
// save that number for when the user goes to the thank you page
// display that number in the blank space of the header3 on that page

function passvalues(){
    var rating= document.getElementsByClassName("number").value;
    localStorage.setItem("ratingvalue",rating);
    return false;
}

document.querySelector(".number").addEventListener("click",
function(){
    console.log("I was clicked!")
//     let isHeads = Math.random() < 0.5;
    
//     if(isHeads){
//         console.log("It's heads!", headCount)
//         //Need this below so it has an image to go back to.
//         document.querySelector("#head-img").src = "./assets/images/head.png"
//         document.querySelector('#outcome-header').textContent="You flipped heads!"

//         headCount++

//         document.querySelector('#number-heads').textContent = headCount;
//     } else {
//         // console.log("It's tails!")
//         document.querySelector("#head-img").src = "./assets/images/tails.png"
//         document.querySelector('#outcome-header').textContent="You flipped tails!"

//         tailsCount++

//         document.querySelector('#number-tails').textContent = tailsCount;
//     }

//     localStorage.setItem("headCount", headCount);
//     localStorage.setItem("tailsCount", tailsCount);

//     let total = headCount + tailsCount;
//     let percentHeads = Math.round(headCount/total * 100);
//     let percentTails = Math.round(tailsCount/total * 100);

//     document.querySelector("#percent-heads").textContent = percentHeads + "%";
//     document.querySelector("#percent-tails").textContent = percentTails + "%";
// 
})



