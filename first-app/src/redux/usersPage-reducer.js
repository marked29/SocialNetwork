const photourl = "https://image.flaticon.com/icons/png/512/147/147144.png";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  if (action.type === "SHOW-MORE") {
  } else if (action.type === "FOLLOW") {
    let newState = {
      ...state,
      usersData: state.usersData.map((users) => {
        debugger;
        if (users.id === action.userId) {
          return { ...users, followed: true };
        } else {
          return { ...users };
        }
      }),
    };
    return newState;
  } else if (action.type === "UNFOLLOW") {
    let newState = {
      ...state,
      usersData: state.usersData.map((users) => {
        if (users.id === action.userId) {
          return { ...users, followed: false };
        } else {
          return { ...users };
        }
      }),
    };
    return newState;
  } else if (action.type === "SET-USERS") {
    return { ...state, usersData: [...state.usersData, ...action.users] };
  } else if (action.type === "SET-CURRENT-PAGE") {
    return { ...state, currentPage: action.currentPage };
  }
  return state;
};

export const addShowMoreActionCreator = () => {
  return { type: "SHOW-MORE" };
};
export const addFollowActionCreator = (userId) => {
  return { type: "FOLLOW", userId };
};
export const addUnfollowActionCreator = (userId) => {
  return { type: "UNFOLLOW", userId };
};
export const addSetUsersActionCreator = (users) => {
  return { type: "SET-USERS", users };
};

export const addSetCurrentPage = (currentPage) => {
  return { type: "SET-CURRENT-PAGE", currentPage };
};

export default usersReducer;
