const celsius = document.querySelector('#celsius')
const kelvin = document.querySelector('#kelvin')
const fahrenheit = document.querySelector('#fahrenheit')
console.log(celsius,kelvin,fahrenheit);

celsius.addEventListener('input', () => {
    let c = parseFloat(celsius.value)
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
});
fahrenheit.addEventListener('input',() => {
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32)*5/9;
    let k = (f - 32)*5/9 + 273.15;
    celsius.value =c;
    kelvin.value = k;
});

kelvin.addEventListener('input',() => {
    let k = parseFloat(kelvin.value);
    let c = (k - 273.15);
    let f = (k - 273.15)*9/5 + 32;
    celsius.value = c;
    fahrenheit.value = f;
});
const container = document.querySelectorAll('span');

container.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})
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
const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.querySelector('#question')

const option_a = document.querySelector('.text-option-a')
const option_b = document.querySelector('.text-option-b')
const option_c= document.querySelector('.text-option-c')
const option_d= document.querySelector('.text-option-d')
const answerElement =  document.querySelectorAll('.answer')

const submit = document.querySelector('#submit');

let questionNo = 0;
let score = 0;

question.textContent = quiz[questionNo].question;
option_a.textContent = quiz[questionNo].ans1text;
option_b.textContent = quiz[questionNo].ans2text;
option_c.textContent = quiz[questionNo].ans3text;
option_d.textContent = quiz[questionNo].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[questionNo].answer){
            score++;
        }

        questionNo++;
        if( questionNo < quiz.length){
            question.textContent = quiz[questionNo].question;
            option_a.textContent = quiz[questionNo].ans1text;
            option_b.textContent = quiz[questionNo].ans2text;
            option_c.textContent = quiz[questionNo].ans3text;
            option_d.textContent = quiz[questionNo].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});