//Spread và Rest Cú pháp của Js và đều sử dụng dấu ... 
// Spread: sao chép và mở rộng phần tử của mảng hoặc thuộc tính của đối tượng
// const a = [8,9,10]
// const b = [...a,4,78]
// // Đặc điểm: không làm thay đổi mảng gốc
// console.log(a);
// console.log(b);
// const person = {
//     name:"Ngoc",
//     age:20
// }
// const sinhvien = {...person,age:person.age+1}
// console.log(sinhvien);
//Rest đóng vai trò là tham số của hàm Rest Parameter
// arrow function
// const tinhtong = (item1,item2,item3)=>{
//     return item1+item2+item3
// }
// function tinhtong(item1,item2,item3){
//     return item1+item2+item3
// }
//Rest: Gom các giá trị lại thành 1 mảng
// const tinhtong = (...items)=>{
//     let tong =0
//     for (const item of items){
//         tong+=item
//     }
//     return tong
// }
// console.log(tinhtong(4,5,6,8,99,10));
// Short Circuiting
// Falsy value: false, 0, "",null,undefined, NaN
// AND && và OR ||
// const a = "Ngoc"&&"Minh"&&10&&"ABC"
// console.log(a);
// Ứng dụng
// const a = 5
// const b = 7
// const c = 5
// const d = 11
// if (b>a&&c>b&&d>c){
//     console.log(`d là số lớn nhất`);    
// }
// const mess = b>a&&c>b&&d>c&&"d là số lớn nhất"
// console.log(mess)
// Biểu thức OR 
// const a = 0||false||null||undefined
// console.log(a);
// Ứng dụng
// đặt giá trị mặc định cho biến
// function submit(){
//     const input = document.querySelector('input[name=address]').value
//     const address = input||"Hà Nội"
//     console.log(address);    
// }
// // Hđộng giống bthuc OR nhưng chỉ so sánh với null và undefined => Nullish
// const a = null??undefined??"Ngoc"
// console.log(a); //Ngoc
// // Ứng dụng: Đặt giá trị mặc định cho biến hoặc thay cho câu lệnh if với biểu thức so sánh với null hoặc undefined
// const lophoc = [
//     {
//         name:"SV A",
//         address:"Hà Nội"
//     },
//     {
//         name:"SV B",
//         address:"Thái Nguyên"
//     },
//     {
//         name:"SV C"
//     }
// ]
// // // In ra danh sách sinh viên
// for (const sinhvien of lophoc){
//     console.log(`Ten: ${sinhvien.name}- Địa chỉ: ${sinhvien.address??"Chưa xác định"}`);    
// }
// Optional Chaining
// const lophoc = [
//     {
//         name:"SV A",
//         address:{
//             provice:"Thái Nguyên",
//             district:"ABC"
//         }
//     },
//     {
//         address:{
//             provice:"Hà Nội",
//             district:"Cầu Giấy"
//         }
//     },
//     {
//         name:"SV C"
//     }
// ]
// for (const sinhvien of lophoc){
//     console.log(`Ten: ${sinhvien.name}- Địa chỉ: ${sinhvien.address?.provice??"Chưa xác định"}`);    
// }
// Sử dụng phương thức entries trong mảng
// const menu = ["Cơm","Canh","Cá"]
// console.log(`Danh sách món ăn`);
// for (const [stt,tenmon] of menu.entries()){
//     // monan => mảng kết hợp destructuring
//     console.log(`${stt+1}. ${tenmon}`);
    
// }
// Set đối tượng của js để lưu trữ những giá trị là duy nhất (không trùng lặp)
// Khai báo
const set = new Set ()  // Tạo set trống
// hoặc
const set2 = new Set ([7,8,9,4,7,7,8,9])
// Các phương thức và thuộc tính của Set
// - Thêm phần tử vào Set
set.add(8)
set.add(8)
// -Xóa phần tử trong Set
set2.delete(7)
// -Xóa hết
// set2.clear()
// -Kiểm tra phần tử trong Set : set.has(value)
console.log(set);
console.log(set2.has(8));
// - Lấy số lượng ptu trong Set. set.size
console.log(set2.size);
// Đặc điểm của set: Không truy cập trực tiếp được vào phần tử nhưng
// có thể duyệt set bằng for
// Ứng dụng
// - Lọc trùng
// - Kiểm tra phần tử có tồn tại hay không 1 cách nhanh chóng
const banthang = ["A","B","C","A","A"]
// In ra ds các cầu thủ ghi bàn
const setcauthu = new Set(banthang)
console.log(`DS cầu thử ghi bàn`);
for (const cauthu of setcauthu){
    console.log(cauthu);    
}
// Đếm số cầu thủ ghi bàn
console.log("Số cầu thủ ghi bàn: ",setcauthu.size); 
// Tạo mảng mới từ set thông qua spread
const mangcauthu = [...setcauthu]
console.log(mangcauthu);
