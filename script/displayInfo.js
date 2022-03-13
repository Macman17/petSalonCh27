//Create an obj literal for the pet salon
const petSalon={
    name:"Pet's with Stylish Cuts",
    address:{
        street:" 345 Two notch road",
        number:"345",
        zip:"23454",
        city:"Columbia",
        state:"South Carolina"
    },
    opHours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pet:[]
    
}
console.log(petSalon.address);
console.log(petSalon.pet.length);

// access to property

//Create pet array

//display the pet salon info in the footer section of the html
function displayPet(){
    document.getElementById("footer-info").innerHTML=`
    <ul>${petSalon.name}</ul>
    <ul>${petSalon.address.street}</ul>
    <ul>${petSalon.address.city},${petSalon.address.state}${" "} ${petSalon.address.zip}</ul>
    `;
}
displayPet();

function displayPetName() {
    alert(`You have ${petSalon.pet.length} pets registered.`)
    console.log(petSalon.pet[0].name);
    console.log(petSalon.pet[1].name);
    console.log(petSalon.pet[2].name);
    
}
//displayPetName();
