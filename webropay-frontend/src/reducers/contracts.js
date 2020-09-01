const initialState = {
  constractsList: [],
};

const contracts = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_CONTRACTS": {
      return {
        ...state,
        contractsList: action.payload,
      };
    }
  }
  return state;
};

export default contracts;
