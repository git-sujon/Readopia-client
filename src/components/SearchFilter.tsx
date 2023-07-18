import { setSearchTerm, setSearchValue } from "../redux/features/book/bookSlice";
import { useAppDispatch } from "../redux/hooks";

const SearchFilter = () => {
  const disPatch = useAppDispatch();

  const searchHandler = (intputValue) => {
    intputValue.preventDefault();
    const searchValue = intputValue?.target?.search.value;


    disPatch(setSearchValue(searchValue))
  };

  const handleFilterFields = (intputValue) => {
    const filterFiled = intputValue.target.value;

    disPatch(setSearchTerm(filterFiled));
  };

  return (
    <div>
      <div>
        <form onSubmit={searchHandler} className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Search by title, author, genre.."
            name="search"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-success btn-sm mt-1 ">
            Search
          </button>
        </form>
        <div className="mt-5">
          <p>Search Field:</p>
          <hr />

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-semibold ">Title</span>
                <input
                  type="radio"
                  name="searchTerm"
                  value="title"
                  className="radio checked:bg-red-500"
                  onChange={handleFilterFields}
                  
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-semibold ">Author</span>
                <input
                  type="radio"
                  name="searchTerm"
                  value="author"
                  className="radio checked:bg-blue-500"
                  onChange={handleFilterFields}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-semibold ">Genre</span>
                <input
                  type="radio"
                  name="searchTerm"
                  value="genre"
                  className="radio checked:bg-blue-500"
                  onChange={handleFilterFields}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
