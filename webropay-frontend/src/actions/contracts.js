import axios from "axios";

export const getContracts = () => async (dispatch) => {
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-meira/matches`
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
