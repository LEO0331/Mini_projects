import React, { useEffect, useState } from "react";
import axios from "axios";
//const key = "your_key";

function Translate({ language, text }) {
  let url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
    "en" +
    "&tl=" +
    language +
    "&dt=t&q=" +
    encodeURI(text);
  const [resultText, setResultText] = useState("");
  useEffect(() => {
    if (!text) {
      setResultText("");
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResultText(data[0][0][0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [text, language]);

  // console.log(resultText)

  return (
    <div className="translate">
      <label className="label">Output</label>
      <h1 className="title">{resultText}</h1>
    </div>
  );
}

// function Translate({ language, text }) {
//   const [translated] = useTranslation(text, language);

//   return (
//     <div className="translate">
//       <label className="label">Output</label>
//       <h1 className="title">{translated.replace("&#39;", "'")}</h1>
//     </div>
//   );
// }

// const useTranslation = (text, language) => {
//   const [translated, setTranslated] = useState("");

//   useEffect(() => {
//     if (!text) {
//       return;
//     }

//     const cancelToken = axios.CancelToken.source();

//     doTranslation(text, language, cancelToken, setTranslated);

//     return () => {
//       try {
//         cancelToken.cancel();
//       } catch (err) {}
//     };
//   }, [text, language]);

//   return [translated];
// };

// const debounce = (fn) => {
//   let id = null;

//   return (...args) => {
//     if (id) {
//       clearTimeout(id);
//     }
//     id = setTimeout(() => {
//       fn(...args);
//       id = null;
//     }, 300);
//   };
// };

// const doTranslation = debounce(
//   async (input, languageCode, cancelToken, callback) => {
//     try {
//       const { data } = await axios.post(
//         `https://translation.googleapis.com/language/translate/v2?key=${key}`,
//         {
//           q: input,
//           target: languageCode,
//         },
//         { cancelToken: cancelToken.token },
//       );

//       callback(data.data.translations[0].translatedText);
//     } catch (err) {
//       callback("");
//     }
//   },
// );

export default Translate;
