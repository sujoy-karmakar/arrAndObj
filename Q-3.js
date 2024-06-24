//// a) Use Object.preventExtensions method to prevent any further additions of properties to the student object.
let Student = {
    name: "Sujoy",
    lastName: "Karmakar",
    roll: 10,
    age: 18
}
//object non-extensible
Object.preventExtensions(Student);
Student.grade = "A";
console.log(Student.grade);


// b) Use Object.isExtensible method to check if the student object is extensible. Store the result in a variable called extensibleStatus.
let extensibleStatus = Object.isExtensible(Student);
console.log(extensibleStatus);


// c) Create a new object called teacher with a 'subject' property set to 'Math'.
const teacher = {
    subject: Math
}
// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
Object.seal(teacher);
teacher.name = "Ranjan"
console.log(teacher.name);
delete teacher.Math
console.log(teacher.Math);

// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.

let sealedStatus = Object.isSealed(teacher)
console.log(sealedStatus);

// Print the extensibleStatus and sealedStatus to the console.
console.log("extensibleStatus of Student", Student);
console.log("sealedStatus of Student", teacher);