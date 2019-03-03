const initialState = {
  measurements: [
    { date: "12/1/19", bust: 30, waist: 28, hips: 32 },
    { date: "15/1/19", bust: 29, waist: 27, hips: 30 },
    { date: "31/1/19", bust: 31, waist: 29, hips: 32 },
    { date: "12/2/19", bust: 29, waist: 25, hips: 20 }
  ]
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
    default:
      return state;
      console.error("missing case");
  }
}
