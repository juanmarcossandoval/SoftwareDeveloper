const modal = document.getElementById("emailModal");
const result = document.getElementById("result");
const result_msg = document.getElementById("result-msg");
const email_form = document.getElementById("emailForm");
const btn_send = document.getElementById("send-btn");
const subj_inp = document.getElementById("subject");
const subj_lbl = document.getElementById("subj-lbl");
const mail_inp = document.getElementById("email");
const mail_lbl = document.getElementById("email-lbl");
const msg_inp = document.getElementById("msg");
const msg_lbl = document.getElementById("msg-lbl");
const fullname_inp = document.getElementById("fullname");
const fullname_lbl = document.getElementById("fullname-lbl");

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

    document.getElementById(section).style.display = "flex";
    evt.currentTarget.className += " active";

    if (document.documentElement.clientWidth < 900){
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.display = "none";
        }
    } else {
        console.log("no aplica");
    }
}

document.getElementById('defaultOpen').click();

function openEmailModal(){
    modal.style.display = "flex";
}

function closeEmailModal() {
    subj_inp.value = "";
    mail_inp.value = "";
    msg_inp.value = "";
    fullname_inp.value = "";
    result.style.display = "none";
    result_msg.innerText = "";
    email_form.style.display = "flex";
    modal.style.display = "none";
    btn_send.setAttribute("disabled","");
}

function sendEmail(event) {

    event.preventDefault();

    email_form.style.display = "none";
    result.style.display = "flex";
    result_msg.innerText = "Enviando email..";

    const templateParams = {
        subject: subj_inp.value,
        name: fullname_inp.value,
        email: mail_inp.value,
        msg: msg_inp.value,
        reply_to: mail_inp.value       
    };

    emailjs.send('jms_portfolio_email', 'contacto_portfolio', templateParams).then(
        (response) => {
            result_msg.innerText = "¡Su correo fue enviado con éxito a juanmarcos.sandoval@gmail.com!";
        },
        (error) => {
            result_msg.innerText = "¡Su correo no pudo ser enviado a juanmarcos.sandoval@gmail.com!";
        },
    );

}

function calcularEdad() {
    const hoy = new Date();
    const cumpleanos = new Date('1990-12-20');
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    document.getElementById("edad").innerText = `20-12-1990 ${edad} años`;
}

calcularEdad();

function validateLength(value,label){
    value.length == 0 ? label.classList.add("invalid-label") : label.classList.remove("invalid-label");
    return value.length > 0;
}

function validateEmail(value,label){
    let valid = false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailRegex.test(value) ? 
    (label.classList.remove("invalid-label"), valid = true) 
    : label.classList.add("invalid-label");
    return valid;
}

function validateFields(){
    const validSubj = validateLength(subj_inp.value,subj_lbl);
    const validMsg = validateLength(msg_inp.value,msg_lbl);
    const validName = validateLength(fullname_inp.value,fullname_lbl);
    const validMail = validateEmail(mail_inp.value,mail_lbl);

    validMail && validMsg && validName && validSubj ? 
    btn_send.removeAttribute("disabled") :
    btn_send.setAttribute("disabled","");
}

subj_inp.addEventListener('keyup', (event) => {
    validateFields();
});

msg_inp.addEventListener('keyup', (event) => {
    validateFields();
});

fullname_inp.addEventListener('keyup', (event) => {
    validateFields();
});

mail_inp.addEventListener('keyup', (event) => {
    validateFields();
});

function openMenu() {
    
    var tablinks = document.getElementsByClassName("tablinks");

    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].style.display == "none" ?
        tablinks[i].style.display = "flex" :
        tablinks[i].style.display = "none" 
    };
}
