let student = JSON.parse(localStorage.getItem("StudentInfo")) || []

function addStudents(){
    const name = document.getElementById("name").value.trim();
    const age = parseFloat(document.getElementById("age").value.trim());
    let stu_class = document.getElementById("class").value.trim();
    const image = document.getElementById("image").value.trim();
    const score1 = parseFloat(document.getElementById("score1").value.trim())
    const score2 = parseFloat(document.getElementById("score3").value.trim())
    const score3 = parseFloat(document.getElementById("score3").value.trim())

    const totalScore = score1 + score2 + score3;
    const averageScore = (totalScore / 3).toFixed(1);

    let studentProfile = (name, age, stu_class, image, score1, score2, score3, totalScore, averageScore)
    student.push(studentProfile)

    localStorage.setItem("studentInfo", JSON.stringify(studentProfile))
}

function performanceCategory(averageScore) {
    if (averageScore >= 75)
        return {
            text: "Excellent",
            class: "excel"
    }; else if(
        (averageScore >= 50 && averageScore <= 74)
    ) return {
        text: "Good",
        class: "good"
    }; return {
        text: "Need Help",
        class: "help"
    }
}

// function showDisplays() {
//     document.getElementById("student_table").innerHTML = ""
//     for ( i = 0; i < student.length; i++) {
//         document.getElementById("student_table").innerHTML += `
//         <td>${name}
//         `

//     }
// }