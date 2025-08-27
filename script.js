function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.style.display = "inline";
        setTimeout(() => msg.style.display = "none", 2000);
    });
}
function copyPhone() {
    const phone = document.getElementById("phone").innerText;
    navigator.clipboard.writeText(phone).then(() => {
        const msg = document.getElementById("copy-msg-phone");
        msg.style.display = "inline";
        setTimeout(() => msg.style.display = "none", 2000);
    });
}
document.getElementById("btn-preview").addEventListener("click", function() {
    const preview = document.getElementById("cv-preview");
    if (preview.style.display === "none") {
    preview.style.display = "block";
    this.textContent = "Ocultar vista previa";
    } else {
    preview.style.display = "none";
    this.textContent = "Ver vista previa";
    }
});