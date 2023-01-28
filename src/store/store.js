import Rootreducer from "../reducer";
import {createStore} from "redux"
const Store=createStore(Rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store