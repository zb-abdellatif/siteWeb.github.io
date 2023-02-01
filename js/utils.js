/*jshint esversion: 6 */
const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

validateFormulaire = (idOrClassForm) => {
    let valid = true
    $(`${idOrClassForm} input[required='required'], ${idOrClassForm} select[required='required'], ${idOrClassForm} textarea[required='required']`).each(function () {
        $(this).parent().find('.form-postuler-validation-message').remove();
        if ($(this).val() == '') {
            $(this).parent().append(`
                     <span class="form-postuler-validation-message text-danger">Champ obligatoire.</span>
                    `)
            valid = false;
        } else {
            switch ($(this).attr('type')) {
                case 'email': {
                    if (!validateEmail($(this).val())) {
                        $(this).parent().append(`
                     <span class="form-postuler-validation-message text-warning">Adresse e-mail invalide (Ex : example@gmail.com).</span>
                    `)
                        valid = false
                    }
                }
                    break;
                case 'file': {
                    if(this.files[0].size/(1024*1024)>5){
                        $(this).parent().append(`
                     <span class="form-postuler-validation-message text-danger">Fichier trop gros, veuillez sélectionner un fichier inférieur à 5 Mo</span>
                    `)
                        valid = false
                    }

                }
                    break;
                default:
                    break;
            }
        }

    })
    return valid
}


validateEmail = (email) => {
    return email.match(validEmailRegex)
}


resetForm = (idOrClassForm) => {
    $(`${idOrClassForm} input, ${idOrClassForm} select, ${idOrClassForm} select, ${idOrClassForm} textarea`).each(function () {
        $(this).val('');
    });
}