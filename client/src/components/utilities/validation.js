export const phoneValidation = (form) => {
    const phoneFormat = /^\d{10}$/;
    let passedPhoneCheck = true;

    if (!form.phone.value.match(phoneFormat)) {
        form.phone.parentElement.classList.add('phone-error');
        passedPhoneCheck = false;
    } else {
        form.phone.parentElement.classList.remove('phone-error');
    }
    return passedPhoneCheck;
}

export const emailValidation = (form) => {
    const emailFormat = /\S+@\S+\.\S+/;
    let passedEmailCheck = true;

    if (!emailFormat.test(form.email.value)) {
        form.email.parentElement.classList.add('email-error');
        passedEmailCheck = false;
    }
    else {
        form.email.parentElement.classList.remove('email-error');
    }
    return passedEmailCheck;
}

export const validateSubmit = (form) => {
    let passedSubmitCheck = true;

    if (!form.firstName.value.trim()) {
        form.firstName.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.firstName.parentElement.classList.remove('validation-error');
    }
    if (!form.lastName.value.trim()) {
        form.lastName.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.lastName.parentElement.classList.remove('validation-error');
    }
    if (!form.streetAddress.value.trim()) {
        form.streetAddress.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.streetAddress.parentElement.classList.remove('validation-error');
    }
    if (!form.city.value.trim()) {
        form.city.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.city.parentElement.classList.remove('validation-error');
    }
    if (!form.postalCode.value.trim()) {
        form.postalCode.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.postalCode.parentElement.classList.remove('validation-error');
    }
    if (!form.phone.value.trim()) {
        form.phone.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.phone.parentElement.classList.remove('validation-error');
    }
    if (!form.email.value.trim()) {
        form.email.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.email.parentElement.classList.remove('validation-error');
    }
    if (!form.datetime.value.trim()) {
        form.datetime.parentElement.classList.add('validation-error');
        passedSubmitCheck = false;
    } else {
        form.datetime.parentElement.classList.remove('validation-error');
    }

    return passedSubmitCheck;
}
