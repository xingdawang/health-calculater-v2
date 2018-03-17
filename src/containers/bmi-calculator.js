import React, { Component } from 'react'
import HealthConditionForm from '../components/health-condition-form'
import BMIIndicator from '../components/bmi-indicator'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateHealth } from '../actions/index'


class BMICalculater extends Component {



	handleSubmit = (values) => {
		this.props.healthConditionCalc(values)
	}

	render() {
		if(!this.props.healthCondition) {
			return(
				<HealthConditionForm
					onSubmit = { this.handleSubmit }
				/>
			)
		} else {
			return(
				<BMIIndicator />
			)
		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		healthCondition: state.healthCondition
	}
}

const matchDispatchToProps = (dispatch)  => {
	return bindActionCreators({healthConditionCalc: calculateHealth}, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(BMICalculater)
