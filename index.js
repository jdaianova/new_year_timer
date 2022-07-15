const buttonMusic = document.querySelector('.play-button');
buttonMusic.addEventListener('click', () => {
    document.querySelector('#song').play();
});


function countDown() {
  const newYearDate = new Date("January, 1, 2023 00:00:00");
  //const newYearDate = new Date("July, 15, 2022 10:33:00");
  const currentDate = new Date();

  let msBeforeNY = newYearDate - currentDate;

  const msInSec = 1000;
  const msInMin = 1000 * 60;
  const msInHour = 1000 * 60 * 60;
  const msInDay = 1000 * 60 * 60 * 24;

  let daysBeforeNY = Math.floor(msBeforeNY / msInDay);
  let hoursBeforeNY = Math.floor((msBeforeNY % msInDay) / msInHour);
  let minutesBeforeNY = Math.floor((msBeforeNY % msInHour) / msInMin);
  let secondsBeforeNY = Math.floor((msBeforeNY % msInMin) / msInSec);

  document.querySelector(".days").textContent = FormNumber(daysBeforeNY);
  document.querySelector(".text-days").textContent = Declination(
    daysBeforeNY,
    "день",
    "дня",
    "дней"
  );

  document.querySelector(".hours").textContent = FormNumber(hoursBeforeNY);
  document.querySelector(".text-hours").textContent = Declination(
    hoursBeforeNY,
    "час",
    "часа",
    "часов"
  );

  document.querySelector(".minutes").textContent = FormNumber(minutesBeforeNY);
  document.querySelector(".text-minutes").textContent = Declination(
    minutesBeforeNY,
    "минута",
    "минуты",
    "минут"
  );

  document.querySelector(".seconds").textContent = FormNumber(secondsBeforeNY);
  document.querySelector(".text-seconds").textContent = Declination(
    secondsBeforeNY,
    "секунда",
    "секунды",
    "секунд"
  );

  if (msBeforeNY <= 0) {
    document.querySelector(".days").textContent = "00";
    document.querySelector(".text-days").textContent = "дней";

    document.querySelector(".hours").textContent = "00";
    document.querySelector(".text-hours").textContent = "часов";

    document.querySelector(".minutes").textContent = "00";
    document.querySelector(".text-minutes").textContent = "минут";

    document.querySelector(".seconds").textContent = "00";
    document.querySelector(".text-seconds").textContent = "секунд";

    clearInterval(timerID);

    document.querySelector('h1').textContent = 'С Новым годом!!!'
  }
}

let timerID = setInterval(countDown, 1000);

// склонение слов
//  form1 - форма слова в ед числе      ("день")
//  form2 - форма слова для числит 2-4  ("дня")
//  form3 - форма слова для числит 5-10 ("дней")
function Declination(number, form1, form2, form3) {
  if (number > 10 && number < 20) {
    return form3;
  } else if (number % 10 === 1) {
    return form1;
  } else if (number % 10 > 1 && number % 10 < 5) {
    return form2;
  } else {
    return form3;
  }
};

//прибавляет 0 к однозначному числу
function FormNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};