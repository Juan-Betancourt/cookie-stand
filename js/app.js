'use strict';

var timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeStore = {
    minimumCustomers: 23,
    maxCustomers: 65,
    averageCookies: 6.3,
    randomCustomers: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
    },
    customersPerHour: [],
    fillCustomersArray: function() {

        for (var i = 0; i < timeArr.length; i++) {
            this.customersPerHour[i] = this.randomCustomers()
        }
        var sum = 0;
        totalPrintOutTime: (sum += timeArr[i]);

    }


}

pikeStore.fillCustomersArray()
console.log(pikeStore.customersPerHour)
console.log(totalPrintOutTime)






/*Place the times
Create a for loop 14 times calling the randomCustomer function and push the result into customersPerHour.*/

/* I need to build an object that stores the min/max hourly for customers.
Use an array with a loop.
Another Array is required. 
Display the Array as an UL in the browser.
Something to calculate the sum.*/