// Fetch logic for JSON parsing demo


export async function getAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        console.log(data)
        return data; 
    } catch (err) {
        console.log("Error in getting the API")
        throw err;
    }
}