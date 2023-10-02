new Promise((function(o,n){var e=Math.random()>.5;setTimeout((function(){e?o("Your food"):n("your food is not ready")}),1e3)})).then((function(o){console.log("onMakeOrderSuccess"),console.log(o)})).catch((function(o){console.log("onMakeOrderError"),console.log(o)})),console.log(10),console.log(20),console.log(30),console.log(40);
//# sourceMappingURL=03-promises.6a61de0c.js.map
