import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { getData } from "../utils/helpers";

// ? context temelini oluşturma
export const YoutubeContext = createContext();

// ? contextte tutulan verileri uygulamaya aktarma
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      //? çekilmiş diğer videoları silme
      setVideos(null);

      getData(`/${selectedCategory.type}`).then((res) => {
        // ? type ı sadece video olanları filtreledik.
        const filtred = res.data.data.filter((i) => i.type === "video");
        // ? state i güncelleme
        setVideos(filtred);
      });
    }
      
    if (selectedCategory.type === "category") {
      //? state i temizleme
      setVideos(null);
      //? yeni videolar için istek atma
      getData(`/search?query=${selectedCategory.name}&type=video`).then(
        (res) => {
          //? gelen verilerden sadece video olanları alma
          const filtred = res.data.data.filter((i) => i.type === "video");
          setVideos(filtred);
        }
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
