import { API_BASE_URL } from "@/app/api";
import { Sermons } from "@/types/sermons";



const getSermonsData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sermons`)
            .then(response => response.json())

        // console.log("Post Contact Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Post Contact Error:", error);
        throw error;
    }
};

const deleteSermonData = async (sermonId: any) => {
    try {
        const response = await fetch(`${API_BASE_URL}/sermons/${sermonId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete sermon');
        }

        // console.log("Delete Sermon Response:", response);
        return sermonId; // Return the deleted sermonId
    } catch (error) {
        console.error("Delete Sermon Error:", error);
        throw error;
    }
};

const createSermonData = async (sermonData: Sermons) => {
    try {
        const response = await fetch(`${API_BASE_URL}/sermons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sermonData)
        });

        if (!response.ok) {
            throw new Error('Failed to create sermon');
        }

        return response.json(); // Return the created sermon data
    } catch (error) {
        console.error("Create Sermon Error:", error);
        throw error;
    }
};

const updateSermonData = async (sermonId: string, updatedData: Partial<Sermons>) => {
    try {
        const response = await fetch(`${API_BASE_URL}/sermons/${sermonId}`, {
            method: 'PATCH', // Assuming you use PUT method for updating
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error('Failed to update sermon');
        }

        return response.json(); // Return the updated sermon data
    } catch (error) {
        console.error("Update Sermon Error:", error);
        throw error;
    }
};

const sermonsService = {
    createSermonData,
    getSermonsData,
    deleteSermonData,
    updateSermonData
}
export default sermonsService