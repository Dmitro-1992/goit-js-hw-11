// import axios from "axios";


// const API_KEY = "55013844-be1545fccf51514babc5c7be7";


// export function getImagesByQuery(query) {

// const BASE_URL = "https://pixabay.com/api/";

// return axios.get(BASE_URL, {

// params: {

// key: API_KEY,

// q: query,

// image_type: "photo",

// orientation: "horizontal",

// safesearch: true

// }

// })

// .then(response => response.data);

// }





import axios from "axios";

const API_KEY = "ТВОЙ_API_KEY"; // вставь сюда свой ключ
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error(error);
  });
}
