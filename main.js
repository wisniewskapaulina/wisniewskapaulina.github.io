const spanTxt = document.getElementById("text");
const aboutMe = "and I currently work as ServiceNow Developer, but I would like to expand other technologies connected with Front-End. I am a graduate of Gdansk University of Technology and I have completed postgraduate studies - Web Development. I would like to improve my previously acquired skills.";


let index = 0;
const time = 60;

const addLetter = () => {
    spanTxt.textContent += aboutMe[index];
    index++;
    if (aboutMe.length === index) clearInterval(letterTyping);
}

const letterTyping = setInterval(addLetter, time);


AOS.init({
    delay: 150,
    duration: 10000,
    once: false,
})


