async function sendContact(ev) {
    ev.preventDefault();

    const senderEmail = document
        .getElementById('emailInput').value;
    const senderMessage = document
        .getElementById('messageInput').value;

    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [{
                    name: 'Sender',
                    value: senderEmail
                },
                {
                    name: 'Message',
                    value: senderMessage
                }
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1122913678132527224/vVFIuEEgUsdgau9CmGJ-yKfHoztjcld-oqc-QTSfs8REVdlJA_Lld8UeyK5EcitLu9do';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have got your message! It may take a while to response.');
    } else {
        alert('There was an error! Try again later!');
    }
}


