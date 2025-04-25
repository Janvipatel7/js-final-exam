let name = document.getElementById("name");
let subject = document.getElementById("subject");
let date = document.getElementById("date");
let score = document.getElementById("score");

let arr = JSON.parse(localStorage.getItem("results")) || [];

display(arr);

document.getElementById("sub").addEventListener("click", (e) => {
    e.preventDefault();

  
    if(name.value === "" || subject.value === "" || date.value === "" || score.value === ""){
        alert("Please fill all fields.");
        return;
    }

    let obj = {
        name: name.value,
        subject: subject.value,
        date: date.value,
        score: score.value
    };

    arr.push(obj);
    localStorage.setItem("results", JSON.stringify(arr));
    display(arr);
    clearForm();
});

function display(arr){
    let tableDetails = document.getElementById("tableDetails");
    tableDetails.innerHTML = "";

    arr.forEach((item, index) => {
        tableDetails.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${subjectUpdate(item.subject)}</td>
            <td>${item.date}</td>
            <td>${item.score}</td>
            <td>
                <button class="btn btn-warning" onclick="editResult(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteResult(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function subjectUpdate(value){
    switch (value) {
        case "1":
            return "English";
        case "2":
            return "Maths";
        case "3":
            return "Hindi";
        default:
            return "Unknown";
    }
}

function deleteResult(index){
    arr.splice(index, 1);
    localStorage.setItem("results", JSON.stringify(arr));
    display(arr);
}

function clearForm(){
    name.value = "";
    subject.value = "";
    date.value = "";
    score.value = "";
}
