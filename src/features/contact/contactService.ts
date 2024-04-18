import { API_BASE_URL } from "@/app/api";
import { Contact } from "@/types/contact";



const getContactData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`)
            .then(response => response.json())

        // console.log("Post Contact Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Post Contact Error:", error);
        throw error;
    }
};

const deleteContactData = async (id: any) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            // If the response is not successful, throw an error
            throw new Error('Failed to delete contact');
        }

        // Assuming the response is not expected to contain data for deletion
        console.log("Contact deleted successfully");
        return true; // or return any relevant data indicating success
    } catch (error) {
        console.error("Delete Contact Error:", error);
        throw error;
    }
};

const createContactData = async (contactData: Contact) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });

        if (!response.ok) {
            throw new Error('Failed to create contact');
        }

        return response.json(); // Return the created sermon data
    } catch (error) {
        console.error("Create Contact Error:", error);
        throw error;
    }
};



const contactService = {
    getContactData,
    deleteContactData,
    createContactData
}
export default contactService