export default function Task({description, created}) {
    return (
			<>
				<div className='view'>
					<input className='toggle' type='checkbox' />
					<label>
						<span className='description'>{description}</span>
						<span className='created'>{created}</span>
					</label>
					<button className='icon icon-edit'></button>
					<button className='icon icon-destroy'></button>
				</div>
        <input type="text" className="edit" value="Editing task"></input>
			</>
		)
  }

