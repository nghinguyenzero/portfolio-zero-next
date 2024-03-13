---
slug: react-hooks
title: React - Các hooks trong react 🎉
author: ZERO
author_title: Frontend developer
author_url: https://github.com/nghinguyenzero
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
tags: [react,hook, lifecycle ]
date: '2022-06-18T10:00:00Z'
image: https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80
---

Hooks - Tính năng mới trong React từ phiên bản 16.8 trở lên, cho phép sử dụng state trong functional components. 🤔 Hãy cùng mình khám phá qua bài blog này nhé! 😉

<!-- truncate-->

## Agenda III


## 1. useEffect

- Side effects
    
    Gọi API lấy dữ liệu.
    Tương tác với DOM.
    Subscriptions.
    setTimeout, setInterval.
    
    - Effects không cần clean up: gọi API, tương tác DOM
    - Effects cần clean up: subscriptions, setTimeout, setInterval.
- useEffect
    
    ```jsx
    // callback: Your side effect function
    // dependencies: Only execute callback if one of your dependencies changes
    function useEffect(callback, dependencies) {}
    ```
    
    - Side effect và clean up (optional)
    - Được thực thi sau mỗi lần render.
    - Được thực thi ít nhất một lần sau lần render đầu tiên.
    - Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi.
    - Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount.
- Flow
    
    **MOUNTING**
    
    - *rendering*
    - *run useEffect()*
    
    **UPDATING**
    
    - *rendering*
    - *run `useEffect() cleanup` nếu dependencies thay đổi.*
    - *run `useEffect()` nếu dependencies thay đổi.*
    
    **UNMOUNTING**
    
    - *run `useEffect() cleanup`*.
- useEffect() kèm điều kiện
    
    ```jsx
    function App() {
    const [filters, setFilters] = useState();
    useEffect(() => {
    // EVERY
    // No dependencies defined
    // Always execute after every render
    return () => {
    // Execute before the next effect or unmount.
    };
    });
    
    useEffect(() => {
    // ONCE
    // Empty dependencies
    // Only execute once after the FIRST RENDER
    return () => {
    // Execute once when unmount
    };
    }, []);
    useEffect(() => {
    // On demand
    // Has dependencies
    // Only execute after the first RENDER or filters state changes
    return () => {
    // Execute before the next effect or unmount.
    };
    }, [filters]);
    }
    ```
    
- useEffect() không có cleanup
    
    ```jsx
    function App() {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
    async function fetchData() {
    try {
    // TODO: Should split into a separated api file instead of using
    fetch directly
    const queryParamsString = queryString.stringify();
    const requestUrl = `http://js-post-api.herokuapp.com/api/posts?
    _limit=10`;
    const response = await fetch(requestUrl);
    const responseJSON = await response.json();
    const { data, pagination } = responseJSON;
    console.log({ data, pagination });
    setPostList(data);
    } catch (error) {
    console.log('Failed to fetch posts: ', error.message);
    }
    }
    fetchData();
    }, []);
    return <div>Post list length: {postList.length}</div>;
    }
    ```


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

## 2. useRef
Được sử dụng để tạo một tham chiếu đến một phần tử DOM hoặc một giá trị khác trong các component function

Cho phép chúng ta lưu trữ và truy cập vào giá trị của một biến mà không gây render lại component khi giá trị thay đổi.

```jsx
// Lưu các giá trị qua 1 giá trị bên ngoài

const previousCount = useRef()
useEffect(()=>{
	previousCount.current = count  // Các lấy giá trị trước đóc của state count
}, count)
```

## 3. useReducer 
Cho phép bạn quản lý trạng thái của một component bằng cách sử dụng mô hình reducer pattern. Mô hình này thường được sử dụng để quản lý trạng thái phức tạp hoặc khi bạn cần thực hiện các logic cập nhật trạng thái phức tạp hơn.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

