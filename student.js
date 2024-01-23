function submitForm() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;

  // Get the selected image file
  const picture = document.getElementById("picture").files[0];

  // Check if an image is selected
  if (picture) {
    const reader = new FileReader();
    reader.onload = function (event) {
      // Set the image source once the file is loaded
      document.getElementById("displayImage").src = event.target.result;
    };
    // Read the selected image file as a data URL
    reader.readAsDataURL(picture);
  }

  document.getElementById("displayFullName").innerText = fullName;
  document.getElementById("displayEmail").innerText = email;
  document.getElementById("displayPhoneNumber").innerText = phoneNumber;
  document.getElementById("displayAddress").innerText = address;

  document.getElementById("infoDisplay").style.display = "block";
}

function closeModal() {
  document.getElementById("infoDisplay").style.display = "none";
}

function printInfo() {
  let content = `
              <html>
              <head>
                  <title>Print Preview</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          padding: 20px;
                      }
                      img {
                          max-width: 150px;
                          max-height: 150px;
                      }
                  </style>
              </head>
              <body>
                  <h2>Information Submitted:</h2>
                  <img src="${
                    document.getElementById("displayImage").src
                  }" alt="ID Picture"><br><br>
                  <p><strong>Full Name:</strong> ${
                    document.getElementById("displayFullName").textContent
                  }</p>
                  <p><strong>Email:</strong> ${
                    document.getElementById("displayEmail").textContent
                  }</p>
                  <p><strong>Phone Number:</strong> ${
                    document.getElementById("displayPhoneNumber").textContent
                  }</p>
                  <p><strong>Address:</strong> ${
                    document.getElementById("displayAddress").textContent
                  }</p>
              </body>
              </html>
          `;

  let printWindow = window.open("", "_blank");
  printWindow.document.open();
  printWindow.document.write(content);
  printWindow.document.close();
  printWindow.print();
  printWindow.close();
}
