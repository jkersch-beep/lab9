document.getElementById("calculate").onclick = function() {
    let sub1 = Number(document.getElementById("sub1").value)

    let sub2 = Number(document.getElementById("sub2").value)

    let sub3 = Number(document.getElementById("sub3").value)

    let average = (sub1 + sub2 + sub3) / 3

    let grade = " ";

    if (average >= 90) {
        grade = "A";
    }

    else if (average >= 80) {
        grade = "B";
    }

    else if (average >= 70) {
        grade = "C";
    }

    else if (average >= 60) {
        grade = "D";
    }

    else if (average <= 60) {
        grade = "F";
    }


    document.getElementById("average").innerHTML = "Average: " + average.toFixed(2)
    document.getElementById("grade").innerHTML = "Grade: " + grade
}