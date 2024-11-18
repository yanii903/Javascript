//map: đối tượng lưu trữ js -> lưu theo cặp key - value
// const map = new Map();

//- thêm cặp giá trị: map.set(key, value)
// map.set("name", "Quân");
// map.set("age", 19);
// map.set("address", "Hà Nội");
// console.log(map);
// //- xóa cặp giá trị: map.delete(key)
// map.delete("address");
// console.log(map);
//xóa toàn bộ: map.clear()
// map.clear()
// console.log(map)

//lấy giá trị map thông qua key: map.get(key) - nếu không tồn tại trả về undefine
// const myName = map.get("name");
// console.log(myName);

//duyệt map bằng for

// for (item of map) {
//   console.log(item);
// }

// for (item of map) {
//   alert(item);
// }

//kiểm tra key có trong map hay không: map.has(key) -> trả về true || false
// console.log(map.has("address"));

//kiểm tra số lượng cặp key-value trong map: map.size()
// console.log(map.size); //output = 2 vì delete address

//Ứng Dụng

// var answer = new Map();
// while (Number(input) !== 64) {
//   var input = prompt(`
//         Việt Nam có bao nhiêu tỉnh thành?
//         50 Tỉnh
//         60 Tỉnh
//         64 Tỉnh
//         80 Tỉnh
//         Nhập Đáp Án Là Số Tỉnh Vào Input
//         `);
//   answer.set(50, "Chưa Tài Đâu Em");
//   answer.set(60, "Chưa Tài Đâu Em");
//   answer.set(64, "Tài Rồi Em");
//   answer.set(80, "Chưa Tài Đâu Em");
//   alert(answer.get(Number(input))) ?? "Không có đáp án";
// }

//tham số mạc định (default parameter)
// function tinhTong(a, b = 0) {
//   return console.log(a + b);
// }

//gọi hàm

// tinhTong(5); //nếu truyền 1 tham số thì b sẽ nhận giá trị mạc định là 0

//arrow function
// const tinh_Tong = (a, b = 0) => {
//   return console.log(a + b);
// };

//hoặc
// const tong = (a, b = 0) => console.log(a + b);
// tong(4, 3);
// var chuvi = r => console.log(r * 2 * 3.14);
// console.log(3);

//IIFE: ((Tham Số) => todo,console.log())(Tham Số Truyền Vào)
// (r => console.log(r*2*3.14))(5)

//hàm callback: hàm đóng vai trò là tham số của hàm.
var tinhtong = (a, b = 0) => a + b;

var display = (a, b, callbackFn) => {
  console.log(`Tổng ${a}+${b}=${callbackFn(a, b)}`);
};
display(5, 10, tinhtong);
//hàm return hàm

//tính thể tích khối lập phương
var theTich = (dai, rong) => {
  var dienTich = dai * rong;
  return (cao) => {
    console.log(`Thể tích khối lập phương là: ${dienTich*cao}`);
  };
};
theTich(10,5)(5)