describe('have a way to count donuts.', () => {


  describe('can add to donut count:', () => {
    let underTest;
    beforeEach(() => {
      underTest = new DonutMaker;
    });

    it('should start with a click count of 0.', () => {
      const underTest = new DonutMaker();
      expect(underTest.clickCount).toBe(0);
    });
    it('should add one click to click to the click count when it records a click.', () => {
      //const underTest = new DonutMaker();
      underTest.recordClick();
      expect(underTest.clickCount).toBe(1);
    });
    it('should have a click count of 2 when it records2 clicks.', () => {
      underTest.recordClick();
      underTest.recordClick();
      expect(underTest.clickCount).toBe(2);
    });


   // describe("can retrieve auto clicker count", () => {

      //underTest = new DonutMaker();
     // it("should be abel to retrieve a auto clicker count", () => {
       // let autoClickerCount = underTest.retrieveAutoClickerCount();
       //  expect(autoClickerCount).toBe(0);
    //  });
      /*it("should be abel to retrieve a auto clicker count", () => {
        let autoClickerCount= underTest.retrieveAutoClickerCount();
         expect(autoClickerCount).toBe(1);

      });
      it("should be abel to retrieve a auto clicker count", () => {
        let autoClickerCount= underTest.autoClickerCount;
         expect(autoClickerCount).toBe(2);
      }); 
*/

       
    describe('can  purchase Auto Clicker  from your donut count', () => {
         it("purchase the first Auto Clicker with 100 donuts from  donut count", () => {
          underTest.addAutoClicker();
          let donutCount = underTest.autoClickerTotal(); 
          expect(autoClickerTotal).toBe(100);
      });

      it("should be abel to retrieve a auto clicker count", () => {
        let autoClickerCount = underTest.retrieveAutoClickerCount();
         expect(autoClickerCount).toBe(0);
      });
      it("Subtract the Auto Clicker cost from your donut count.", () => {
      underTest.addAutoClicker();
      underTest.substractAutoClickerCost();
     let donutCount = underTest.autoClickerTotal(); 
     expect(autoClickerTotal).toBe(0);
     });
  describe("The cost of each Auto Clicker will go up with each purchase",()  =>{
    it("Increase the cost of the second Auto Clicker by an additional ten percen", () => {
      underTest.addAutoClicker();
      underTest.addAutoClicker();
      underTest. percentage ();
      let donutCount = underTest.autoClickerTotal(); 
      expect(autoClickerCount).toBe(210);
  });
});

});
});
});







       
// it( "Increase the cost of the second Auto Clicker by an additional ten percent.",() =>{
//          underTest.addAutoClickerCount();
//          underTest.addAutoClickerCount();
//          expect(autoClickerTotal).toBe();


// it( "Increase the cost of the second Auto Clicker by an additional ten percent.",() =>{
//   underTest.addAutoClicker(100);
//   underTest.addAutoClicker(110);
//   //underTest.autoClickerCost();
//   let donutCount = underTest.autoClickerTotal();
//   expect(donutCount).toBe();

// });




//         it("Can retrieve an Auto Clicker count", () => {

//           let autoClickerCount = underTest.RetriveAutoClickerAount();
//           expect(autoClickerCount).toBe(0);

//         });

// it("Subtract the Auto Clicker cost from your donut count",() =>{
// underTest=new donutCount();
// let donutCount = underTest.substractAutoClickere(0);
// expect(donutCount).toBe(0);//

// });
//       });