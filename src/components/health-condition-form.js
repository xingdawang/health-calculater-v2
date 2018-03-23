import React from 'react'
import { Field, reduxForm } from 'redux-form'

let HealthConditionForm = props => {

	const { handleSubmit } = props

	return (
		<div className = "health-condition-form">
			<form className="form-horizontal" onSubmit = { handleSubmit } >
				{ window.location.pathname === '/bmi' ? '' :
					<div className = "form-group">
						<label className="col-sm-2 control-label">Date of Birth (MM/DD/YYYY): </label>
						<div className="col-sm-10">
							<Field
								name = "dateOfBirth"
								class = "form-control"
								component = "input"
								type = "date"
								placeholder = "date"
							/>
						</div>
					</div>
				}
				<div className = "form-group">
					<label className="col-sm-2 control-label">Height (cm): </label>
					<div className="col-sm-10">
						<Field
							name = "height"
							class = "form-control"
							component = "input"
							type = "number"
							placeholder = "cm"
						/>
					</div>
				</div>
				<div className = "form-group">
					<label className="col-sm-2 control-label">Weight (Kg): </label>
					<div className="col-sm-10">
						<Field
							name = "weight"
							class = "form-control"
							component = "input"
							type = "number"
							placeholder = "Kg"
						/>
					</div>
				</div>
				{ window.location.pathname === '/bmi' ? '' :
					<div className="form-group">
						<label className="col-sm-2 control-label"> Gender: </label>
						<div className="col-sm-10">
							<label className = "radio-inline">
								<Field name = "gender" component = "input" type = "radio" value = "male" /> {' '} Male
							</label>
							<label className = "radio-inline">
								<Field name = "gender" component = "input" type = "radio" value = "female" /> {' '} Female
							</label>
						</div>
					</div>
				}
				<div className = "form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" className="btn btn-default">Submit</button>
					</div>
				</div>
			</form>
		</div>
	)
}

HealthConditionForm = reduxForm({
	// a unique name for the form
	form: 'HealthConditionForm'
})(HealthConditionForm)

export default HealthConditionForm
