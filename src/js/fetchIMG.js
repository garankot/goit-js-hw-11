import { Notify } from 'notiflix/build/notiflix-notify-aio';
const options = {
    key: "24575119-5e4efe416bc752fe5d4bb361b",
    q: document.querySelector['#search-form'],
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: true,
}

async function getUser() {
    
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
      if (!response.ok) {
        if (response.status === 404) {
            Notify.failure('Oops, there is no country with that name');
        }
        throw new Error(response.statusText);
    }
    console.log(response.json())
    return await response.json();
    } catch (error) {
      console.error(error);
    }
  }


// async function fetchIMG() {
    
//   const response = await fetch(
//         `https://pixabay.com/api/?${options}`);
//     if (!response.ok) {
//         if (response.status === 404) {
//             Notify.failure('Oops, there is no country with that name');
//         }
//         throw new Error(response.statusText);
//     }
//     console.log(response.json())
//     return await response.json();
// }

export default { fetchIMG };