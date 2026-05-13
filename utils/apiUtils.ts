import axios from 'axios';

export async function getUsers() {
    const response = await axios.get('https://reqres.in/api/users?page=1');

    if (response.status !== 200) {
        throw new Error('API validation failed');
    }

    return response.data;
}
