// Redirect Whatsapp
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