```jsx

import React, { useReducer } from 'react';

// Khởi tạo initial state
const initialState = {
  count: 0
};

// Hàm reducer xử lý các action để thay đổi trạng thái
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Component sử dụng useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## 4. useContext 
- `useContext`
    
    hook được sử dụng để truy cập vào giá trị của một Context trong functional components. Context là một cách để truyền dữ liệu xuống từ component cha đến các component con mà không cần truyền props qua nhiều cấp component
    
    ```jsx
    
    import React, { createContext, useContext } from 'react';
    
    // Khởi tạo một Context
    const MyContext = createContext();
    
    // Component cha cung cấp giá trị cho Context
    function ParentComponent() {
      return (
        <MyContext.Provider value="Hello from Context">
          <ChildComponent />
        </MyContext.Provider>
      );
    }
    
    // Component con sử dụng giá trị từ Context bằng cách sử dụng useContext
    function ChildComponent() {
      const valueFromContext = useContext(MyContext);
      return <p>{valueFromContext}</p>;
    }
    
    export default ParentComponent;
    ```
    

Cho phép bạn quản lý trạng thái của một component bằng cách sử dụng mô hình reducer pattern. Mô hình này thường được sử dụng để quản lý trạng thái phức tạp hoặc khi bạn cần thực hiện các logic cập nhật trạng thái phức tạp hơn.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

```jsx

import React, { useReducer } from 'react';

// Khởi tạo initial state
const initialState = {
  count: 0
};

// Hàm reducer xử lý các action để thay đổi trạng thái
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Component sử dụng useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```
## 6. useLayoutEffect

```jsx
//. useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
```

## 7. useReducer

Cho phép bạn quản lý trạng thái của một component bằng cách sử dụng mô hình reducer pattern. Mô hình này thường được sử dụng để quản lý trạng thái phức tạp hoặc khi bạn cần thực hiện các logic cập nhật trạng thái phức tạp hơn.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

```jsx

import React, { useReducer } from 'react';

// Khởi tạo initial state
const initialState = {
  count: 0
};

// Hàm reducer xử lý các action để thay đổi trạng thái
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Component sử dụng useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## 8. useImperativeHandle 

Sử dụng để tùy chỉnh các thao tác imperatively (một cách trực tiếp, không thông qua props) trên một ref được truy cập từ một component cha. Nó cho phép bạn chỉ định các phương thức hoặc thuộc tính mà một component con sẽ "expose" (tiếp xúc ra bên ngoài) cho component cha.

```jsx

import React, { createContext, useContext } from 'react';

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Component con sử dụng useImperativeHandle để expose phương thức increaseCounter
const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = React.useState(0);

  // Ref được truy cập từ component cha
  useImperativeHandle(ref, () => ({
    increaseCounter() {
      setCount(count + 1);
    }
  }));

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
});

// Component cha sử dụng ChildComponent và truy cập vào phương thức increaseCounter của nó
function ParentComponent() {
  const childRef = useRef(null);

  function handleButtonClick() {
    childRef.current.increaseCounter();
  }

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Increase Counter</button>
    </div>
  );
}

export default ParentComponent;
```
## 9. useCallback
Giúp mình tạo ra một memoized callback và chỉ tạo ra callback mới khi
dependencies thay đổi.

Nhận vào 2 tham số: 1 là function, 2 là dependencies.
Return memoized callback
Chỉ tạo ra function mới khi dependencies thay đổi.
Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.

```jsx
// Mỗi lần App re-render
// --> tạo ra một function mới
// --> Chart bị re-render
function App() {
const handleChartTypeChange = (type) => {}
return <Chart onTypeChange={handleChartTypeChange} />;
}

// Mỗi lần App re-render
// --> nhờ có useCallback() nó chỉ tạo function một lần đầu
// --> Nên Chart ko bị re-render.
function App() {
const handleChartTypeChange = useCallback((type) => {}, [])
return <Chart onTypeChange={handleChartTypeChange} />;
}
```
## 10. useMemo

Giúp mình tạo ra một memoized value và chỉ tính toán ra value mới khi dependencies thay đổi.
Nhận vào 2 tham số: 1 là function, 2 là dependencies.
Return memoized value
Chỉ tính toán value mới khi dependencies thay đổi.
Nếu dùng empty dependencies thì không bao giờ tính toán lại value mới.

```jsx
// Mỗi lần App re-render
// --> tạo ra một mảng mới
// --> Chart bị re-render do props thay đổi
function App() {
const data = [{}, {}, {}];
return <Chart data={data} />;
}

// Mỗi lần App re-render
// --> nhờ có useMemo() nó chỉ tạo ra cái mảng 1 lần đầu
// --> Nên Chart ko bị re-render.
function App() {
const data = useMemo(() => [{}, {}, {}], [])
return <Chart data={data} />;
}
```
Cảm ơn cả nhà đã xem đến cuối! ❤️