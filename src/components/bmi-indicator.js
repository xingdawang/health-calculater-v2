import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-google-charts'

class BMIIndicator extends Component {

	render() {
		return (
			
			<div className="col-md-12">
				<div className="col-md-6">
					<table className="bmi-table table table-hover table-bordered">
						<thead>
							<tr>
								<th>Your Information</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><span className="label label-primary"> Your height </span></td>
								<td>{this.props.condition.height} cm</td>
							</tr>
							<tr>
								<td><span className="label label-primary"> Your weight </span></td>
								<td>{this.props.condition.weight} Kg</td>
							</tr>
							<tr>
								<td><span className="label label-primary"> Your BMI </span></td>
								<td>{this.props.condition.bmi}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="col-md-6">
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
