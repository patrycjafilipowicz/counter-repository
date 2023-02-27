import "./App.css";
import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='app'>
			<div className='appName'>
				<h1>Counter app</h1>
			</div>
			<div className='count'>
				<h1>{count}</h1>
			</div>
			<div className='button-wrapper'>
				<div className='button1'>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
				<div className='button2'>
					<button onClick={() => setCount(count - 1)}>-</button>
				</div>
			</div>
		</div>
	);
}

export default App;
