export default function validateCreateProduct(values) {

    let errors = {};

    // Validate user's name
    if(!values.name) {
        errors.name = "Name required";
    }

    // Validate company
    if(!values.company) {
        errors.company = "Company name required"
    }
    
    // Validate url
    if(!values.url) {
        errors.url = 'URL required';
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) ) {
        errors.url = "URL invalid"
    }

    // Validate description.
    if(!values.description) {
        errors.description = "Add product description"
    }


    return errors;
}