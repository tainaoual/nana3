
class DonutMaker {

   constructor() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.autoClickerCost = 100;
      this.donutMultiplierCount = 0;
     // this.donutMultiplierCost = ;
   }

   recordClick() {
      this.donutCount++;
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
      // this.donutCount * 1.2;
      if (this.donutMultiplierCount == 0 ) {
         this.donutCount = this.donutCount * this.donutCount;
         this.donutMultiplierCount= this.donutMultiplierCount + 1;
      }else{
         this.donutCount = this.donutCount * 1.2
         this.donutMultiplierCount= this.donutMultiplierCount + 1;
      }
   }
   retrieveDonutMultiplierCount() {
      return this.donutMultiplierCount;
   }
}

export { DonutMaker }