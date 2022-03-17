//create the constructor
let x=0;
let data=1;
function Pet(type,name, age, gender,breed,owner,ownerPhone, service) {
    this.petType=type;
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petOwner=owner;
    this.petOwnerPhone=ownerPhone;
    this.petService=service;
    this.id=x++;
}
//get the info from the input
let inputPetType= document.getElementById("txtPetType");
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
        console.log(inputPetType.value,inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetOwner.value,inputPetOwnerPhone.value,inputPetService.value);
        // create the obj
        let thePet = new Pet(inputPetType.value,inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetOwner.value,inputPetOwnerPhone.value,inputPetService.value);
        console.log(thePet);
        
        //push the obj
        if(isValid){
            petSalon.pet.push(thePet);
            //display the obj in the 
            console.log(thePet);  
            displayPetTable();
        } 
}

function displayPetsName() {
    //travel the array
    let tmp="";
    for (let i = 0; i < petSalon.pet.length; i++) {
        //create the template
        tmp+=`
        <div class="pet">
        <p>Pet Type: ${petSalon.pet[i].petType}</p>
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
function displayPetTable() {
    let trow="";
    for (let x = 0; x < petSalon.pet.length; x++) {
        //create the template
        trow+=`
        <tr class= "tableRow" id="${petSalon.pet[x].id}">
            <td>Pet Type: ${petSalon.pet[x].petType}</td>
            <td>Name: ${petSalon.pet[x].petName}</td>
            <td>Age: ${petSalon.pet[x].petAge}</td>
            <td>Gender: ${petSalon.pet[x].petGender}</td>
            <td>Breed: ${petSalon.pet[x].petBreed}</td>
            <td>Owner Name: ${petSalon.pet[x].petOwner}</td>
            <td>Owner Phone Number: ${petSalon.pet[x].petOwnerPhone}</td>
            <td>Service: ${petSalon.pet[x].petService}</td>
            <td> <button onclick="deletePet(${petSalon.pet[x].id});">Delete</button> <td>
        </tr>
        
        `;
        
        console.log(trow);
    } 
    document.getElementById("petTable").innerHTML=trow;
}



function deletePet(petId) {
    console.log("Pet deleted:", petId);
    //travel array
    for (let x = 0; x < petSalon.pet.length; x++) {
        let pet=petSalon.pet[x];
        if (pet.id==petId) {
            foundPet=x;
            console.log("I found the pet", foundPet);
        }
        
    }
    //remove pet from array
    petSalon.pet.splice(foundPet,1);
    //remove pet from HTML
    document.getElementById(petId).remove();

    
}

function searchPet() {
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for (let x = 0; x < petSalon.pet.length; x++) {
        let pet = petSalon.pet[x];
        if(pet.petName.toLowerCase()==searchString.toLowerCase()){
            console.log("Found it!");
            document.getElementById(pet.id).classList.add('bg-color');
        }
        else{
            document.getElementById(pet.id).classList.remove('bg-color');
        }
         
    }
} 
//display the tmp on the html
 
function init() {
let haze = new Pet("Dog","Haze", 45, "Male", "Pitbull", "Amy", "888-888-8888", "Wash");
let dexter = new Pet("Dog","Dexter", 34, "Male", "Lab","Glen","555-555-5555", "Wash and cut" );
let tiger= new Pet("Dog","Tiger", 3, "Male","Great Dame","Glen","555-555-5555","Cut");

    petSalon.pet.push(haze,dexter,tiger)
    displayPetsName();
    displayPetTable();
    counter();
}
window.onload=init;



