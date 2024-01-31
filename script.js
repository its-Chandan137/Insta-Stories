var arr = [
    {dp: "Images/ForestBoy.jpg!d", story: "Images/ForestBoy.jpg!d"},
    {dp: "Images/Forest3.jpg", story: "Images/Forest3.jpg"},
    {dp: "Images/Forest99.jpeg", story: "Images/Forest99.jpeg"},
    {dp: "Images/ForestBoy.jpg!d", story: "Images/Forest99.jpeg"},
    {dp: "Images/ForestBoy.jpg!d", story: "Images/Forest99.jpeg"},
];

var storiyan = document.querySelector("#storiyan");
var fScreen = document.querySelector("#full-screen");

// var ifOn = document.addEventListener('mouseover', function(){
//     if(ifOn)
//     {
//         console.log("yes");
//     }                                                                        // For display block when mouse is on the element
//     else
//         {
//             (ele) => {
//                 ele.style.display = "block";
//             }
//         }
// });

var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}">
    </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener('click', (dets) => {
    var value = arr[dets.target.id].story;
    fScreen.style.transform = "scale(1)";
    console.log(value);
    fScreen.style.backgroundImage = `url(${value})`;


    // if(fScreen.ifOn)
    // {
    // setTimeout(() => {
    //     fScreen.style.display = "block";                                      //  For display block when mouse is on the element (Try 2)
    //     console.log("working!");
    // });
    // }
    // else
    // {
        setTimeout(() => {
            fScreen.style.transform = "scale(0)";
        },2000);
    // }

});

// storiyan.addEventListener('mouseout', setTimeout(() => {
//     fScreen.style.display = "none";
//     console.log("whyyy outtttt!")
// },2000));
                                                                                // For display block when mouse is on the element (Try 3)
// fScreen.addEventListener('onmouseover', () => {
//     fScreen.style.display = "block";
//     console.log("MouseOver");
// })



