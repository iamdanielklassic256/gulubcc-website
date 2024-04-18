import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import sermonsService from "./sermonsService";
import { Sermons } from "@/types/sermons";

export interface SermonState {
	data: Sermons[] | null,
	loading: boolean,
	error: string | null

}


const initialState: SermonState = {
	data: [],
	loading: false,
	error: ""
}

export const getAllSermons = createAsyncThunk("sermons", async () => {
	return sermonsService.getSermonsData()
})

export const sermonSlice = createSlice({
	name: "sermons",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllSermons.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(getAllSermons.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data created successfully..."
				state.data = action.payload
			})
			.addCase(getAllSermons.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
	},
})

export default sermonSlice.reducer;