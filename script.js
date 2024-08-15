const whatCentury = (year) => {
    var century = Math.ceil(year / 100);
    
    /* How it works
        console.log("year input = " + year);
        console.log("year/100 = " + year/100);
        console.log("Math.ceil() rounds 12.34 up to the next whole number: " + Math.ceil(year/100))
        console.log(century);
    */
    
    if (century > 10 && century < 20) return century + "th";

    //console.log("remainder of century % 10 = " + century % 10);

    switch (century % 10) {
      case 1: 
        return century + "st";
      case 2: 
        return century + "nd";
      case 3: 
        return century + "rd";
      default: 
        return century + "th";
    }
};

  

whatCentury(2000);
console.log("________________");

whatCentury(2154);
console.log("________________");

whatCentury(1234);
console.log("________________");

whatCentury(1995);
console.log("________________");

whatCentury(2011);
console.log("________________");

whatCentury(2324);
console.log("________________");
