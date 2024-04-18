import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Insight } from "@/types/Insight";
import insightsService from "./insightService";

export interface InsightState {
	data: Insight[] | null,
	loading: boolean,
	error: string | null

}


const initialState: InsightState = {
	data: [],
	loading: false,
	error: ""
}

export const getAllInsights = createAsyncThunk("insights", async () => {
	return insightsService.getInsightData();
})

export const getSingleInsight = createAsyncThunk("insights/getSingle", async (id: string) => {
    return insightsService.getInsightById(id);
})

export const insightsSlice = createSlice({
	name: "insights",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllInsights.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(getAllInsights.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data created successfully..."
				state.data = action.payload
			})
			.addCase(getAllInsights.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
			.addCase(getSingleInsight.pending, (state) => {
                state.loading = true
                state.error = "Processing..."
            })
            .addCase(getSingleInsight.fulfilled, (state, action) => {
                state.loading = false
                state.error = "Single insight fetched successfully..."
                state.data = action.payload
            })
            .addCase(getSingleInsight.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload
                state.data = null // Reset singleInsight on rejection
            })
	},
})

export default insightsSlice.reducer;