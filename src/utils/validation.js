export default function Validation(errors, name, value) {
    
    switch (name) {
        case 'email':
            let emailError = 
            value.indexOf('@') === -1 ? "Email must contain @" : "";
            errors.email = emailError;
            break;
            case 'username':
                let usernameError =
                value.length >= 6 ? "" : "Username can't be less than 6 character"
                    errors.username = usernameError
                
                break;
            case 'password':
                let passwordError;
                if(value.length < 7) {
                    passwordError= "password can't be less than 6 characters"
                }
                var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
                if(!re.test(value)) {
                    passwordError= "Password must contain a character and a number"
                }
                errors.password = passwordError;
                break;
    
        default:
            return errors;
    }

}