export default async () => {
    try {
        const url = `https://${process.env.WEATHER_API_URL}/current.json?key=${process.env.WEATHER_API_KEY}&q=Atlanta`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()

        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        })
    }
}
