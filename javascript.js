function myFunction() {
    const y = document.getElementById("value1").value;
    var z = document.getElementById("value2").value;
    var x = z - y;
  
    document.getElementById("output").innerText = x;
  
    if (x < 0) output.style.color = "red";
    if (x > 0) output.style.color = "green";
  
  }