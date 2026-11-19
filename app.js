let birthdate = document.getElementById("birthdate");
let calculateBtn = document.getElementById("calculateBtn");
let resetBtn = document.getElementById("resetBtn");
let ageResult = document.getElementById("ageResult");


calculateBtn.addEventListener("click", function() {

    let userBirthDate = new Date(birthdate.value);
    let currentDate = new Date();

    if (!birthdate.value) {
       
         
        toastr.options = {
         closeButton: true,
         progressBar: true,
         positionClass: "toast-top-center", 
         timeOut: 4000,                     
         showMethod: "fadeIn",              
         hideMethod: "fadeOut"              
      };

        toastr.warning("Please select your birth date");
        
        return;
    }

    let ageCalculate = currentDate.getFullYear() - userBirthDate.getFullYear();

    ageResult.innerText = `Your age is ${ageCalculate} years`;
    
});


resetBtn.addEventListener("click", function() {
    birthdate.value = "";
    ageResult.innerText = "Your age will appear here";
});