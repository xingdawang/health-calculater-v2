export const calculateBMI = (healthCondition) => {
	return {
		type: "CALCULATE_BMI",
		payload: healthCondition
	}
}

export const calculateBFP = (healthCondition) => {
	return {
		type: "CALCULATE_BFP",
		payload: healthCondition
	}
}