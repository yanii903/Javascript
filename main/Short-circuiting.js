const a = false || null || "Yin" || "Yang" || 0;
console.log(a); //Yin vì || nhận giá trị đầu tiên là true

const b = false || null || 0;
console.log(b); // 0 nếu tất cả đều là false thì sẽ nhận giá trị cuối cùng

const c = "yin" && "Hello" && false && 0;
console.log(c); // false vì dấu && nhận giá trị đầu tiên là false

const d = "yin" && "Hello" && "Minh";
console.log(d); // Minh Khi tất cả giá trị không thuộc Falsy Value thì nó sẽ lấy giá trị cuối cùng

let user = { name: "John" };
user && console.log(user.name); // Nếu user là "falsy" (null, undefined), console.log sẽ không được thực hiện.

let name = null;
let defaultName = "yang";
let userName = name ?? defaultName;
console.log(userName); // Output: "Người dùng" (vì name là null)

const Class = [
  {
    name: "A",
    address: {
      provide: "Hà Nội",
      district: "ABC",
    },
  },
];
