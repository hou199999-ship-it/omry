const typing = document.getElementById("typing");

const button = document.getElementById("loveButton");

const message = document.getElementById("message");

const heart = document.getElementById("heart");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================
   TYPING
========================= */

const text =
    "Ma3lich win rani... toujours n7eb nchoufek ttebssmi.";

let position = 0;

function writeText() {

    if (position < text.length) {

        typing.textContent += text[position];

        position++;

        setTimeout(writeText, 60);
    }
}

setTimeout(writeText, 1200);


/* =========================
   BUTTON
========================= */

button.addEventListener("click", function () {

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        button.textContent = "Je t'aime";

        createBurst();

    } else {

        button.textContent = "Clique ici";
    }
});


/* =========================
   CLICK ON HEART
========================= */

heart.addEventListener("click", function () {

    createBurst();

});


/* =========================
   CREATE FLOATING HEART
========================= */

function createHeart() {

    const newHeart =
        document.createElement("div");

    newHeart.classList.add("floating-heart");

    newHeart.style.left =
        Math.random() * 100 + "vw";

    newHeart.style.animationDuration =
        4 + Math.random() * 5 + "s";

    newHeart.style.transform =
        `rotate(-45deg) scale(${0.5 + Math.random()})`;

    floatingHearts.appendChild(newHeart);

    setTimeout(function () {

        newHeart.remove();

    }, 9000);
}


/* قلوب مستمرة */

setInterval(createHeart, 400);


/* =========================
   BURST
========================= */

function createBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            const newHeart =
                document.createElement("div");

            newHeart.classList.add("floating-heart");

            newHeart.style.left =
                30 + Math.random() * 40 + "vw";

            newHeart.style.bottom =
                30 + Math.random() * 30 + "vh";

            newHeart.style.animationDuration =
                2 + Math.random() * 2 + "s";

            floatingHearts.appendChild(newHeart);

            setTimeout(function () {

                newHeart.remove();

            }, 5000);

        }, i * 70);
    }
}
