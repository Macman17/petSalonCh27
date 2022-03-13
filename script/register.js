//create the constructor
function Pet(name, age, gender,breed,owner,ownerPhone, service) {
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petOwner=owner;
    this.petOwnerPhone=ownerPhone;
    this.petService=service;
}
//get the info from the input
let inputPetName= document.getElementById("txtPetName");
let inputPetAge= document.getElementById("txtPetAge");
let inputPetGender= document.getElementById("txtPetGender");
let inputPetBreed= document.getElementById("txtPetBreed");
let inputPetOwner= document.getElementById("txtOwnerName");
let inputPetOwnerPhone= document.getElementById("txtOwnerPhone");
let inputPetService= document.getElementById("txtService");


function isValid(aPet) {
    //return false when the pet is not valid
    //return true if the pet is valid 
    let valid=true;
    //return the error in the console 
    if(aPet.petName.length==0){
        //if we get here it means that the name is not valid
        valid=false
        console.log("Invalid Name");
    }
    if(aPet.petAge.length==0){
        valid=false;
        console.log("Invalid Age");
    }
    if(aPet.petOwnerPhone.length==0){
        valid=false;
        console.log("Invalid phone number");
    }

    //validations
    return valid;

}

function register(){
        console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetOwner.value,inputPetOwnerPhone.value,inputPetService.value);
        // create the obj
        let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetOwner.value,inputPetOwnerPhone.value,inputPetService.value);
        console.log(thePet);
        //push the obj
        if(isValid){
            petSalon.pet.push(thePet);
            //display the obj in the 
            console.log(thePet);  
            displayPetsName();
        } 
}
function displayPetsName() {
    //travel the array
    let tmp="";
    for (let i = 0; i < petSalon.pet.length; i++) {
        //create the template
        tmp+=`
        <div class="pet">
        <p>Name: ${petSalon.pet[i].petName}</p>
        <p>Age: ${petSalon.pet[i].petAge}</p>
        <p>Gender: ${petSalon.pet[i].petGender}</p>
        <p>Breed: ${petSalon.pet[i].petBreed}</p>
        <p>Owner Name: ${petSalon.pet[i].petOwner}</p>
        <p>Owner Phone Number: ${petSalon.pet[i].petOwnerPhone}</p>
        <p>Service: ${petSalon.pet[i].petService}</p>
        </div>
        
        `;
        
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML=tmp;
}
//display the tmp on the html
 
function init() {
    let haze = new Pet("Haze", 45, "Male", "Pitbull", "Amy", "888-888-8888", "Wash");
let dexter = new Pet("Dexter", 34, "Male", "Lab","Glen","555-555-5555", "Wash and cut" );
let tiger= new Pet("Tiger", 3, "Male","Great Dame","Glen","555-555-5555","Cut");

    petSalon.pet.push(haze,dexter,tiger)
    displayPetsName();
}
window.onload=init;

