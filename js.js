let user = {};
user.name = "max";
user.age = 23;
user.city = "Odessa";

console.log(user);

delete user.city;
user["like flowers"] = true;
console.log(user);
