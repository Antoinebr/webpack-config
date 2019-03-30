exports.sayHi = name => `Hi ${name}`;

exports.sayGoodBye = name => `Goodbye ${name}`;

exports.sayHiLaterOn = howLong => new Promise((resolve, reject) => setTimeout(() => resolve(`Hi after ${howLong} ms`), howLong));

