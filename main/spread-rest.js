// Spread và Rest là cú pháp đặc biệt trong javascript. Chúng đều sử dụng cú pháp là dấu 3 chấm (...) (Three dot) nhưng nó có mục đích và cách sử dụng khác nhau.

// Spread operator
// Spread được sử dụng để copy hoặc mở rộng các phần tử của một mảng hoặc các thuộc tính của một đối tượng. Nó giúp sao chép hoặc kết hợp các mảng và đối tượng mà không thay đổi dữ liệu gốc.

// Cách sử dụng Spread operator

// Sử dụng spread đối với mảng
const ar1 = [1, 2, 3];
const ar2 = [...ar1, 4, 5, 6]; // ar2 = [1, 2, 3, 4, 5, 6]

// Sử dụng spread đối với object (đối tượng)
const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "Hanoi" }; // obj2 = { name: "John", age: 25, city: "Hanoi" }

// Các trường hợp sử dụng phổ biến của spread:

// Kết hợp nhiều mảng thành một mảng.
const arr1 = [1, 2, 3];
const arr2 = [3, 6, 13];
const arr3 = [...arr1,...arr2] // arr3 = [1, 2, 3, 3 ,6, 13]

// Sao chép một đối tượng hoặc một mảng mà không thay đổi bản gốc (deep copy).
const arrr1 = [1, 2, 3];
const arrr2 = arr1;
const arrr3 = [1, 2, 3];
const arrr4 = [...arr3];
arrr2.push(5);
arrr4.push(5);
console.log(arrr1); // [1,2,3,5]
console.log(arrr2); // [1,2,3,5]
console.log(arrr3); // [1,2,3]
console.log(arrr4); // [1,2,3,5]

// Truyền các phần tử của một mảng làm tham số cho một hàm.
function sum(x, y, z) {
return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Rest Parameters
// Rest được sử dụng để gom các phần tử còn lại thành một mảng. Nó thường xuất hiện trong các tham số hàm khi không biết trước số lượng tham số sẽ được truyền vào, hoặc để lấy phần còn lại của các thuộc tính đối tượng hoặc mảng.

// Cách sử dụng Rest Parameters đối với hàm
function sum(...numbers) {
var total= 0;
for (var i=0;i<numbers.length; i++)
{
total+=numbers[i]
}
return total;
}
console.log(sum(1, 2, 3, 4)); // Output: 10
// Cách sử dụng Rest Parameters đối với Destructuring
