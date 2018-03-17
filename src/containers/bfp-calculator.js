import React, { Component } from 'react'
import HealthConditionForm from '../components/health-condition-form'
import BFPIndicator from '../components/bfp-indicator'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateBFP } from '../actions/index'

class BFPCalculator extends Component {

	handleSubmit = (values) => {
		this.props.healthConditionCalc(values)
	}

	render() {
		if(!this.props.healthCondition) {
			return (
				<HealthConditionForm
					onSubmit = { this.handleSubmit }
				/>
			)
		} else {
			return (
				<BFPIndicator />
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		healthCondition: state.healthCondition
	}
}



const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({healthConditionCalc: calculateBFP}, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(BFPCalculator)
