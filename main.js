/* Show Rating */

const buttonRating=document.getElementById("ratingBtn");

function showRating() {
    const userRating=document.getElementById("rating");
    alert(`Has valorado con ${userRating.value} puntos`);
}

buttonRating.addEventListener("click", showRating);

/* Show Account */

const buttonAccount=document.getElementById("accountBtn");

function showAccount() {
    const userCountry=document.getElementById("pais");
    const userIban=document.getElementById("iban");
    const userBank=document.getElementById("name");
    const userOffice=document.getElementById("sucursal");
    const userDc=document.getElementById("dc");
    const userAccount=document.getElementById("cuenta");
    alert(`La información de su cuenta bancaria es: ${userCountry.value}${userIban.value}-${userBank.value}-${userOffice.value}-${userDc.value}-${userAccount.value}`);
}

buttonAccount.addEventListener("click", showAccount);

/* Show Day */

buttonDay=document.getElementById("dayBtn");

function showDay(){
    const userDay= document.getElementById("date");
    const userDayValue = userDay.value;
    const day = new Date(userDayValue);
    const dayNumber=day.getDay();
    const week =["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    alert(`La fecha seleccionada en el elemento de fecha es un ${week[dayNumber]}`);
}

buttonDay.addEventListener("click", showDay);