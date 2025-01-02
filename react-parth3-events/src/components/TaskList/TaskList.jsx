import { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {
	render() {
		const { todos, onDeleted, onToggleDone, onEditTask, changeTask } =
			this.props
		const elements = todos.map(item => {
			const { id } = item
			return (
				<Task
					key={id}
					{...item}
					onDeleted={event => onDeleted(id, event)}
					onToggleDone={event => onToggleDone(id, event)}
					onEditTask={event => onEditTask(id, event)}
					changeTask={event => changeTask(id, event, event.target.value)}
				/>
			)
		})
		return <ul className='todo-list'>{elements}</ul>
	}
}
