export const GET_MESSAGE = 'my_new_rails_app\app\javascript\redux\GET_MESSAGE';


export const getMessage = (payload) => ({
  type: GET_MESSAGE,
  payload
});

export const displayMessages = () =>  dispatch => {
  const apiCall = (link) => fetch(link).then(res => res.json());
  apiCall('/api/v1/greetings')
  .then(data => dispatch({type: GET_MESSAGE, payload: data}))
}

export const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload
    default:
        return state
  }
};

export default messageReducer;