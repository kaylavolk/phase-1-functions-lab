// Code your solution in this file!

const blocks = 42
const feet = 264

function distanceFromHqInBlocks(b){
    if(b > blocks) {
        return b-blocks;
    } else {
        return blocks-b;
    }
}
function distanceFromHqInFeet(b){
    return distanceFromHqInBlocks(b) * 264;
}

function distanceTravelledInFeet(s,f){
  if (s > f) {
    return (s - f) * 264
  }
  if (s < f) {
    return (f - s) * 264
  }
}
function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination)
    let distanceTraveled = blockDistance * 264;
    if (distanceTraveled <= 400) {
        console.log("give customers a free sample");
        return 0;
    }
    else if (distanceTraveled >= 2500) {
        return "cannot travel that far"
    }
    else if (400< distanceTraveled && distanceTraveled <2000) {
        let rideCost = (0.02 * (distanceTraveled - 400));
        return rideCost;
    }
    
    else if (2000 <= distanceTraveled <2500) {
            return 25
        }
    }