import { API_BASE_URL } from "@/app/api";
import { Subscribers } from "@/types/subscriber";



const createSubscription = async (data: Subscribers) => {
    try {
        const response = await fetch(`${API_BASE_URL}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            if (response.status === 409) { // Check if status is Conflict (409)
                throw new Error('Subscriber with this email already exists');
            }
            throw new Error('Failed to subscribe');
        }

        return response.json(); // Return the created subscription data
    } catch (error) {
        console.error("Create Subscribe Error:", error);
        throw error;
    }
};



const subscriberService = {
    createSubscription
}
export default subscriberService