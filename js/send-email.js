function subscribe() {
    var link = 'mailto:bornofos@gmail.com'
    + '?&subject=' + escape('Quiero suscribirme')
    + '&body=' + escape('Quiero suscribirme: ' + document.getElementById('emailForNotification').value);

    window.location.href = link;
}

function sendMail() {
    var messageBody = `
        Nombre: ${document.getElementById('authorName').value}
        Correo: ${document.getElementById('authorEmail').value}
        Mensaje: ${document.getElementById('authorMessage').value}
    `
    var link = 'mailto:bornofos@gmail.com'
    + '?&subject=' + escape('Mensaje para duda o cotización')
    + '&body=' + escape(messageBody);

    window.location.href = link;
}