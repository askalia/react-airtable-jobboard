import { combineReducers} from "redux";
import { jobsReducer, JobsState } from "./jobs/jobs.reducer";
//import { ShoppingCartState, shoppingCartReducer } from "./shopping-cart/shopping-cart.reducer";
//import {userReducer, UserState} from "./user/user.reducer"

export type RootState = {
    jobs: JobsState  
}

export default combineReducers({
    jobs: jobsReducer    
})