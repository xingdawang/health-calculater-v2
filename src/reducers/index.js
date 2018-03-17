import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import healthConditionReducer from './health-calculator'

const rootReducer = combineReducers({
	healthCondition: healthConditionReducer,
	form: formReducer
})

export default rootReducer