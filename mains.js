// Redirect Whatsapp

// Prevent form submission
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url =
    "https://api.whatsapp.com/send?phone=6281540921193&text=Hallo%20Admin.%0ASaya%20*" +
    name +
    "*%0AEmail%20Saya%20*" +
    email +
    "*%0A%0A*" +
    message +
    "*%0A%0A*Terima%20Kasih*";

  window.open(url, "_blank");
}
// Prevent form submission

// Javascript Version 01
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hallo Admin, Nama Saya ${name}. Email Saya ${email}. ${message}`;
  const whatsappNumber = "6281540921193"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${6281540921193}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
}
// Javascript Version 01

// Javascript Version 02
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hello, My Name is ${name}. My Email Address is ${email}. ${message}`;
  const whatsappNumber = "6281540921193"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${6281540921193}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
}
// Javascript Version 02

// Javascript Version Stars
function sendMessage() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hello Admin, My Name is : ${name}. My Phone Number is : ${phone}. My Email Address is : ${email}. ${message}`;
  const whatsappNumber = "6281540921193"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${6281540921193}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
}
// Javascript Version End

// Javascript Version Stars
function sendMessage() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const whatsappMessage = `Hallo Admin, Nama Saya : ${name}. Nomor Saya : ${phone}. Email Saya : ${email}. ${message}`;
  const whatsappNumber = "6281540921193"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${6281540921193}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
}
// Javascript Version End

// Function Message
function message() {
  var Name = document.getElementById("name");
  var email = document.getElementById("email");
  var msg = document.getElementById("msg");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  if (Name.value === "" || email.value === "" || msg.value === "") {
    danger.style.display = "block";
  } else {
    setTimeout(() => {
      Name.value = "";
      email.value = "";
      msg.value = "";
    }, 2000);

    success.style.display = "block";
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}
