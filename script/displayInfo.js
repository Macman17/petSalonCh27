//Create an obj literal for the pet salon
const petSalon={
    name:"Pet's with Stylish Cuts",
    address:{
        street:"Two notch road",
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
        }
    ]
}
console.log(petSalon.address.zip);
console.log(petSalon.pet.length);
console.log(petSalon.pet[0].service);// access to property

//Create pet array

//display the pet salon info in the footer section of the html
function displayPet() {
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} on
    ${petSalon.address.street}
    `;
}
displayPet();

function displayPetName() {
    
}