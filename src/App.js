import { React, useState } from 'react'
import "./App.css"

export default function App() {
	const [counter, setCounter] = useState(0);

	//increase counter
	const increase = () => {
		setCounter(count => count + 1);
	};

	//decrease counter
	const decrease = () => {
		setCounter(count => count + 2);
		console.log("Таки шо?");
		alert("Таки шо?");
	};

	//reset counter 
	const reset = () => {
		setCounter(0)
	}

	return (
		<div>
			<h1>Занять</h1>
			<span>{counter}</span>
			<div>
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>
				<button onClick={reset}>Сброс</button>
			</div>
		</div>
	);
}