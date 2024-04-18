import { API_BASE_URL } from "@/app/api";



const getInsightData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/insights`)
            .then(response => response.json())

        // console.log("Post Contact Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Post Contact Error:", error);
        throw error;
    }
};

const getInsightById = async (insightId: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/insights/${insightId}`)
            .then(response => response.json())

        // Assuming the API response contains the data of the single insight
        return response.data;
    } catch (error) {
        console.error("Get Insight Data Error:", error);
        throw error;
    }
};

const insightsService = {
    getInsightData,
    getInsightById
}
export default insightsService;