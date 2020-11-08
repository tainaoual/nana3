  import { DonutMaker } from "/src/js/DonutMaker.js"

 // alert('hello from app');

    const DonutMakerGame = new DonutMaker();
    
    const updateDonutCount = function(DonutMaker){ 
    };

    const donutCount = document.querySelector("#donutCount");
    const startGameButton = document.querySelector("#createDonutbutton");

    startGameButton.addEventListener("click", () => {
        DonutMakerGame.recordClick();
        donutCount.innerHTML = DonutMakerGame.retrieveDonutCount();
    });


    const purchaseAutoClickerCount = document.querySelector("#purchaseAutoClickerCount");
    const purchaseAutoClickersButton = document.querySelector("#purchaseAutoClickersButton");

    purchaseAutoClickersButton.addEventListener("click", () => {
        DonutMakerGame.purchaseAutoClicker();
        purchaseAutoClickerCount.innerHTML = DonutMakerGame.retrievePurchaseAutoClicker();
        update();
    });

    const update = function(){
        donutCount.innerHTML = DonutMakerGame.retrieveDonutCount();
    };

    const DonutMultiplierCount = document.querySelector("#DonutMultiplierCount");
    const DonutMultiplierCountButton = document.querySelector("#DonutMultiplierCountButton");

    DonutMultiplierCountButton.addEventListener("click", () => {
        DonutMakerGame.purchasedonutMultiplierCount();
        DonutMultiplierCount.innerHTML = DonutMakerGame.retrieveDonutMultiplierCount();
        update();
    });

    const contactInfo = document.querySelector('#contactInfo');
    const modal = document.querySelector('#myModule');
    const closeModal = document.querySelector('#close');
    contactInfo.addEventListener("click", () => {
        modal.style.display = "block";
    });
   // '#myModal'
    closeModal.addEventListener("click",() =>{
        modal.style.display = "none";
    });

 /*
    const accelerator = document.querySelector(".floorboard__accelerator");

    accelerator.addEventListener("click", () => {
        newCar.accelerate();
        updateDashBoard(newCar);
    });

    const updateDashBoard = function (car) {
        const speedometer = document.querySelector(".dashboard__speedometer");
        speedometer.innerText = car.speed;
        console.log(car.engineHealth);
    
        updateCheckEngineLight(car);
    
        updateOilPressureLight(car);
    
        updateAlternatorLight(car);
    }; */
// // function updateDonutMultiplierButton(){}
// // const updateAutoClickerCount = function(newDonutMaker) {}
// // const displayAutoClickerCost = function(newDonutMaker) {}
// // const updateDonutMultiplierCount = function(newDonutMaker) {}
// // const displayDonutMultiplierCost = function(newDonutMaker) {}
// // const displayDonutMultiplierValue = function(newDonutMaker){}


// const donutCount = function (donutCount) {
//     DonutMaker.innerText= DonutCount.DonutMaker;
//     donutCount.innerText = DonutCount.ClickerCount;
//     console.log(DonutCount.ClickerCount);
// }