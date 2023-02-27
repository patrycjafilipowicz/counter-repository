import "./App.css";
import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='app'>
			<div className='appName'>
				
				<p>This app will help you to explore basics of css, html and js.</p>
				<p>This app can be very useful especially for kids.</p>
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
