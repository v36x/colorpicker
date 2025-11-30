  function myfunc() {
    let x = document.forms["myform"]["rgb2"].value;

    if (x === "") {
      alert("RGB value must be filled out");
      return false; // stop submit
    }

    // set background color
    document.getElementById("rgb").style.backgroundColor = x;

    return false; // prevent form refresh
  }
  
