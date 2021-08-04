export default function validateLogIn(values) {

    let errors = {};

    // validate email
    if(!values.email) {
        errors.email = "Email is requiered";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Invalid email"
    }

    // validate el password
    if(!values.password) {
        errors.password = "Password is requiered";
    } else if( values.password.length < 6 ) {
        errors.password = 'Password should have at least 6 characters'
    }

    return errors;
}