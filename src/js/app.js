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
        var colors = ['#760CE8', '#4782B1', '#E8890C'];
        var nember = Math.floor(Math.random() * 4);
        document.body.style.background = colors[nember];

      
    });
   


    const purchaseAutoClickerCount = document.querySelector("#purchaseAutoClickerCount");
    const purchaseAutoClickersButton = document.querySelector("#purchaseAutoClickersButton");

    purchaseAutoClickersButton.addEventListener("click", () => {
        DonutMakerGame.purchaseAutoClicker();
        purchaseAutoClickerCount.innerHTML = DonutMakerGame.retrievePurchaseAutoClicker();
        update();
    });

   
   
    const DonutMultiplierCount = document.querySelector("#DonutMultiplierCount");
    const DonutMultiplierCountButton = document.querySelector("#DonutMultiplierCountButton");

    DonutMultiplierCountButton.addEventListener("click", () => {
        DonutMakerGame.purchasedonutMultiplierCount();
        DonutMultiplierCount.innerHTML = DonutMakerGame.retrieveDonutMultiplierCount();
        update();
    });
  
    const contactInfo = document.querySelector('#contactInfo');
    const module = document.querySelector('#myModule');
    const closeModule = document.querySelector('#close');
    contactInfo.addEventListener("click", () => {
        modal.style.display = "block";
    });
   const resetButton = document.querySelector('#resetDonutbutton');
   resetButton.addEventListener("click", () => {
    DonutMakerGame.resetGame(); 
    update();
});
const update = function(){
    donutCount.innerHTML = DonutMakerGame.retrieveDonutCount();
    purchaseAutoClickerCount.innerHTML = DonutMakerGame.retrievePurchaseAutoClicker();
    DonutMultiplierCount.innerHTML = DonutMakerGame.retrieveDonutMultiplierCount();
};


