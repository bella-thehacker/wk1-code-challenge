function studentMarks(marks){
  if (marks < 0 || marks > 100){
    return "Invalid Score"
    }  else if (marks > 79){
    return "A";
} else if (marks >=60){
    return "B";
}else if (marks >=50){
    return "C";
}else if (marks >=40){
    return "D";
}else if (marks <40){
    return "E";
}else {
    return "Invalid input";

}
}

//propmts user to input marks



console.log(studentMarks("49"));
