export default function (state = null, action) {
	switch(action.type) {

		case "CALCULATE_BMI":
			let healthParameters = action.payload
			let bmi = healthParameters.weight / healthParameters.height / healthParameters.height
			let formattedBmi = (bmi * 10000).toPrecision(4)
			return Object.assign({}, action.payload, {bmi: formattedBmi})

		default:
			return state
	}
}