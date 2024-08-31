const modal = document.getElementById("emailModal");

function openSection(evt, section) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('defaultOpen').click();

function openEmailModal(){
    modal.style.display = "flex";
}

function closeEmailModal() {
    modal.style.display = "none";
}

function sendEmail(event) {

    event.preventDefault();

    const asunto = document.getElementById("subject").value;
    const mail = document.getElementById("email").value;
    const mensaje = document.getElementById("msg").value;

    var templateParams = {
        subject: asunto,
        email: mail,
        msg: mensaje
    };

    emailjs.send('jms_portfolio_email', 'jsm_template', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}
