<!DOCTYPE html>
<html>
<head>
  <title>PASIYA-MD Session Generator</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Scan QR to Generate Session ID</h1>
  <% if (qr) { %>
    <img src="<%= qr %>" alt="QR Code">
  <% } else { %>
    <p>Waiting for QR code...</p>
  <% } %>
</body>
</html>
