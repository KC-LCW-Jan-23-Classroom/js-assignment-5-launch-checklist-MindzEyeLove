// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
       if(testInput === ""){
            return("Empty")
        } else if (isNaN(testInput) === true){
            return("Not a Number")
        } else if (isNaN(testInput) === false){
            return("Is a Number")
        } 


     }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    console.log("$$$", pilot, copilot, fuelLevel, cargoLevel)
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty") {
                alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter valid information for each field!")
    };

     let statusCheck = document.getElementById("launchStatus");
     let box = document.getElementById("faultyItems");
      
     console.log("***", statusCheck.value)
     statusCheck.addEventListener("statusCheck", function(){
        if (validateInput(statusCheck.value)=== "Not a Number"){
            box.style.visibility += visible;   
             
            statusCheck.style.color = "green";
        } else {
            statusCheck.style.color = "red";
        }

     });
      
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        //let fuel = document.querySelector("input[name=fuelLevel]").value;
        console.log("poop", validateInput(fuelLevel))
        if (formSubmission(fuel)  < 10000){
        box.style.visibility += visible;   
        fuelStatus += "There is not enough fuel for the journey.";
        }
    //  pStatus.innerText = pilot;
    
    //  let pilotStatus = "ready for launch" 
    //       console.log(`Pilot ${pilot} is ${pilotStatus}.`)
    //  let copilotStatus = "ready for launch" 
    //       console.log(`Co-pilot ${copilot} is ${copilotStatus}.`)
    // //let fuelStatus = "high enough for launch" 
    //       console.log(` ${fuelStatus}.`)
    // if (cargoMass > 10000){
    //    // faultyItems visible and message updates to cargo status too much mass for shuttle to launch 
    // } else {
    //     return (``)
    // }
    //       console.log(`${cargoStatus}.`)
    


}
  
//    }
//    if (document.getElementById("faultyItems").innerHTML === coPilot){
//     update document.getElementById("copilotStatus") += coPilot;
//     console.log(coPilot)
//    }
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    Math.floor(Math.random()*maxValue) + 1
}



//document.getElementById("faultyItems").innerHTML
//update launchStatus as info is entered on the form

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
