// resolve only accepts a single argument
function placeOrder(food) {
  let orderId = 0;
  return new Promise(function (resolve, reject) {
    if (food == "veg") {
      ++orderId;
      setTimeout(() => {
        resolve({ message: "Order accepted", orderId: orderId });
      }, 3000);
    } else {
      reject("Sorry, we only serve veg food");
    }
  });
}

function processFood(orderId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`Food is ready for orderID ${orderId}`);
    }, 3000);
  });
}

// const order = placeOrder("veg");
// console.log(order);

// order.then((obj) => {
//   console.log(obj.message);
//   const processedFood = processFood(obj.orderId);
//   processedFood.then((message) => {
//     console.log(message);
//   });
// });

// order
//   .then((obj) => {
//     console.log(obj.message);
//     const processedFood = processFood(obj.orderId);
//     return processedFood;
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((errMessage) => {
//     console.log(errMessage);
//   });

async function serve() {
  try {
    const obj = await placeOrder("non-veg");
    console.log(obj.message);
    const processedFood = await processFood(obj.orderId);
    console.log(processedFood);
  } catch (err) {
    console.log(err);
  }
}
serve();
