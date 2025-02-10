/**
 * QR Code Generator Script
 * This script allows users to generate a QR code from a given text or URL 
 * and download it as an image file.
 */

// Function to generate the QR code
function generateQR() {
    let text = document.getElementById("text").value; // Get user input
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Clear any existing QR code

    if (text.trim() !== "") {
        // Generate the QR code using the QRCode.js library
        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter text or a URL"); // Alert if input is empty
    }
}

// Function to download the generated QR code
function downloadQR() {
    let qrContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];

    if (qrContainer) {
        let link = document.createElement("a");
        link.href = qrContainer.src; // Get the QR code image source
        link.download = "qrcode.png"; // Set filename for download
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link);
    } else {
        alert("Please generate a QR code first."); // Alert if no QR code is available
    }
}
