
window.addEventListener("load", function() {

    let forms = document.getElementsByTagName("form")
    forms[0].addEventListener("submit", event =>{
        event.preventDefault()
    let pilot = document.querySelector("input[name=pilotName]").value;
    let coPilot = document.querySelector("input[name=copilotName]").value;
    let fuel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    
formSubmission(document, "list", pilot, coPilot, fuel, cargoMass)

    });

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

