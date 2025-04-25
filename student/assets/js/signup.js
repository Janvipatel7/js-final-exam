let dataArr = JSON.parse(localStorage.getItem("userData")) || []
let name = document.getElementById("name")
let email= document.getElementById("email")
let pass = document.getElementById("password")
let cPass = document.getElementById("cPass");
let signBtn = document.getElementById("btn-sign")

signBtn.addEventListener("click", function () {

    if (name.value.trim() == "" || email.value.trim() == "" || pass.value.trim() == "" || cPass.value.trim() == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Please Fill All Inputs",
            showConfirmButton: false,
            timer: 1500
          });
    
    } else {
        let userData = {
            name: name.value,
            email: email.value,
            pass: pass.value,
            cPass : cPass.value,
        }
        dataArr.push(userData)
        localStorage.setItem("userData", JSON.stringify(dataArr))
        Swal.fire({
            position: "top-end",
            text: 'Sign Up successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        })

        name.value = ""
        email.value = ""
        pass.value = ""
        cPass.value= ""
        

    }


})