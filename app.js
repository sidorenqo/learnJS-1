// Модификация строк в массив и обратно.
let roles = ["user", "admin", "manager", "superuser"];

const url = "auth/user/admin";
const res = url.split("/");
console.log(res);

console.log(roles.join("-"));
