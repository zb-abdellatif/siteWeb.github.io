/*jshint esversion: 6 */
let contact;
let contactConfirmation=$('.php-email-form');

const validateFormContact = (idOrClassEment, idButton) => {
    validateFormulaire(idOrClassEment) ? sendMail(idOrClassEment) : '';
}


function sendMail(idForm) {
    contact = {
        email: $('#email').val(),
        name: $('#name').val(),
        // societe: $('#message').val(),
        // telephone: $('#phone').val()?`(+${iti.getSelectedCountryData().dialCode}) `+$('#phone').val() :'',
        subject: $('#subject').val(),
        message: $('#message').val()
    }
    emailjs.init("7AGMST5MlKCBCe402")
    $('.loading').addClass('d-block')
    emailjs.send("service_dp91uls","template_axtiw8g",{
        subject: contact.subject,
        email: contact.email,
        name: contact.name,
        message: contact.message,
        content:""
    }) .then(() => {
        $('.sent-message').addClass('d-block')
        $('.loading').removeClass('d-block')
        setInterval(()=>{
            $('.sent-message').removeClass('d-block')
        },5000)

        resetForm(idForm)
    }, (err) => {
        alert(JSON.stringify(err));
    });
}
