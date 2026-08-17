const API_URL = import.meta.env.VITE_CONTACT_API_URL;

/**
 * Send a quick message via the temporary contact endpoint.
 * @param {{ name: string, email: string, message: string }} data
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function sendMessage({ name, email, message }) {
  if (!API_URL) {
    console.error("VITE_CONTACT_API_URL is not set");
    return { ok: false, error: "Contact endpoint not configured." };
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `Server error: ${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message || "Network error." };
  }
}
