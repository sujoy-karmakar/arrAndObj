let Student = {
    name: "Sujoy",
    lastName: "Karmakar",
    roll: 10,
    major: "BA",
    GPA: 6.5,
    age: 18,
    isEnrolled: true
};

function displayStudentInfo(student) {
    for (let property in student) {
        console.log(`${property}: ${student[property]}`);
    }
}


displayStudentInfo(Student);
