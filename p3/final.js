function dropdown() {
    var showhide = document.getElementById("insectlists");
    if (showhide.style.display === "none") {
      showhide.style.display = "block";
    } else {
      showhide.style.display = "none";
    }
  }

  var backgroundimg = document.getElementById('backgroundimg'),
      backgroundimgList = [
          'images/city1.jpeg','images/city2.jpeg','images/city3.jpeg','images/city4.jpeg','images/city5.jpeg',
          'images/city6.jpeg','images/city7.jpeg','images/city8.jpeg','images/city9.jpeg','images/city10.jpeg',
          'images/city11.png','images/city12.jpeg','images/city13.png','images/city14.png','images/city15.jpeg',
  ];
 function changeImage (backgroundimg, backgroundimgList) {
   setInterval(function(){
     randomImage = Math.floor( Math.random() * backgroundimgList.length);
     console.log ("url('"+ backgroundimgList[randomImage]+ "')");
     backgroundimg.style.backgroundImage = "url('"+ backgroundimgList[randomImage]+ "')";
   }, 5000);
 }
 changeImage(backgroundimg, backgroundimgList);

