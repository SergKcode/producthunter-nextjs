export default function validateCreateAccount(values) {

    let errors = {};

    // Validate name
    if(!values.name) {
        errors.name = "Name is requiered";
    }

    // Validate  email
    if(!values.email) {
        errors.email = "Email is requiered";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Invalid email"
    }

    // Validate  password
    if(!values.password) {
        errors.password = "Password is requiered";
    } else if( values.password.length < 6 ) {
        errors.password = 'Password should have at least 6 characters'
    }

    return errors;
}