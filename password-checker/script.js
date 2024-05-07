const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

inputField.addEventListener('input',function(){
    let password = inputField.value
    ;
    if(password.length < 8 )
        {
            outputField.innerHTML ='Password is too short';
            outputField.style.color = 'red';
        }else
        {
            // outputField.innerHTML = 'Password is long enough';
            // outputField.style.color = 'green';

            if(password.search(/[a-z]/) == -1){
                outputField.innerHTML = 'Password is missing a lowercase latter';
            outputField.style.color = 'red';

            }else if(password.search(/[A-Z]/) == -1){
                outputField.innerHTML = 'Password is missing a uppercase latter';
            outputField.style.color = 'red';
        }else if(password.search(/[0-9]/) == -1){
            outputField.innerHTML = 'Password is missing a number latter';
        outputField.style.color = 'red';
        
        }else if(password.search(/[`/~/!/@/#/$/%/^/&/*/(/)/+/{/'/,/./</>/|/,]/) == -1){
            outputField.innerHTML = 'Password is missing a special character latter';
        outputField.style.color = 'red';
        
        }else{
            outputField.innerHTML = 'Password is strong';
            outputField.style.color = 'green';

        }
}})
