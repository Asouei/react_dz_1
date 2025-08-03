import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement } from 'react';

function App() {

	// Императивный: задаём переменную напрямую
	const [count, setCount] = useState(0)
	const year = new Date().getFullYear()

  return (

		createElement(
			React.Fragment,
			null,
			createElement(
				"div",
				null,
				createElement(
					"a",
					{
						href:"https://vite.dev",
						target: "_blank",
					},
					createElement(
						"img",
						{
							src: viteLogo,
							alt: "Vite logo",
							className: "logo",
						}
					)
				),
				createElement(
					"a",
					{
						href:"https://react.dev",
						target: "_blank",
					},
					createElement(
						"img",
						{
							src: reactLogo,
							alt: "React logo",
							className: "logo react",
						}
					)
				)
			),
			createElement(
				'h1',
				{
					textContent: "Vite + React",
				}
			),
			createElement(
				"div",
				{
					className: "card",
				},
				createElement(
					"button",
					{
						onClick: () => setCount((c) => c + 1),
						textContent: `count is ${count}`,
					}
				),
				createElement(
					"p",
					{
						textContent: "Edit <code>src/App.jsx</code> and save to test HMR",
					}
				)
			),
			createElement(
				"p",
				{
					textContent: "Click on the Vite and React logos to learn more",
					className: "read-the-docs",
				}
			),
			createElement(
				"p",
				{
					textContent: `${year}`,
					className: "read-the-docs",
				}

			),
		)
	)}



export default App
