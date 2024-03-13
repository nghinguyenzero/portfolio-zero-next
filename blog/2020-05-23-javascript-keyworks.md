---
slug: javascript-keywords
title: Javascript - Và các khái niệm quan trọng 🎉
author: ZERO
author_title: Frontend developer
author_url: https://github.com/nghinguyenzero
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
tags: [git, git trong dự án thực tế]
date: '2022-06-18T10:00:00Z'
image: https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80
---

Khi bắt đầu với ngôn ngữ lập trình Javascript chúng ta sẽ phải nắm một vài khái niệm và keywords quan trọng, khi hiểu rõ chúng thì việc học sẽ trở nên dễ dàng hơn? 🤔 Hãy cùng mình khám phá qua bài blog này nhé! 😉

<!-- truncate-->

## Agenda III


## 1. This

```js[class="line-numbers"]
function Car(name, color) {
	this.name = name
	this.color = color
}
Car.prototype.run = function () {
	// Context
	function test() {
		console.log (this) // this là window
	// test là func chứ ko phaải method => THIS trong func là window
	}
	test()

	const testArrowFunc = () => {
		console.log (this) // => this là Car
	//arrow function không có context nên nó lâấy context cuủa cha 
	}
	testArrowFunc()

}
const porsche = new Car('Porsche', 'yellow')
console.log(porsche.run())
```

- `This` trong `Javascript` đề cập đến đối tượng mà nó thuộc về
- Trong 1 method, this tham chiếu đến đối tượng  truy cập đến phương thức.
- Đứng ngoài method, this tham chiếu đến đối tượng global
- This trong hàm tạo là đại diện cho đối tượng được tạo
- This trong 1 hàm là undefined khi strict mode
- Các method call(), bind(), apply() có thể tham chiếu this tới đối tượng khác

## 2. Closure

- A func có thể ghi nhớ nơi nó được tạo ra và access được biến ở bên ngoài phạm vi của nó


```js[class="line-numbers"]
function createStore() {
	let car=[]
	return {
		show() {
			console.log(car)
		}	
	}
}

const app = createStore()

app.show()

//gán createStore cho 1 biến app global, thì khi hàm createStore() được thực thi xong
// giá trị cuủa biêến car vẫn chưa bị xoá
```

## 3. Scope 

- Global
    - Tạo biến và hàm không nằm trong phạm vi khối và phạm vi hàm khác
    - có thể truy cập đc ở bất kì đâu
    - Biến Global chỉ được xoá khi tắt app
- Code  block (let, const)
    - Tạo biến và hàm nằm trong ⇒ { // code block}
    - chỉ truy cập được bên trong khối mã
- Local  scope (var, func)
    - Khai báo biến hoặc hàm bên trong 1 hàm cha, thì chỉ có thể sử dụng biến và hàm đó trong phạm vi hàm cha
**📝LƯU Ý**
Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra    
Biến trong 1 hàm tham chiếu bời 1 hàm


```js[class="line-numbers"]
function makeCouter() {
let couter=0
function increase() {
	return ++couter
}
	return increase
}
const increase1= makeCouter()
console.log(increase1()) // 1
console.log(increase1())  //2
console.(log(increase1()) //3
// Biến couter chưa được xoá khỏi bộ nhớ
// couter bên trong increate vẫn còn refer đến couter bên trong hàm 
// makeCouter và makeCouter đã được lưu ở biến bên ngoài
```

## 4. IIFE 

- Immediately Invoked Function Expression
- Đây là một biểu thức hàm (function expression) được gọi ngay lập tức sau khi được định nghĩa
- IIFE là 1 hàm “private” (không truy cập dc ở ngoài, nếu đặt tên thì có thể tự gọi lại nó trong hàm và có thể gọi đệ quy)
- Library dc viết bằng IIFE (IIFE chạy ngay và tạo ra 1 phạm vi mới những code bên trong không ảnh hưởng đến dự án gốc)
```js[class="line-numbers"]
(function() {
    // code trong này sẽ được thực thi ngay khi hàm được định nghĩa
})();

(()=> {
    // code trong này sẽ được thực thi ngay khi hàm được định nghĩa
})()

;(()=> {
    // Nếu mà phía trước không dùng ';' để kết thúc dòng  
		// thì nên đặt ';' ở đầu IIFE để tránh gây lỗi
})();

!function() {
    // code trong này sẽ được thực thi ngay khi hàm được định nghĩa
}();
```
## 6. Asynchronous
- `Promise`
    
    Là một cơ chế để xử lý các tác vụ bất đồng bộ, có 3 trạng thái:
    
    1. **Pending (Chờ đợi):** Trạng thái ban đầu khi Promise được tạo, và nó chưa được giải quyết hoặc bị từ chối.
    2. **Fulfilled (Hoàn thành):** Khi tác vụ bất đồng bộ hoàn thành thành công.
    3. **Rejected (Bị từ chối):** Khi tác vụ bất đồng bộ không thành công.
```js[class="line-numbers"]
// Tạo một Promise
let myPromise = new Promise((resolve, reject) => {
    // Thực hiện một tác vụ bất đồng bộ
    setTimeout(() => {
        // Giả sử tác vụ này thành công sau 2 giây
        let randomNum = Math.random();
        if (randomNum >= 0.5) {
            resolve(randomNum); // Giải quyết Promise nếu thành công
        } else {
            reject("Tác vụ thất bại"); // Từ chối Promise nếu không thành công
        }
    }, 2000);
});

// Sử dụng Promise đã tạo
myPromise.then((result) => {
    console.log("Tác vụ hoàn thành, kết quả là: " + result);
}).catch((error) => {
    console.error("Tác vụ bị từ chối với lỗi: " + error);
});
```
- `async` `await`
    - **`async`**: Dùng để định nghĩa một hàm bất đồng bộ. Khi một hàm được khai báo bằng từ khóa **`async`**, nó sẽ luôn trả về một Promise.
    - **`await`**: Được sử dụng trong một hàm được đánh dấu **`async`** để đợi một Promise. **`await`** dừng thực thi của hàm đó cho đến khi Promise được giải quyết hoặc bị từ chối.
```js[class="line-numbers"]
// Hàm bất đồng bộ giả định
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm bất đồng bộ sử dụng async và await
async function asyncFunction() {
    console.log("Bắt đầu");
    try {
        await delay(2000); // Chờ 2 giây
        console.log("Đã chờ xong 2 giây");
        await delay(1500); // Chờ thêm 1.5 giây
        console.log("Đã chờ xong 1.5 giây nữa");
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
    console.log("Kết thúc");
}

// Gọi hàm async
asyncFunction();
```

Cảm ơn cả nhà đã xem đến cuối! ❤️