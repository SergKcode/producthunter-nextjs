import React, {useState} from "react";


//3 parametres: initial state, thing to validate and function to execute when we do submit
const useValidation=(initialState, validate, fn)=>{
    
   const [values, setValues]=useState (initialState)
   const [errors, setErorrs]=useState ({})
   const [submitForm, setSubmitForm] = useState (false)

   useEffect(()=>{

        if(submitForm){

            const noErrors =Object.keys(errors).length===0;

            if(noErrors){
                fn();
            }

            setSubmitForm(false)
        }

   },[])

   // function that execute when user types something
   const handleChange = e =>{
       setValues({
           ...values,
           [e.target.name] : e.target.value
       })
   }

  
    // function that execute when usersubmit
    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    }


    // function that execute when blur event
    const handleBlur = () => {
        const validationErrors = validar(values);
        setErrors(validationErrors);
    }

    return {
        values, 
        errors, 
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidation