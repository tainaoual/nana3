class DonutMaker {
   constructor() {
      this.clickCount = 0;
      this.donutcount = 0;
      this.autoClickerCount = 1;
      this.autoClickerDonut = 100;
      this.autoClickerCost =0.01;
      this.percentage = 0.01;
   }
   recordClick() {
      this.clickCount++;
      this.donutcount++;
     
   }

   retrieveAutoClickerCount() {
      return this.autoClickerCount;
   }
   
   addAutoClicker(){
      this.autoClickerCount++;
      this.autoClickerCost++;
      
   }

   autoClickerTotal(){

      let  autoClickerTotal = this.autoClickerCount * this.autoClickerDonut;
      
        let additional  = 0.01; 
       if(this.autoClickerCount >= 2){
          this.percentage = this.autoClickerDonut * 0.01;
         this.autoClickerDonut = (this.autoClickerCount * this.autoClickerDonut)+ percentage;
       }
       return this.donutcount;
   }

     
   
   substractAutoClickerCost(){
      return this.autoClickerCount--;
   }  
}

// let  donutcount = this.autoClickerCount * this.autoClickerDonut;
//       ///let additional  = 0.01; // 10
//       if(this.autoClickerCount >= 2){
//          this.percentage = this.autoClickerDonut * 0.01;
//          this.donutcount = ((this.autoClickerCount * this.autoClickerDonut)*2)+ percentage;
//       }
//       return this.donutcount;
//    }

   // return this.autoClickerDonut * this.autoClickerCount + this.autoClickerCost;
         
   
  // addAutoClickerCost(){
      
  // }
  //this.autoClickerCost++;

   //autoclicker count = 2 add 10%
   

   //if autoclickercount > 2 add 10%
   

