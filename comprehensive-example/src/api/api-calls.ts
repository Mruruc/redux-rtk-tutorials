const BASE_URL = import.meta.env.VITE_APP_API_URL;

export async function getRequest<T>(url: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.message || `Invalid response: ${response.status}`);
    }
    const rawData: T = await response.json();
    return rawData;

  } catch (error) {
    throw error;
  }
}
