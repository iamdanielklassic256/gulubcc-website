import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Events } from "@/types/events";
import upcomingEventService from "./upcomingEventService";

export interface EventState {
	data: Events[] | null,
	loading: boolean,
	error: string | null

}


const initialState: EventState = {
	data: [],
	loading: false,
	error: ""
}

export const getAllUpcomingEvents = createAsyncThunk("upcoming-events", async () => {
	return upcomingEventService.getUpcomingEventData();
})



export const upcomingEventSlice = createSlice({
	name: "events",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllUpcomingEvents.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(getAllUpcomingEvents.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data created successfully..."
				state.data = action.payload
			})
			.addCase(getAllUpcomingEvents.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
	},
})

export default upcomingEventSlice.reducer;