/* Show Rating */

const buttonRating=document.getElementById("ratingBtn");

function showRating() {
    let userRating=document.getElementById("rating");
    alert(`Has valorado con ${userRating.value} puntos`);
}

buttonRating.addEventListener("click", showRating);

/* Show Account */

const buttonAccount=document.getElementById("accountBtn");

function showAccount() {
    let userCountry=document.getElementById("pais");
    let userIban=document.getElementById("iban");
    let userBank=document.getElementById("name");
    let userOffice=document.getElementById("sucursal");
    let userDc=document.getElementById("dc");
    let userAccount=document.getElementById("cuenta");
    alert(`La información de su cuenta bancaria es: ${userCountry.value}${userIban.value}-${userBank.value}-${userOffice.value}-${userDc.value}-${userAccount.value}`);
}

buttonAccount.addEventListener("click", showAccount);

/* Show Day */

buttonDay=document.getElementById("dayBtn");

function showDay(){
    let userDay= document.getElementById("date");
    let userDayValue = userDay.value;
    let day = new Date(userDayValue);
    let dayNumber=day.getDay();
    let week =["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    alert(`El día de la semana es: ${week[dayNumber]}`);
}

buttonDay.addEventListener("click", showDay);