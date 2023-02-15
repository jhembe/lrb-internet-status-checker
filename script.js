const ipAddressInput = document.getElementById('ip-address-input');
const checkStatusButton = document.getElementById('check-status-button');
const statusText = document.getElementById('status-text');
const statusIndicator = document.getElementById('status-indicator');

checkStatusButton.addEventListener('click', () => {
  const ipAddress = ipAddressInput.value.trim();

  if (ipAddress.length === 0) {
    alert('Please enter an IP address');
    return;
  }

  const url = `/.netlify/functions/netlify-function.php?ip=${ipAddress}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'online') {
        statusText.textContent = 'Online';
        statusText.classList.remove('text-red-600');
        statusText.classList.add('text-green-600');
        statusIndicator.classList.remove('bg-red-600');
        statusIndicator.classList.add('bg-green-600');
      } else {
        statusText.textContent = 'Offline';
        statusText.classList.remove('text-green-600');
        statusText.classList.add('text-red-600');
        statusIndicator.classList.remove('bg-green-600');
        statusIndicator.classList.add('bg-red-600');
      }
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
    });
});










// const statusUrl = '/.netlify/functions/netlify-function.php';
// const statusContainer = document.querySelector('#status');

// function updateStatus() {
//   fetch(statusUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (data.status === 'online') {
//         statusContainer.classList.add('online');
//         statusContainer.innerText = 'Online';
//       } else {
//         statusContainer.classList.add('offline');
//         statusContainer.innerText = 'Offline';
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       statusContainer.classList.add('error');
//       statusContainer.innerText = 'Error';
//     });
// }

// // Call the updateStatus function on page load and every 30 seconds
// updateStatus();
// setInterval(updateStatus, 30000);






// Update the status indicator on page load
// window.onload = function () {
//     updateStatus();
//     setInterval(updateStatus, 5000);
// }

// // Update the status indicator with the latest status
// function updateStatus() {
//     var statusIndicator = document.getElementById("status-indicator");
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "status.php", true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             if (xhr.responseText == "true") {
//                 statusIndicator.classList.remove("red");
//                 statusIndicator.classList.add("green");
//             } else {
//                 statusIndicator.classList.remove("green");
//                 statusIndicator.classList.add("red");
//             }
//         }
//     };
//     xhr.send();
// }
