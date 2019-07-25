// FINAL PROJECT ASSIGNMENT
// Global Variables
let image1 =0
let image2 =0
let image3 =0
let image4 =0
let image5 =0
let image6 =0
let image7 =0
let image8 =0
let image9  =0
let image10 =0
// Event Listeners
document.getElementById ('generate-btn').addEventListener('click', generateimg);
document.getElementById ('user-input-btn').addEventListener('click', runuseramount);
document.getElementById ('song-mp3')
// Event Functions
    function generateimg (){
        console.log ('generate-img');
        // Generate random image
        // Simulate result
        
        let randNum = Math.random ();
            console.log (randNum)
        //simulate images

        if (randNum <=.10){
            document.getElementById ('display-image-area').innerHTML += "<img src='media/3D-render-image-gallery-image1.jpg'>";
            image1++;

        } else if (randNum <=.20) {
            document.getElementById ('display-image-area').innerHTML += "<img src='media/3D-render-image-gallery-image2.jpg'>";
            image2++;
        
        } else if (randNum <=.30) {
          document.getElementById ('display-image-area').innerHTML +=  "<img src='media/3D-render-image-gallery-image3.jpg'>";
          image3++;

        } else if (randNum <=.40) {
          document.getElementById ('display-image-area').innerHTML += "<img src='media/3D-render-image-gallery-image4.jpg'>";
          image4++;

        } else if (randNum <=.50) {
           document.getElementById ('display-image-area').innerHTML += "<img src='media/3D-render-image-gallery-image5.jpg'>";
           image5++;

        } else if (randNum <=.60) {
          document.getElementById ('display-image-area').innerHTML +="<img src='media/3d-render-image-gallery-image6.jpg'>";
          image6++;

        } else if (randNum <=.70) {
            document.getElementById ('display-image-area').innerHTML +="<img src='media/3d-render-image-gallery-image7.jpg'>";
            image7++;
        } else if (randNum <=.75) {
            document.getElementById ('display-image-area').innerHTML +="<img src='media/3d-render-image-gallery-image8.jpg'>";
            image8++;
        } else if (randNum <=.80) {
            document.getElementById ('display-image-area').innerHTML +="<img src='media/3d-render-image-gallery-image9.jpg'>";
            image9++;
        } else if (randNum <=.90) {
            document.getElementById ('display-image-area').innerHTML +="<img src='media/3d-render-image-gallery-image10.jpg'>";
            image10++;
        } else {
            console.log('no image created');
        }
    }

    function runuseramount (){
        let count = document.getElementById ('runuseramount').value
        console.log (count)
        for (let n=0; n < count; n++){
            generateimg ();
            
        }
        console.log ('Count  '+ count);
    }
    

    function loadaudio (){
        document.getElementById("song-mp3").load();
        console.log ('test')
    }