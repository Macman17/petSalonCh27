console.log("We lit");

//let student = "Brandon";
const student = {
firstName:"Brandon", 
    lastName:"Britt",
    age:23, 
    email:"a@agmail.com", 
    isActive:true,
    fullName:function(){
         this.firstName+"" +this.lastName;
    }
};
//How you change something in a const
student.firstName="New name";

console.log(student.fullName());
//function displayStudent(){
    
 //   document.getElementById("studentList").innerHTML+= `
//    <li>${student.fullName()}</li>,
 //   <li>${student.age}</li>,
  //  <li>${student.email}</li>,
 // ${student.isActive}

//`;
    //}
//displayStudent();

//object constructor

class StudentC{
    constructor(firstName,lastName,age,email,isActive) {
    this.userFn=firstName;
    this.userLn=lastName;
    this.userAge=age;
    this.userEmail=email;
    this.username=name;
    this.isActive=isActive;
    
    
    }
}
let student1 = new StudentC("Vicky","Warren",99,"vicky@gmail.com",true);
let student2 = new StudentC("Von","Abrea",89,"von@gmail.com",true);
console.log(student1,student2);

function displayStu(user){
    return `Name: ${user.userFn} \n Email: ${user.userEmail}`;
}
console.log(displayStu(student1));
function petCounter(doSomthing,e) {
    let theSelect= document.querySelector("select");
    theSelect.addEventListener("click", doSomthing, false);
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target.id;
        console.log("+1 Item", clickedItem);
    }
    e.stopPropagation();



}