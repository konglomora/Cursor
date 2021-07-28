import React from 'react'

const Student = ({ name, tasks }) => {
	const color = true
	const green = 'green'
	const red = 'red'

	const colorName = color ? red : green

	return (
		<div>
			<h3>Name: {name}</h3>
			<p className={colorName}>Completed homeworks: {tasks}</p>
		</div>
	)
}
export default Student
