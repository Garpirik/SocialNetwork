import { createSelector } from "reselect"

const getUsers = (state) =>{
    return state.usersPageReducer.users
}


export const getUsersSelector = (state) =>{
    return getUsers(state).filter(u => true);
}
export const getUsersSuperSelector  = createSelector(getUsers, (users) =>{
    return users.filter( u => true)
}  )

export const getPageSize = (state) =>{
    return  state.usersPageReducer.pageSize
}
export const getUsersCount = (state) =>{
    return state.usersPageReducer.usersCount
}

export const getCurrentPage = (state) =>{
    return state.usersPageReducer.currentPage
}

export const getIsFetching = (state) =>{
    return state.usersPageReducer.isFetching
}
export const getFollowingInProgress = (state) =>{
    return state.usersPageReducer.followingInProgress
}