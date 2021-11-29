import { Notify } from 'notiflix/build/notiflix-notify-aio';
const key = "24575119-5e4efe416bc752fe5d4bb361b"
async function fetchIMG(name) {
    
  const response = await fetch(
        `https://pixabay.com/api/?$key=${key}&q=yellow+flowers&image_type=photo`);
    if (!response.ok) {
        if (response.status === 404) {
            Notify.failure('Oops, there is no country with that name');
        }
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default { fetchIMG };