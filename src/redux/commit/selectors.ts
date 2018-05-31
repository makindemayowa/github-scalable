
import { RootReducerInterface } from 'redux/rootReducer'

export const isLoadingRepos = (state: RootReducerInterface) => state.commit.isLoadingRepos
export const isLoadingCommits = (state: RootReducerInterface) => state.commit.isLoadingCommits
export const getCurrUser = (state: RootReducerInterface) => state.commit.user
export const getActiveRepo = (state: RootReducerInterface) => state.commit.activeRepo
export const getActiveRepoDescription = (state: RootReducerInterface) => state.commit.activeRepoDescription
export const getRepos = (state: RootReducerInterface) => state.commit.repos
export const getCommits = (state: RootReducerInterface) => state.commit.commits
