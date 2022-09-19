import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("elon+musk");
  const getResults = async (type) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "5446f3c0d4mshee42eb0a9a71539p1aac21jsnf7dcaf71b5dc",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    fetch(`${baseUrl}${type}`, options)
      .then((response) => response.json())
      .then((response) => {
        // Due to the fact that we have to rename the entries from our api to news, we then come here to tweak somethings(cause its a built in function in js)
        if (type.includes("/news")) {
          setResults(response.entries);
        } else if (type.includes("/image")) {
          setResults(response.image_results);
        } else {
          setResults(response.results);
        }
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };
  return (
    // A context having different states variables as an object
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext = () => useContext(ResultContext);

export default ResultContextProvider;
