
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

export const validatePassword = (password) => {
    return password.length >= 5;
}

export const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

    return phoneRegex.test(phone);
}
