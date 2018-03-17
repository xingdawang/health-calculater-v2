import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-google-charts'

class BMIIndicator extends Component {

	render() {
		return (
			
			<div className="col-md-6">
				<div className="col-md-6">
					<h3><span className="label label-primary"> Your height </span>: {this.props.condition.height} cm</h3>
					<h3><span className="label label-primary"> Your weight </span>: {this.props.condition.weight} Kg</h3>
					<h3><span className="label label-primary"> Your BMI </span>: {this.props.condition.bmi}</h3>
				</div>

				<Chart
					chartType="Gauge"
					data={[
						['Label', 'Value'],
						['BMI', Number(this.props.condition.bmi) ]
					]}
					options={{
						redFrom: 35, redTo: 55,
						yellowFrom: 25, yellowTo: 35,
						greenFrom: 10, greenTo: 25,
						majorTicks : ['15', '20','25','30','35','40','45','50'],
						minorTicks: 5,
						animation:{
							duration: 1000,
							easing: 'inAndOut'
						},
						max: 50, min: 15
					}}
					graph_id="GaugeChart"
					width="100%"
					height="300px"
					legend_toggle
				/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		condition: state.healthCondition
	}
}

export default connect(mapStateToProps)(BMIIndicator)
