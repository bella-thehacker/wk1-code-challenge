
function  speedDetector(speed){
    const limit = 70;
    const speedpoints = 5;
    const suspensionPoints = 12;

    if (speed <= limit){
        console.log( "Ok");
    } else{
        const points = Math.floor((speed - limit) / speedpoints);
     if (points > suspensionPoints){
        console.log( "License suspended");
      }  else{
        console.log(`Points are, ${points}`);
    }
    }
}
let speed = 80;
speedDetector(speed);