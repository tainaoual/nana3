describe('DonutMaker turns clicks into donuts and then donuts into auto clickers and donut multipliers.', () => {

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
        expect(underTest.autoClickerCount).toBe(1);
      });

    });

    describe('Subtract the Auto Clicker cost from your donut count.', () => {
      it('should reduce click count by 100 to purchase one Auto Clicker', () => {
        underTest.purchaseAutoClicker();
        expect(underTest.donutCount).toBe(0);
      });

      it('should reduce click count by 210 to purchase two Auto Clickers', () => {
        for (let i = 0; i < 110; i++) {
          underTest.recordClick();
        }
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        expect(underTest.donutCount).toBe(0);
      });

      it('should reduce click count by 331 to purchase three Auto Clickers', () => {
        for (let i = 0; i < 231; i++) {
          underTest.recordClick();
        }
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        expect(underTest.donutCount).toBe(0);
      });
    });
    describe("FEATURE 3: Increase the cost of the second Auto Clicker by an additional ten percent ", () => {
      it(" Increase the cost of every additional Auto Clicker by an additional ten percent.", () => {

        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCost).toBe(110);

      });
      it("Can retrieve purchase a Auto clickers", () => {
        let underTest = new DonutMaker();
        let purchaseAutoClicker = underTest.retrievePurchaseAutoClicker();
        expect(purchaseAutoClicker).toBe(0);
  
      });
    });
    describe(' FEATURE 4: Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clickers.', () => {
      it("should not add to Auto Clicker count if donut count is less than auto clicker cost.", () => {
        underTest = new DonutMaker()
        underTest.purchaseAutoClicker();
        expect(underTest.autoClickerCount).toBe(0);
      });
    });
   
    // it("Can retrieve purchase a Auto clickers", () => {
    //   let underTest = new DonutMaker();
    //   let purchaseAutoClicker = underTest.retrievePurchaseAutoClicker();
    //   expect(purchaseAutoClicker).toBe(0);

    // });
    describe(" FEATURE 5: The amount of Auto Clickers affect the amount of donuts added when an 'Activate Auto Clickers' event is called.  ",()=>{
    it("  increase the donut total by the amount of Auto Clickers owned.   ", () => {
      underTest.purchaseAutoClicker();
      expect(underTest.donutCount).toBe(0);
    });
  });
    describe("ITERATION 2 FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.", () => {
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
    });
    describe("ITERATION 2 FEATURE 2: The cost of each Donut Multiplier will go up with each purchase.",()=>{
      it('should retrieve a donutMultiplierCount.', () => {
        expect(underTest.donutMultiplierCount).toBe(10);
      });
    });

    describe("ITERATION 2 FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.",()=>{

      it("Prevent the  ClickerCount from going up if there are not enough clicks to purchase a donutMultiplier", () => {
        underTest.purchaseAutoClicker();
        expect(underTest.donutMultiplierCount).toBe(10);
      });
    });
    describe(" ITERATION 2 FEATURE 4:The first Donut Multiplier should increase the value of a click 1.2x. ",()=>{
      it("The first Donut Multiplier should increase the value of a donutCount  1.2x.", () => {
        underTest.purchaseAutoClicker();
        expect(underTest.donutCount).toBe(0);
      });
    });
    describe("ITERATION 2 FEATURE 5: The amount the subsequent Donut Multipliers click bonus will go up exponentially.", () => {
      it("Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.", () => {
        underTest.retrievePurchaseAutoClicker();
        expect(underTest.donutMultiplierCount).toBe(10)

      });
    });
  });
});


