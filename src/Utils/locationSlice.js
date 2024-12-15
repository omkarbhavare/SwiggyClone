import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationDetails: [
      {
        pincode: 411037,
        area: "Bibvewadi",
        lat: 18.4690,
        lng: 73.8641,  
        district: "Pune",
        state: "Maharashtra",
      },
    ],
  },
  reducers: {
    updateLocation: (state, action) => {
      state.locationDetails = action.payload;
    },
  },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
