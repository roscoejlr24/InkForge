const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export async function generateTattoo(prompt) {
    try {
        const res = await fetch(`${API_URL}/api/tattoos/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ prompt })
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export async function saveTattooDesign(design) {
    try {
        const res = await fetch(`${API_URL}/api/tattoos/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(design)
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}