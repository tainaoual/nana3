describe('DonutMaker turns clicks into donuts and then donuts into auto clickers and donut multipliers.', () => {
  /*
  FEATURE 1 : Have a way to count donuts.
  As a user, I want to know how many donuts I have created, so that I know what my score is.

  Can add to donut count.
  Can retrieve a donut count
  */
  describe('FEATURE 1 : Have a way to count donuts.', () => {
    it('should have a donutCount of zero with no click.', () => {
      let underTest = new DonutMaker();
      expect(underTest.donutCount).toBe(0);
    });
    it("should have  one donutCount with one click", () => {
      let underTest = new DonutMaker();
      underTest.recordClick();
      expect(underTest.donutCount).toBe(1);

    });
    it("should have two donutCount with two clicks ", () => {
      let underTest = new DonutMaker();
      underTest.recordClick();
      underTest.recordClick();
      expect(underTest.donutCount).toBe(2)
    });

    it("Can retrieve a donut count", () => {
      let underTest = new DonutMaker();

      let donutCount = underTest.retrieveDonutCount();
      expect(donutCount).toBe(0);

    });
  });

  // FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.
  // As a user, I want to be able to purchase Auto Clickers, so that I don't have to keep clicking a button all day.

  // Can retrieve an Auto Clicker count.
  // Can add to the Auto Clicker count.
  // Subtract the Auto Clicker cost from your donut count.



  describe("FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count", () => {
    let underTest;

    beforeEach(() => {
      underTest = new DonutMaker();
      for (let i = 0; i < 100; i++) {
        underTest.recordClick();
      }
    });


  describe('Can retrieve an Auto Clicker count and can add to the Auto Clicker count.', () => {
    it('should have an Auto Clicker count of zero with no purchases.', () => {
      expect(underTest.autoClickerCount).toBe(0);
    });

    it('should have an Auto Clicker count of one with one purchase.', () => {
      underTest.purchaseAutoClicker();
      expect(underTest.autoClickerCount).toBe(0);
    });

  });

  describe('Subtract the Auto Clicker cost from your donut count.', () => {
    it('should reduce click count by 100 to purchase one Auto Clicker', () => {
      underTest.purchaseAutoClicker();
      expect(underTest.donutCount).toBe(0);
    });

    it('should reduce click count by 200 to purchase tow Auto Clickers', () => {
      underTest.purchaseAutoClicker();
      underTest.purchaseAutoClicker();
      expect(underTest.donutCount).toBe(-101);
    });
    it('should reduce click count by 300 to purchase three Auto Clickers', () => {
      underTest.purchaseAutoClicker();
      underTest.purchaseAutoClicker();
      underTest.purchaseAutoClicker();
      expect(underTest.donutCount).toBe(-203.01);
    });
    describe(" Increase the cost of the second Auto Clicker by an additional ten percent ", () => {
       it(" Increase the cost of every additional Auto Clicker by an additional ten percent.", () => {
   
           underTest.purchaseAutoClicker();
           underTest.purchaseAutoClicker();
          expect(underTest.autoClickerCount).toBe(0);
      
       }); 
    });
      it("Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clickers.",()=>{
          underTest.purchaseAutoClicker();
          expect(underTest.autoClickerCount).toBe(0);
      });
      it("Can retrieve purchase a Auto clickers", () => {
        let underTest = new DonutMaker();
        let purchaseAutoClicker = underTest.retrievePurchaseAutoClicker();
        expect(purchaseAutoClicker).toBe(0);
  
      });
       it("  increase the donut total by the amount of Auto Clickers owned.   " ,()=>{
      underTest.purchaseAutoClicker();
      expect(underTest.donutCount).toBe(0);
       });


    //  let underTest 
    //    underTest = new DonutMaker();
    //    for (let x = 1; x < 100; x++) {
      //    underTest.purchaseAutoClicker()
      //  }
      //  });
 
  // This iteration covers the creation of the Donut Multipliers. The higher your Donut Multipliers count, the more donuts you earn with each click.

  // FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.
  // As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.
  
  // Can retrieve a Donut Multiplier count.
  // Can add to the Donut Multiplier count.
  // Subtract the amount of the Donut Multiplier cost from the donut count.
describe("FEATURE 3 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.",()=>{
  it("should purchase  the first Donut Multiplier with 10 clicks from your click count ", () => {
    let underTest = new DonutMaker();
    underTest.recordClick(10);
    expect(underTest.donutCount).toBe(1);
});
it("should purchase the second   Donut Multiplier with 20 clicks from your  2 click count ", () => {
  let underTest = new DonutMaker();
  underTest.recordClick(20);
  expect(underTest.donutCount).toBe(1);
});
it("should purchase the third   Donut Multiplier with 30 clicks from your 3 click count ", () => {
  let underTest = new DonutMaker();
  underTest.recordClick(20);
  expect(underTest.donutCount).toBe(1);
});
  it('should reduce click count by 1 to purchase 10 Auto Clicker', () => {
    underTest.purchaseAutoClicker();
    expect(underTest.donutCount).toBe(0)
  });
  it('should retrieve a donutMultiplierCount.', () => {
    expect(underTest.donutMultiplierCount).toBe(10);
  });
  it("Prevent the  ClickerCount from going up if there are not enough clicks to purchase a donutMultiplier",()=>{
    underTest.purchaseAutoClicker();
    expect(underTest.donutMultiplierCount).toBe(10); 
});
 it("The first Donut Multiplier should increase the value of a donutCount  1.2x.",()=>{
  underTest.purchaseAutoClicker();
  expect(underTest.donutCount).toBe(0); 
 });

});
describe("FEATURE 5 : The amount the subsequent Donut Multipliers click bonus will go up exponentially." ,()=>{
  it("Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.",()=>{
underTest.retrievePurchaseAutoClicker();
expect(underTest.donutMultiplierCount).toBe(10)
  
});
});

// it("Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.",()=>{
  


// });









});
}); 
}); 

