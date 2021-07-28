import './App.css'
import Student from './components/Student'

const students = [
	{
		id: 0,
		name: 'Viktor',
		tasks: 14,
	},
	{
		id: 1,
		name: 'Nikita',
		tasks: 15,
	},
]

function App() {
	return (
		<div className="App">
			{students.map(student => (
				<Student {...student} key={student.id} />
			))}
		</div>
	)
}

export default App
