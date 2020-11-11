
class DonutMaker {

   constructor() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.autoClickerCost = 100;
      this.donutMultiplierCount = 0;
      this.donutMultiplierCost =10 ;
   }
   autoClickDounuts(){
      this.donutCount += this.autoClickerCount * Math.pow(1.2,this.donutMultiplierCount)
   }
   recordClick(){
      this.donutCount += Math.pow(1.2,this.donutMultiplierCount)
   }

   retrieveDonutCount() {
      return this.donutCount;

   }

   purchaseAutoClicker() {

      if (this.donutCount >= this.autoClickerCost) {
         this.autoClickerCount++;
         this.donutCount -=this.autoClickerCost;
         this.autoClickerCost += this.autoClickerCost * .1;
      }else{
         alert('You cannot buy more Auto Clicker');
      }
   }

   retrievePurchaseAutoClicker() {
      return this.autoClickerCount;
   }

   
      purchasedonutMultiplierCount() {
         if (this.donutCount >= this.donutMultiplierCost) {
            this.donutMultiplierCount++;
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplierCost += this.autoClickerCost * .1;
         }else{
            alert('You cannot buy more donut multipliers');
      }
      }
   retrieveDonutMultiplierCount() {
      return this.donutMultiplierCount;
   }
resetGame(){
   this.donutCount = 0;
   this.autoClickerCount = 0;
   this.donutMultiplierCount = 0;
}


   }


export { DonutMaker }