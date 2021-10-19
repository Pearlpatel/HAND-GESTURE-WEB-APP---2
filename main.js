prediction_1="";
prediction_2="";

Webcam.set(
    {
        width:350,
        height:350,
        image_format:"png",
        png_quality:90
    }
);
camera_div=document.getElementById("camera");
Webcam.attach("#camera");

function take_selfie() {
    Webcam.snap(function (data_uri) {
       document.getElementById("review").innerHTML="<img id='pic' src='" +data_uri+ "'/>";
    });
}
console.log("ml5version",ml5.version);

model=ml5.imageClasssifier("https://teachablemachine.withgoogle.com/models/3Apj38xxZ/model.json",modelloaded);

function modelloaded() {
    console.log("model has been loaded");
}