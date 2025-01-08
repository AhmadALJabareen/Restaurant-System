// let formData = document.querySelector("form");

// formData.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let password = document.getElementById("password").value;
//     let date = document.getElementById("date").value;
//     let gender = document.getElementById("gender").value;
//     let phone = document.getElementById("phone").value;

//     let checkInput = document.querySelectorAll('input[name="order"]');
//     let selectedOrder;
//     for(const order of checkInput){
//         if(order.checked){
//             selectedOrder= order.value;
//         }
//     }

//     let orderInput = document.querySelectorAll('input[name = "option"]');
//     let selectedOption;
//     orderInput.forEach((item)=>{
//         if(item.checked){
//             selectedOption = item.value;
//         }
//     })

//     let dataUser = {
//         userName:name,
//         userPassword:password,
//         birthday:date,
//         userGender:gender,
//         userPhone:phone,
//         userOrder:selectedOrder,
//         userOption:selectedOption
//     };

//     // dataUser.push(name,password,date,gender,phone,selectedOrder,selectedOption);
//     // console.log(dataUser);

//     localStorage.setItem("user",JSON.stringify(dataUser));
    

//     let x = JSON.parse(localStorage.getItem("user"));
//     // let arrayData = [];
//     // arrayData.push(x);
//     let customer1 = new Customer(x.userName,x.userPassword,x.birthday,x.userGender,x.userPhone,x.userOrder,x.userOption);
//     customer1.createCard();
    
//     // console.log(x.userName);

// })



// function Customer(fullName, password, date, gender, orderType, orderOption, phoneNumber) {
//     this.fullName = fullName;
//     this.password = password;
//     this.date = date;
//     this.gender = gender;
//     this.orderType = orderType; 
//     this.orderOption = orderOption; 
//     this.imageUrl = imageUrl; 
//     this.phoneNumber = phoneNumber;
//     this.createCard = function (){
//         let box= document.createElement("div");
//         box.classList.add("customer-card");

//         box.innerHTML = `
//     <h3>${this.fullName}</h3>
//     <p><strong>Gender:</strong> ${this.gender}</p>
//     <p><strong>Date of Birth:</strong> ${this.date}</p>
//     <p><strong>Phone:</strong> ${this.phoneNumber}</p>
//     <p><strong>Order Type:</strong> ${this.orderType}</p>
//     <p><strong>Order Option:</strong> ${this.orderOption}</p>
//   `;
//   document.body.appendChild(box);
//     }
    
    
    

    
// }
  






let formData = document.querySelector("form");

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;

    let checkInput = document.querySelectorAll('input[name="order"]');
    let selectedOrder = "";
    for (const order of checkInput) {
        if (order.checked) {
            selectedOrder = order.value;
            break;
        }
    }

    let orderInput = document.querySelectorAll('input[name="option"]');
    let selectedOption = "";
    orderInput.forEach((item) => {
        if (item.checked) {
            selectedOption = item.value;
        }
    });

    let dataUser = {
        userName: name,
        userPassword: password,
        birthday: date,
        userGender: gender,
        userPhone: phone,
        userOrder: selectedOrder,
        userOption: selectedOption
    };

    localStorage.setItem("user", JSON.stringify(dataUser));

    let x = JSON.parse(localStorage.getItem("user"));

    let customer1 = new Customer(
        x.userName,
        x.userPassword,
        x.birthday,
        x.userGender,
        x.userOrder,
        x.userOption,
        x.userPhone
    );
    customer1.createCard();
});

function Customer(fullName, password, date, gender, orderType, orderOption, phoneNumber) {
    this.fullName = fullName;
    this.password = password;
    this.date = date;
    this.gender = gender;
    this.orderType = orderType;
    this.orderOption = orderOption;
    this.phoneNumber = phoneNumber;

    this.createCard = function () {
        let box = document.createElement("div");
        box.classList.add("customer-card");

        box.innerHTML = `
            <h2>${this.fullName}</h>
            <p><strong>Gender:</strong> ${this.gender}</p>
            <p><strong>Date of Birth:</strong> ${this.date}</p>
            <p><strong>Phone Number:</strong> ${this.phoneNumber}</p>
            <p><strong>Password:</strong> ${this.password}</p>
            <p><strong>Order Type:</strong> ${this.orderType}</p>
            <p><strong>Order Option:</strong> ${this.orderOption}</p>
        `;

        document.body.appendChild(box);
    };
}
