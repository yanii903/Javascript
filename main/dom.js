//1 số các các truy cập phần từ bằng dom

var n = document.getElementsByClassName("number");
console.log(n);

//tạo mới 1 element
var newEle = document.createElement("a");
newEle.href = "https://www.google.com/";
newEle.innerText = "Bấm Đi";
//-- Insert element vào phần tử

// addpro.appendChild(newEle)

//tip
//xem phần từ có những thuộc tính nào

// console.dir(newEle);
// newEle.innerHTML = `<img src="">`

//bắt sự kiện trên DOM. sử dụng addEventListener
// var submitbtn = document.getElementsByTagName("button")[0];
// console.log(submitbtn);

// console.dir(submitbtn);
// submitbtn.addEventListener("click", () => {
//   alert("Bạn vừa click!");
// });

// submitbtn.addEventListener("mouseenter", () => {
//   alert("Bạn vừa di chuột vào!");
//   console.log("Bạn vừa di chuột vào!");
// });

// submitbtn.addEventListener("mouseleave", () => {
//   alert("Bạn vừa di chuột ra!");
//   console.log("Bạn vừa di chuột ra!");
// });

setTimeout(() => {
  console.log(1);
}, 1000);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(3);
}, 500);

//callback hell
//ES6 (ECMA2015) => promise
//cú pháp
// const promise = new Promise((resolve, reject) => {
//     //todo
//     resolve(value)//nếu việc xử lý không có vấn đề gì
//     //reject(Giá trị nào đó) //nếu lỗi
// });

//xử lý promise
//có 2 cách tương ứng với promise hay reject
//nếu resolve thì dùng then để lấy dữ liệu
//nếu reject thì dùng catch để bắt lỗi

//VD: với trường hợp bên trên xử lý bằng promise
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
    })
})