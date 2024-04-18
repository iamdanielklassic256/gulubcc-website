import { API_BASE_URL } from "@/app/api";



const getUpcomingEventData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/upcoming-events`)
            .then(response => response.json())

        // console.log("Post Contact Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Events Error:", error);
        throw error;
    }
};



const upcomingEventService = {
    getUpcomingEventData,
}
export default upcomingEventService;