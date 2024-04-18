import { Contact } from "@/types/contact";
import axios from "axios";

const API_BASE_URL = 'https://myapi.gulubcc.org';
const axiosInstance = axios.create({ baseURL: API_BASE_URL })


export const postContact = async (data: Contact) => {
	try {
		const response = await axiosInstance.post("/contact", data);
		console.log("Post Contact Response:", response.data);
		return response.data;
	} catch (error) {
		console.error("Post Contact Error:", error);
		throw error; // Re-throw the error to be handled by the caller
	}
};

export const getSermonData = async () => {
	try {
		const response = await axiosInstance.get("/sermons");
		console.log("Response:", response.data);
		return response.data;
	} catch (error) {
		console.error("Response Error:", error);
		throw error; // Re-throw the error to be handled by the caller
	}
};