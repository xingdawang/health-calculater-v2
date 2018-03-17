export const calculateHealth = (data) => {
	return {
		type: "CALCULATE_BMI",
		payload: data
	}
}