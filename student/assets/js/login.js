        let email = document.getElementById("email")
        let pass = document.getElementById("pass")
        let btnLogin = document.getElementById("btn-login")
        let dataArr = JSON.parse(localStorage.getItem("userdata")) || []

        btnLogin.addEventListener("click", function () {
            if (pass.value.trim() == "" || email.value == "") {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Oops...",
                    text: "Please Enter Your Email and password",
                    showConfirmButton: false,
                    timer: 1500
                  })
                  return
            }
            let foundUser = dataArrArr.findIndex((user) => {
                return email.value == user.email && pass.value == user.pass
            })

            if (foundUser == -1) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Oops...",
                    text: "Your Email And Password Wrong!!!!!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else {
                window.location = "studentdata.html"
            }

        })