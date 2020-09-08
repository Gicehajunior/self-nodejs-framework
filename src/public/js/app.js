/*********
 * By default, returns false, return true if there exists errors
 * parameters passed:
 * *****user username
 * *****user email
 * *****user password
 * *****user password confirmation
 * 
 * @ an every value above is checked for errors
 */
function handleRegistrationErrors(userUid, emailUid, password, confirmPassword) {
    
    const email_regular_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userUid.length > 0) {
        $('#userUid').removeClass('is-invalid');
    } else {
        $('#userUid').addClass('is-invalid');
    }

    if (emailUid.match(email_regular_expression)){
        $('#emailUid').removeClass('is-invalid')
    }
    else{
        $('#emailUid').addClass('is-invalid');
    }

    if(password.length > 0){
        $('#password').removeClass('is-invalid');
    }
    else{
        $('#password').addClass('is-invalid');
    }

    if (confirmPassword === password) {
        $('#password-confirmation').removeClass('is-invalid');
    }
    else{
        $('#password-confirmation').addClass('is-invalid');
    }
    
    if (userUid.length <= 0 || !emailUid.match(email_regular_expression) || password.length <= 0 || password !== confirmPassword)
        // has errors
        return true;
    return false;
}


/*****
 * Triggers the registration button and 
 * Gets all the users entered values from the form
 * Submits all the values to the Node server using ajax
 * a post route is mapped to the server
 */
$(document).ready(function(){
    $('#registerBtn').on('click', (e) => {
        e.preventDefault();

        let userUid = $('#userUid').val();
        let emailUid = $('#emailUid').val();
        let password = $('#password').val();
        let confirmPassword = $("#password-confirmation").val();
        
        // handles errors
        let checkErrors = handleRegistrationErrors(userUid, emailUid, password, confirmPassword);

        if(!checkErrors){
            $.ajax({
                url: `${window.location.origin}/register-new-user`,
                method: "POST",
                data: {
                    userUid: userUid,
                    emailUid: emailUid,
                    password: password,
                    confirmPassword: confirmPassword
                },
                success: (data) => {
                    console.log(data);
                },
                error: (errors) => {
                    console.log(errors);
                }
            });
        }
        else{
            return;
        }
    })
})





