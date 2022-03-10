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
    pet:[
        {//First pet
            name:"Scooby",
            age:50,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {//First pet
            name:"Haze",
            age:1,
            gender:"male",
            breed:"Lab",
            service:"Grooming",
            ownerName:"CeeCee",
            contactPhone:"555-555-0000"
        },
        {//First pet
            name:"Dexter",
            age:2,
            gender:"male",
            breed:"Husky",
            service:"Grooming",
            ownerName:"Bre",
            contactPhone:"555-222-5555"
        },
        
    
    ]
}
console.log(petSalon.address);
console.log(petSalon.pet.length);
console.log(petSalon.pet[0].service);
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
displayPetName();
