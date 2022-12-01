let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date("2022-12-05");
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1 style="text-align: center;">Happy 30<sup>th</sup> year wedding anniversary to<br/>our Mummy, Mrs, Pastor, Teacher, Prophetess, etc... <br/><b style=" animation: color 0.5 infinite;">OLADIPO BIMPE BITRICE</b><br/>&<br/>our Daddy, Mr, Pastor, Barrister, etc... <br/><b style=" animation: color 0.5 infinite;">OLADIPO JOSEPH ADEYINKA</h1><br/>
        
        <audio controls autoplay>
        <source src="Iyawo-Mi-Timi-Dakolo-PraiseZion.mp3" type="audio/ogg">
        <source src="Iyawo-Mi-Timi-Dakolo-PraiseZion.mp3" type="audio/mpeg">
        </audio>`;

    } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();



window.onload = function() {
    var backgroundImg = ["./RAW IMAGES/BlessedHome8.jpg",
        "./RAW IMAGES/BlessedHome7.jpg",
        "./RAW IMAGES/BlessedHome6.jpg",
        "./RAW IMAGES/BlessedHome5.jpg",
        "./RAW IMAGES/BlessedHome4.jpg",
        "./background-img.jpg"
    ]


    setInterval(changeImage, 5000);

    function changeImage() {
        var i = Math.floor((Math.random() * 7));

        document.body.style.backgroundImage = "url('" + backgroundImg[i] + "')";

    }
}