//Building a Student Manage9ent System

const student = [
    { id: 1, firstName: "Sujoy", lastName: "Karmakar", age: 20, grade: "A" },
    { id: 2, firstName: "Rohit", lastName: "Das", age: 22, grade: "B" },
    { id: 3, firstName: "Sumit", lastName: "Sing", age: 19, grade: "A" }
]
// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    let newStudent = {
        id: id, firstName: firstName, lastName: lastName, age: age, grade: grade
    }

    student.push(newStudent)
}
addStudent(4, "Niti", "Sing", 20, "B");
console.log(student);

// b. Update Student Information
function StudentInformation(id, updateInformation) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].id == id) {
            student[i] = {
                ...student[i], ...updateInformation

            }
            return;
        }
    }
}
//c Delete a Student
function deleteStudent(id) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].id == id) {
            student.splice(i, 1)
            return;
        }

    }

}
//d list all student

function toDisplay(allStudentList) {
    console.log(allStudentList);
}
toDisplay(student)

//e find students by Grade;

function findAllStudentByGrade(grade) {
    let gradeArr = []
    for (let i = 0; i < student.length; i++) {
        if (student[i].grade == grade) {
            gradeArr.push(student[i])
        }
    }
    return

}
//f calculate avarage age
function avarageAge(age) {
    let toatalAge = 0;
    for (let i = 0; i < student.length; i++) {
        if (student[i].age == age) {
            toatalAge = toatalAge + student[i].age
        }
        return (toatalAge / student.length)
    }
}