const button1 = document.querySelector(".btn-1");
console.log(button1);
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const button4 = document.querySelector(".btn-4");
const button5 = document.querySelector(".btn-5");

const content = document.querySelector(".content");

button1.addEventListener("click", () =>{
    content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5">Dubai Mainland</h5>
        <ul class="px-5">
            <li class="list-unstyled py-1"><a class="text-decoration-none" href="#">DUBAI MAINLAND COWORKING LICENSE</a></li>
            <li class="list-unstyled py-1"><a class="text-decoration-none" href="#">Department of Economic Development – Dubai (DED)</a></li>
        </ul>
    </div>`


})
button2.addEventListener("click", () =>{
    content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5">Abu Dhabi</h5>
        <ul class="px-5">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">DEPARTMENT OF ECONOMIC DEVELOPMENT – ABU DHABI (AD DED)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">ABU DHABI GLOBAL MARKET FREE ZONE (ADGM)</a>
            </li>
        </ul>
    </div>` 

})
button3.addEventListener("click", () =>{
    content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5">Free Zones</h5>
        <ul class="px-5">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
            <li class="list-unstyled">
                <a class="text-decoration-none" href="#">Ras Al Khaimah Economic Zone (RAKEZ)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">RAK INTERNATIONAL CORPORATE CENTRE (RAKICC)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">FUJAIRAH CREATIVE CITY FREE ZONE</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Sharjah Media City Free Zone (Shams)</a>
            </li>
        </ul>
    </div>` 

})
button4.addEventListener("click", () =>{
    content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5">Offshore</h5>
        <ul class="px-5">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">BRITISH VIRGIN ISLANDS (BVI)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">JEBEL ALI FREE ZONE AUTHORITY (JAFZA)</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">AJMAN FREE ZONE OFFSHORE COMPANY SETUP</a>
            </li>
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">SEYCHELLES(JAFZA)</a>
            </li>
        </ul>
    </div>` 

})
button5.addEventListener("click", () =>{
    content.innerHTML = `<div class = "col-12 py-3 px-5 content-child">
        <h5 class="px-5">Dubai Mainland</h5>
        <ul class="px-5">
            <li class="list-unstyled py-1">
                <a class="text-decoration-none" href="#">Saudi Arabia</a>
            </li>
        </ul>
    </div>` 

})



