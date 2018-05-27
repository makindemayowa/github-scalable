
import { RootReducerInterface } from 'redux/rootReducer'

export const isLoading = (state: RootReducerInterface) => state.user.isLoading
export const getUserError = (state: RootReducerInterface) => state.user.error
