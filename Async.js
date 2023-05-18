//https://www.youtube.com/watch?v=QSqc6MMS6Fk&ab_channel=ColorCode

function orderPizza (callback) {
    setTimeout(() => {
        const pizza = 'Yum'
        callback(pizza) //'passing' the pizza variable as an argument 
    }, 2000)
}

function pizzaReady(pizza){ //'takes' the pizza parameter  //receiving the pizza parameter
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady) //Here, the orderPizza function is called, and the pizzaReady function is passed as the callback. This means
                      // that when the pizza is ready (after the 2-second timeout), the pizzaReady function will be invoked with the 'Yum' pizza as an argument.
console.log('Call Qoli')
