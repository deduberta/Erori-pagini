
const REQUIRED_ERROR = 'Both fields are required'
const MATCH_ERROR = 'Password and passwordConfirm fields should match.'
const STRENGTH_ERROR = 'Password: 1 uppercase, 1 lowercase, 1 digit, minimum 8 char.'

// show/hide spinner
const Spinner = () => {
    const _spinner = document.getElementById("spinner");
    return {
        hide: () => _spinner.style.visibility = "hidden",
        show: () => _spinner.style.visibility = "visible",
    }
}

const repaint = () => {
    const message = document.getElementById('confirm-message')
    message.style.visibility = 'visible'
}

const send = async () => {
    const spinner = Spinner()
    try {
        spinner.show()
        await fetch('https://reqres.in/api/users')
        spinner.hide()
        repaint()
    } catch (err) {
        spinner.hide()
        console.error(err.message)
        window.location('error500')
    }
}

// validation

const required = (password, confirmPassword) => (!password || !confirmPassword) ? REQUIRED_ERROR : ''
const match = (password, confirmPassword) => (password !== confirmPassword) ? MATCH_ERROR : ''
const strength =  password => /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)
    ? ''
    : STRENGTH_ERROR
const validationCriteria = [required, match, strength]

const validation = (password, confirmPassword) => {
    const errors = validationCriteria.map(fn => fn(password, confirmPassword))
    while(errors.length && !errors[0]) errors.shift()
    return errors.length ? errors[0] : ''
}

function blurInput(titi){
    console.error(titi)
}
//         password.style.backgroundColor = good_color;
//         message.style.color = good_color;
//         message.innerHTML = '<h1>Password match</h1>'
//     } else {
//         confirm.style.backgroundColor = bad_color;
//         message.style.color = bad_color;
//         message.innerHTML = '<h1>Passwords Do Not Match!</h1>>';
//     }
// }

// const main  = () => {
//     const good_color = "#66cc66";
//     const bad_color = "#ff6666";
//     const password = document.getElementById('password');
//     const confirmPassword = document.getElementById('confirm-password')
//     const message = document.getElementById('confirm-message2')
// }

if((typeof process !== 'undefined') && (process.release.name === 'node')) {
    module.exports.REQUIRED_ERROR = REQUIRED_ERROR
    module.exports.MATCH_ERROR = MATCH_ERROR
    module.exports.STRENGTH_ERROR = STRENGTH_ERROR
    module.exports.validation = validation
}