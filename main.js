Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
    var camera=document.getElementById("camera");
    Webcam.attach(camera);
function takePic()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    })
}
    console.log("ml5_version"+ml5.version);
    var ml5=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jWxmxxP_K/model.json',modelLoaded);
    function modelLoaded()
    {
        console.log('Model Loaded!');
    }
    function identifyImg()
    {
        img=document.getElementById('captured_image');
        ml5.classify(img, gotResult);
    }
    function gotResult(error, results)
    {
        if(error)
        {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("span1").innerHTML=results[0].label;
            document.getElementById("span2").innerHTML=results[0].confidence.toFixed(3);
        }

    }