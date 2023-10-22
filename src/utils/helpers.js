import axios from "axios";

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "11bbca2d8amsha932e0f205d61e2p1b3243jsn8454c024ae2f",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com'

// ? Verdiğimiz url e istek atıp verileri geriye döndüren fonksiyon
export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log("Veriler çekilemedi");
  }
};
