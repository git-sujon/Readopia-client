const SearchFilter = () => {


  


  const searchHandler = (intputValue) => {
    intputValue.preventDefault()
    console.log(intputValue.target.search.value)
  }


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
          <button type="submit" className="btn btn-success btn-sm mt-1 ">Search</button>
        </form>

        <div className="mt-5">
          <p>Filter:</p>
          <hr />
          <div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Genre:</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-secondary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Publication Year:</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
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
