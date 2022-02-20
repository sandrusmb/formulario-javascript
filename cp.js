
/* Postal Code - Number Of Characters Alert */

let postalCode=document.getElementById("codigo");

function characterNumber(){
    if(postalCode.value==""){
        alert("El campo Código Postal no puede quedar vacío, por favor introduce información")
    }else{
        if(postalCode.value.length<5 || postalCode.value.length>5){
            alert("Asegúrate de introducir 5 caracteres en tu Código Postal");
        }else{
            return false;
        }
    }
}

postalCode.addEventListener("focusout",characterNumber);

/* Postal Code - Only numbers Alert */

function onlyNumbers(){
    let result, regex;
    let sentence = postalCode.value;
    regex = /[^0-9]/gi;
    result = sentence.match(regex);
    if(result=="" || result==null){
        return false;
    }else{
        alert("El campo Código Postal solo admite números")
    }
}

postalCode.addEventListener("focusout",onlyNumbers);

/* Postal Code - Read 2 Digits & Validate If Exist */

let pcListArray=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52"];

function readDigits(){
    let postalCodeArray=postalCode.value.split("");
    let twoDigitsArray=postalCodeArray.slice(0,2);
    let twoDigitsPostalCode=twoDigitsArray.join("");
    console.log(twoDigitsPostalCode);
    let includesPostalCode=pcListArray.includes(twoDigitsPostalCode);
    console.log(includesPostalCode);
    if(includesPostalCode==false){
        alert("Código Postal no válido")
    }
}

postalCode.addEventListener("focusout",readDigits);

/* Province - Empty Alert */

let province=document.getElementById("provincia");

function emptyAlert(){
    if(province.value==""){
        alert("El campo Provincia no puede quedar vacío, por favor introduce información")
    }else{
        return false;
    }
}

province.addEventListener("focusout",emptyAlert);

/* Province - Only Letters Alert */

function onlyLetters(){
    let result, regex;
    let sentence = province.value;
    regex = /[^a-z\s]/gi;
    result = sentence.match(regex);
    if(result=="" || result==null){
        return false;
    }else{
        alert("El campo Provincia solo admite letras. Por favor elimina números y/o caracteres especiales como tildes o eñes (ejem: La Coruna). Los espacios están permitidos (ejem: Islas Baleares).")
    }
}

province.addEventListener("focusout",onlyLetters);

/* Province - Read & Validate If Province Exist + Validate if Province is relatived to Postal Code  */

let provinceListArray=["alava","albacete","alicante","almeria","avila","badajoz","islasbaleares","barcelona","burgos","caceres","cadiz","castellon","ciudadreal","cordoba","lacoruna","cuenca","gerona","granada","guadalajara","guipuzcoa","huelva","huesca","jaen","leon","lerida","larioja","lugo","madrid","malaga","murcia","navarra","orense","asturias","palencia","laspalmas","pontevedra","salamanca","santacruzdetenerife","cantabria","segovia","sevilla","soria","tarragona","teruel","toledo","valencia","valladolid","vizcaya","zamora","zaragoza","ceuta","melilla"];
let mixListArray=["01alava","02albacete","03alicante","04almeria","05avila","06badajoz","07islasbaleares","08barcelona","09burgos","10caceres","11cadiz","12castellon","13ciudadreal","14cordoba","15lacoruna","16cuenca","17gerona","18granada","19guadalajara","20guipuzcoa","21huelva","22huesca","23jaen","24leon","25lerida","26larioja","27lugo","28madrid","29malaga","30murcia","31navarra","32orense","33asturias","34palencia","35laspalmas","36pontevedra","37salamanca","38santacruzdetenerife","39cantabria","40segovia","41sevilla","42soria","43tarragona","44teruel","45toledo","46valencia","47valladolid","48vizcaya","49zamora","50zaragoza","51ceuta","52melilla"];

function readProvince(twoDigitsPostalCode){
    let pValueArray=province.value.split(" ");
    let pValue=pValueArray.join("");
    let finalPValue=pValue.toLowerCase();
    console.log(finalPValue);
    let includesProvince=provinceListArray.includes(finalPValue);
    let cpData=twoDigitsPostalCode.path[2].childNodes[9].childNodes[3].value.split("").slice(0,2).join("");
    let mixValues=`${cpData}${finalPValue}`;
    let includesMixValue=mixListArray.includes(mixValues);
    console.log(includesMixValue);
    if(includesProvince==true){
        if(includesMixValue==true){
            const divPostalCode = document.querySelector(".provincia");
            const newSpan = document.createElement("p");
            newSpan.classList.add("hasSuccess");
            const textMessage = document.createTextNode("La relación entre Código Postal y Provincia es correcta");
            newSpan.appendChild(textMessage);
            divPostalCode.appendChild(newSpan);
        }else{
            const divPostalCode = document.querySelector(".provincia");
            const newSpan = document.createElement("p");
            newSpan.classList.add("hasError");
            const textMessage = document.createTextNode("El Código Postal y la Provincia no coinciden. Por favor, revisa los datos.");
            newSpan.appendChild(textMessage);
            divPostalCode.appendChild(newSpan);
        }
    }else{
        alert("La Provincia no es válida")
    }
}

province.addEventListener("focusout",readProvince);




