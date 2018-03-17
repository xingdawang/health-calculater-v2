import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import healthConditionReducer from './health-calculator'
import defaultConditionReducer from './default-condition'

const rootReducer = combineReducers({
	defaultCondition: defaultConditionReducer,
	healthCondition: healthConditionReducer,
	form: formReducer
})

export default rootReducer