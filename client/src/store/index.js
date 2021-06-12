import {createStore} from 'redux'
import reducers from './reducers/cake'

const store = createStore(reducers)

export default store