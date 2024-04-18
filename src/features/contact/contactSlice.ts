import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import contactService from "./contactService";
import { Contact } from "@/types/contact";

export interface CounterState {
	data: [] | null,
	loading: boolean,
	error: string | null

}


const initialState: CounterState = {
	data: [],
	loading: false,
	error: ""
}


export const getAllContacts = createAsyncThunk("contacts", async () => {
	return contactService.getContactData()
})

export const createNewContact = createAsyncThunk(
	'contacts/post',
	async (contactData: Contact) => {
		try {
			const response = await contactService.createContactData(contactData);
			return response.data; // Assuming the API response contains the created sermon data
		} catch (error) {
			throw error;
		}
	}
);

export const deleteSingleContact = createAsyncThunk(
	'contacts/deleteSingleContact',
	async (id: string) => {
		try {
			// Call the deleteContactData function to delete the contact
			await contactService.deleteContactData(id);
			// Return any relevant data indicating successful deletion
			return id;
		} catch (error) {
			// If an error occurs, reject the promise with the error message
			throw error
		}
	}
);

export const contactSlice = createSlice({
	name: "contacts",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(createNewContact.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(createNewContact.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data successfully loaded..."
				state.data = action.payload
			})
			.addCase(createNewContact.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
			.addCase(getAllContacts.pending, (state) => {
				state.loading = true
				state.error = "Processing..."
			})
			.addCase(getAllContacts.fulfilled, (state, action) => {
				state.loading = false
				state.error = "Data successfully loaded..."
				state.data = action.payload
			})
			.addCase(getAllContacts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
				state.data = []
			})
			.addCase(deleteSingleContact.pending, (state) => {
				state.loading = true;
				state.error = "Processing...";
			})
			.addCase(deleteSingleContact.fulfilled, (state) => {
				state.loading = false;
				state.error = "Deleted successfully...";
				// Remove the deleted contact from the state
				// state.data = state.data.filter(contact => contact.id !== action.payload);
			})
			.addCase(deleteSingleContact.rejected, (state,) => {
				state.loading = false;
				// state.error = action.error.message;
			});


	},
})

export default contactSlice.reducer;