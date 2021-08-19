import { useState } from "react";
import { ReactComponent as SearchIcon } from "../media/icons/search_white_24dp.svg";


const SearchBar: React.FC = () => {

  const [query, setQuery] = useState("");
  console.log(query);

  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log("Submitting the Form")
  };



//   const api = createApi({
//     // Don't forget to set your access token here!
//     // See https://unsplash.com/developers
//     accessKey: "83slW2KkmnM1W-j6qNDKlvmoY6zvmqbGabMJOArWkC8",
//   });

//   const [data, setPhotosResponse] = useState(null);

//   useEffect(() => {
//     api.search
//       .getPhotos({ query: "cat", orientation: "landscape" })
//       .then((result) => {
//         setPhotosResponse(result);
//       })
//       .catch(() => {
//         console.log("something went wrong!");
//       });
//   }, []);

  return (
    <>
      <form onSubmit={searchPhotos} className="form form-search flex-center">
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <div className="input-row flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            name="query"
            className="searchbar form-container form-search"
            placeholder={`Try "dog" or "apple"`}
          />
          <button type="submit" className="btn ">
            <SearchIcon />
          </button>
        </div>
      </form>
      <div className="card-list">
        {/* {
          pics.map((pic) =>
            <div className="card">
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>);
        } */}
      </div>
    </>
  );
};

export { SearchBar };
