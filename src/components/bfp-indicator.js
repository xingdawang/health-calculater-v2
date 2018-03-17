import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-google-charts'

class BFPIndicator extends Component {

	render() {
		return (
			<div>
				<h3><span className="label label-primary"> Your height </span>: {this.props.condition.height} cm</h3>
				<h3><span className="label label-primary"> Your weight </span>: {this.props.condition.weight} Kg</h3>
				<h3><span className="label label-primary"> Your gender </span>: {this.props.condition.gender} </h3>
				<h3><span className="label label-primary"> Your birthdate </span>: {this.props.condition.dateOfBirth} </h3>
				<h3><span className="label label-primary"> Your BFP </span>: {this.props.condition.bfp}</h3>

				{this.props.condition.gender === "male" ? 
					<Chart
						chartType="Gauge"
						data={[
							['Label', 'Value'],
							['BFP', Number(this.props.condition.bfp) ]
						]}
						options={{
							redFrom: 29, redTo: 45,
							yellowFrom: 22, yellowTo: 29,
							greenFrom: 0, greenTo: 22,
							majorTicks : ['0','4','8','12','16','20','24','28','32','36'],
							minorTicks: 4,
							animation:{
								duration: 1000,
								easing: 'inAndOut'
							},
							max: 36, min: 0
						}}
						graph_id="GaugeChart"
						width="100%"
						height="300px"
						legend_toggle
					/>
					:
					<Chart
						chartType="Gauge"
						data={[
							['Label', 'Value'],
							['BFP', Number(this.props.condition.bfp) ]
						]}
						options={{
							redFrom: 39, redTo: 55,
							yellowFrom: 31, yellowTo: 39,
							greenFrom: 5, greenTo: 31,
							majorTicks : ['10','15','20','25','30','35','40','45','50'], 
							minorTicks: 5,
							animation:{
								duration: 1000,
								easing: 'inAndOut'
							},
							max: 50, min: 10
						}}
						graph_id="GaugeChart"
						width="100%"
						height="300px"
						legend_toggle
					/>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		condition: state.healthCondition
	}
}

export default connect(mapStateToProps)(BFPIndicator)
