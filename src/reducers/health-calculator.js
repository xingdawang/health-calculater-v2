export default function (state = null, action) {

	let healthParameters = action.payload

	switch(action.type) {	

		case "CALCULATE_BMI":
			let bmi = healthParameters.weight / healthParameters.height / healthParameters.height
			let formattedBMI = (bmi * 10000).toPrecision(4)
			return Object.assign({}, action.payload, {bmi: formattedBMI})

		case "CALCULATE_BFP":
			bmi = healthParameters.weight / healthParameters.height / healthParameters.height * 10000
			let age = (new Date()).getFullYear() - (new Date(healthParameters.dateOfBirth)).getFullYear()
			let gender = (healthParameters.gender === "male") ? 1 : 0
			// Adult body fat % = (1.20 × BMI) + (0.23 × Age) − (10.8 × sex) − 5.4
			// where sex is 1 for males and 0 for females.
			let bfp =  (1.20 * bmi) + (0.23 * age) - (10.8 * gender) - 5.4
			let formattedBFP = bfp.toPrecision(4)
			return Object.assign({}, action.payload, {bfp: formattedBFP})

		default:
			return state
	}
}