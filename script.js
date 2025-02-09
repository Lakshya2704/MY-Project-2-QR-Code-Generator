function generateQR() {
    let text = document.getElementById("text").value;
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Clear previous QR code
    
    if (text.trim() !== "") {
        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter text or a URL");
    }
}

function downloadQR() {
    let qrContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];
    if (qrContainer) {
        let link = document.createElement("a");
        link.href = qrContainer.src;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Please generate a QR code first.");
    }
}