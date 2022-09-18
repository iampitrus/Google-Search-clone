import { useState, useEffect } from "react";

import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
// To make requests per time as the user types in the input field

function Search() {
  const [text, setText] = useState("Elon Musk");
  const { setSearchTerm } = useResultContext();

  const [debouncedValue] = useDebounce(text, 300); // useDebounce(value_to_debounce, per_time_in_milliseconds)

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        placeholder="Search Goggl or type URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
}

export default Search;
