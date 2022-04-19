function dropdown() {
    var showhide = document.getElementById("insectlists");
    if (showhide.style.display === "none") {
      showhide.style.display = "block";
    } else {
      showhide.style.display = "none";
    }
  }


// var backgroundimg = document.getElementById('backgroundimg'),
//     backgroundimgList = [
//         'url("images/city1.jpeg")','url("images/city2.jpeg")','url("images/city3.jpeg")','url("images/city4.jpeg")','url("images/city5.jpeg")',
//         'url("images/city6.jpeg")','url("images/city7.jpeg")','url("images/city8.jpeg")','url("images/city9.jpeg")','url("images/city10.jpeg")',
//         'url("images/city11.png")','url("images/city12.jpeg")','url("images/city13.png")','url("images/city14.png")','url("images/city15.jpeg")',
// ];
// function changeImage (backgroundimg, backgroundimgList) {
//   setInterval(function(){
//     randomImage = Math.floor( Math.random() * backgroundimgList.length);
//     backgroundimg.style.backgroundImage = "url('" + backgroundimgList[randomImage] + "')";
//   }, 1000);
// }
// changeImage(backgroundimg, backgroundimgList);