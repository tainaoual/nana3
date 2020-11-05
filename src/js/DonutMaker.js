
class DonutMaker {

   constructor() {
      this.donutCount = 0;
      this.autoClickerCount = 0;
      this.autoClickerCost = 100;
      this.donutMultiplierCount = 10;
   }

   recordClick() {
      this.donutCount++;

   }

   retrieveDonutCount() {
      return this.donutCount;

   }
   retrievePurchaseAutoClicker() {
      return this.donutCount;
   }
   retrieveDonutMultiplierCount() {
      return this.donutMultiplierCount;
   }

   purchaseAutoClicker() {
      this.autoClickerCount++;
      this.donutCount -= this.autoClickerCost;
      this.autoClickerCost += this.autoClickerCost * .01
      if (this.autoClickerCount >= 2) {
         this.autoClickerCost++;
      } if (this.donutCount <= 100) {
         this.autoClickerCount = 0;
      } if (this.donutCount >= 100) {
         this.donutMultiplierCount = 0
      }
       if (this.autoClickerCount > 1.2) {
         this.donutMultiplierCount++;

      }
   }

      purchasedonutMultiplierCount() {
      if (this.donutMultiplierCount = 1) {
            this.donutCount * 1.2;
         }
      }
   }
