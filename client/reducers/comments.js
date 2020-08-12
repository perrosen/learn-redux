function postComments(state = [], action) {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    case "REMOVE_COMMENT":
      return [
        // From start to delete
        ...state.slice(0, action.i),
        // After deleted one
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  // console.log("state", state);
  // console.log("action", action);
  if (typeof action.postId !== "undefined") {
    return {
      // Current state
      ...state,
      // Override
      [action.postId]: postComments(state[action.postId], action),
    };
  }

  return state;
}

export default comments;
