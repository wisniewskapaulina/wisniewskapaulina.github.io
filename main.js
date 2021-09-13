const spanTxt = document.getElementById("text");
const aboutMe = "           Pochodzę z Torunia i jestem absolwentką Politechniki Gdańskiej. Poszukuję stażu lub praktyk związanych z Front-Endem. Obecnie pracuję jako Personalized Internet Assessor w przedsiębiorstwie wspomagającym rozwój sztucznej inteligencji. Uwielbiam podróżować oraz interesuję się fotografią i ogrodnictwem.";


let index = 0;
const time = 80;

const addLetter = () => {
    spanTxt.textContent += aboutMe[index];
    index++;
    if (aboutMe.length === index) clearInterval(letterTyping);
}

const letterTyping = setInterval(addLetter, time);


AOS.init({
    delay: 150,
    duration: 3000,
    once: false,
})


