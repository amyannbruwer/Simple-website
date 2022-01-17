'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});

function sonic() {
    location.replace("sonic.html")
}

function btc() {
    location.replace("bigthecat.html")
}

function froggy() {
    location.replace("froggy.html")
}