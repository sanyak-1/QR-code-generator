document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    const name = document.getElementById('name').value;
    const registerNumber = document.getElementById('registerNumber').value;
    const department = document.getElementById('department').value;
    const mailId = document.getElementById('mailId').value;

    const qrData = `Name: ${name}, Register Number: ${registerNumber}, Department: ${department}, Mail ID: ${mailId}`;

    const qrCodeCanvas = document.getElementById('qrCode');
    qrCodeCanvas.innerHTML = ""; // Clear previous QR code

    // Generate the QR code
    const qrcode = new QRCode(qrCodeCanvas, {
        text: qrData,
        width: 128,
        height: 128,
    });
});
