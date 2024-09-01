const modal = document.getElementById("emailModal");
const sending = document.getElementById("sending");
const resultOK = document.getElementById("resultOK");
const resultKO = document.getElementById("resultKO");

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
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("fullname").value = "";
    resultOK.style.display = "none";
    resultKO.style.display = "none";
    sending.style.display = "none"
    modal.style.display = "none";
}

function sendEmail(event) {

    event.preventDefault();
    sending.style.display = "flex"; 

    const asunto = document.getElementById("subject").value;
    const mail = document.getElementById("email").value;
    const mensaje = document.getElementById("msg").value;
    const nombre = document.getElementById("fullname").value;

    var templateParams = {
        subject: asunto,
        name: nombre,
        email: mail,
        msg: mensaje,
        reply_to: mail       
    };

    emailjs.send('jms_portfolio_email', 'contacto_portfolio', templateParams).then(
        (response) => {
            sending.style.display = "none";
            resultOK.style.display ="flex";
        },
        (error) => {
            sending.style.display = "none";
            resultKO.style.display ="flex";
        },
    );

}
