import React from 'react'
import { Field, reduxForm } from 'redux-form'

let HealthConditionForm = props => {

	const { handleSubmit } = props

	return (
		<form onSubmit = { handleSubmit } >
			{ window.location.pathname === '/bmi' ? '' :
				<div className = "form-group">
					<label>Date of Birth (MM/DD/YYYY): </label>
					<Field
						name = "dateOfBirth"
						component = "input"
						type = "date"
						placeholder = "date"
					/>
				</div>
			}
			<div className = "form-group">
				<label>Height (cm): </label>
				<Field
					name = "height"
					component = "input"
					type = "number"
					placeholder = "cm"
				/>
			</div>
			<div className = "form-group">
				<label>Weight (Kg): </label>
				<Field
					name = "weight"
					component = "input"
					type = "number"
					placeholder = "Kg"
				/>
			</div>
			{ window.location.pathname === '/bmi' ? '' :
				<div className="form-group">
					<label> Gender: </label>
					<div>
						<label>
							<Field name = "gender" component = "input" type = "radio" value = "male" /> {' '} Male
						</label>
						<label>
							<Field name = "gender" component = "input" type = "radio" value = "female" /> {' '} Female
						</label>
					</div>
				</div>
			}
			<div className = "form-group">
				<button type="submit" >Submit</button>
			</div>
		</form>
	)
}

HealthConditionForm = reduxForm({
	// a unique name for the form
	form: 'HealthConditionForm'
})(HealthConditionForm)

export default HealthConditionForm
