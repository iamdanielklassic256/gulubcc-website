import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Subscribers } from "@/types/subscriber";
import subscriberService from "./subscriberService";

export interface SubscriberState {
	data: [] | null,
	loading: boolean,
	error: string | null

}


const initialState: SubscriberState = {
	data: [],
	loading: false,
	error: ""
}


export const subscribeNow = createAsyncThunk(
	'subscribe/submit',
	async (data: Subscribers) => {
		try {
			const response = await subscriberService.createSubscription(data);
			return response.data;
			console.log(response.data)// Assuming the API response contains the created sermon data
		} catch (error) {
			throw error;
		}
	}
);



export const subscriberSlice = createSlice({
	name: "subscribers",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(subscribeNow.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(subscribeNow.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data successfully loaded..."
				state.data = action.payload
			})
			.addCase(subscribeNow.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
	},
})

export default subscriberSlice.reducer;