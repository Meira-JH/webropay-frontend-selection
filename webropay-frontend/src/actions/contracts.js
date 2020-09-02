import axios from "axios";

export const getContracts = () => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:3000/contracts`
  );
  dispatch(setContracts(response));
  console.log("action get contracts",response);
};

export const setContracts = (contractsList) => {
  return {
    type: "SET_CONTRACTS",
    payload: contractsList,
  };
};
