const name = document.getElementById('f_imie')
const mail = document.getElementById('f_email')
const adres = document.getElementById('f_adres')
const kod = document.getElementById('f_kod')
const tekst = document.getElementById('f_text')
const form = document.getElementById('form')

const ename = document.getElementById('e_imie')
const email = document.getElementById('e_email')
const eadres = document.getElementById('e_adres')
const ekod = document.getElementById('e_kod')
const etekst = document.getElementById('e_text')

const errorElement = document.getElementById('error')

function checkEmailRegEx(str) { 
    var email1 = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/; 
    if (email1.test(str)) return false; else return true; 
} 
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
function validatePostCode(str) {
    var kody = /^[0-9][0-9]-[0-9][0-9][0-9]$/; 
    if (kody.test(str)) return false; else return true; 
}

form.addEventListener('submit', (e) =>{
    let messages=1;
    if(isEmptyOrSpaces(name.value)){
        messages=0;
        ename.innerText="Wprowadz imie"
    }
    if(checkEmailRegEx(mail.value)){
        messages=0;
        email.innerText="Wprowadziłeś zły email"
    }
    
   if(isEmptyOrSpaces(adres.value)){
        messages=0;
        eadres.innerText="Wprowadź adres"
    }
    if(validatePostCode(kod.value)){
        messages=0;
        ekod.innerText="Wprowadź poprawy kod"
    }
    if(isEmptyOrSpaces(tekst.value)){
        messages=0;
        etekst.innerText="Wprowadź wiadomosc"
    }
    
    if(messages < 1){
        e.preventDefault();
    }
    
})


