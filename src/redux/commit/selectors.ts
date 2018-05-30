
import { RootReducerInterface } from 'redux/rootReducer'

export const isLoading = (state: RootReducerInterface) => state.commit.isLoading
export const getCurrUser = (state: RootReducerInterface) => state.commit.user
