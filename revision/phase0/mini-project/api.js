import 'dotenv/config';

export async function getAPI() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds',
            {
                headers: {
                    'x-api-key': process.env.DOG_API_KEY
                }
            }
        )
        const data = await response.json()
        return data;
    } catch (error) {
        console.log('Error in fetching API', error)
    }
}