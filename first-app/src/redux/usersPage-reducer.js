const photourl = 'https://image.flaticon.com/icons/png/512/147/147144.png'

let initialState = {
    usersData: [
        {
            id: 1,
            avatar: photourl,
            isFollowing: true,

            fullName: {
                name: 'Beast',
                surname: 'Misra',
            },
            status: 'BoX',
            location: {
                country: 'yummy',
                city: 'Dnipro'
            }
        },
        {
            id: 2,
            avatar: photourl,
            isFollowing: false,

            fullName: {
                name: 'Mark',
                surname: 'Misra',
            },
            status: 'Boss',
            location: {
                country: 'Ukraine',
                city: 'Dnipro'
            }
        },
        {
            id: 3,
            avatar: photourl,
            isFollowing: true,

            fullName: {
                name: 'Dark',
                surname: 'Choco',
            },
            status: 'babyBoss',
            location: {
                country: 'Moscow',
                city: 'Russia'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    if (action.type === 'SHOW-MORE') {

    }
    else if (action.type === 'FOLLOW') {
        let newState = {
            ...state,
            usersData: state.usersData.map( users => {
                debugger;
                if (users.id === action.userId) {
                    return {...users, isFollowing: true}
                } else {
                    return {...users}
                }
            })
        }
        return newState;
    } else if (action.type === 'UNFOLLOW') {
        let newState = {
            ...state,
            usersData: state.usersData.map( users => {
                if (users.id === action.userId) {
                    return {...users, isFollowing: false}
                } else {
                    return {...users}
                }
            })
        }
        return newState;
    } else if (action.type === 'SET-USERS') {
        return {...state, usersData: [...state.usersData, ...action.usersData]};
    }
    return state;
}

export const addShowMoreActionCreator = () => { return { type: 'SHOW-MORE' } }
export const addFollowActionCreator = (userId) => { return { type: 'FOLLOW', userId } }
export const addUnfollowActionCreator = (userId) => { return { type: 'UNFOLLOW', userId } }
export const addSetUsersActionCreator = (users) => { return { type: 'SET-USERS', users } }

export default usersReducer;