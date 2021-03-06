const initialState = {
  measurements: []
};

export const addMeasurement = measurement => {
  const now = new Date();
  const dd = now.getDate();
  const mm = now.getMonth() + 1;
  const yy = now.getFullYear();
  const dateString = `${mm}/${dd}/${yy}`;
  const action = {
    type: "ADD_MEASUREMENT",
    measurement: { ...measurement, date: dateString }
  };
  return action;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_MEASUREMENT":
      return {
        ...state,
        measurements: [...state.measurements, action.measurement]
      };
    case "CLEAR_STATE":
      return initialState;
    default:
      return state;
      console.error("missing case");
  }
}
