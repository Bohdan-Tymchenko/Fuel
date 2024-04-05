// absolute imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProviderState {
  provider: any;
}

const initialState: ProviderState = {
  provider: {},
};

export const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    initializeProvider(state, action: PayloadAction<any>) {
      state.provider = action.payload;
    },
  },
});

export const { initializeProvider } = providerSlice.actions;
export default providerSlice.reducer;