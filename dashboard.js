function calcKd(){
    let y = document.getElementById("numbone").value;
    let z = document.getElementById("numbtwo").value;
    const x = y / z;

    document.getElementById("output").innerText = x;

    if (x < 1) output.style.color = "red";
    if (x > 1) output.style.color = "green";

    console.log(y);
    console.log(z);
    console.log(x);

}

function totalWin(){
    let num1 = document.getElementById("numbone").value;
    let num2 = document.getElementById("numbtwo").value;
    let num3 = document.getElementById("numbthree").value;
    let num4 = document.getElementById("numbfour").value;
    const x = num1 + num2 + num3 + num4;

    document.getElementsById("totalWin").innerText = x;

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(x);

    

}