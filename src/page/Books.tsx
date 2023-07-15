import StarRating from "../components/ui/starRating";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";

const Books = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const books = data?.data?.data;

//   const {
//     title,
//     author,
//     genre,
//     publicationDate,
//     reviews,
//   } = books;

  return (
    <div className="grid grid-cols-3 gap-10">
      {books?.map((book) => (
        <div className="card w-80 bg-yellow-50  shadow-xl">
          <div className="card-body">
            <figure className="my-2">
              <img
                className="h-56"
                src="https://static8.depositphotos.com/1004221/832/i/600/depositphotos_8329452-stock-photo-pile-of-books-on-a.jpg"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title">
              {book?.title}
            </h2>
            <p className="font-semibold text-sm ">{book.author}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{book.genre}</div>
              <StarRating/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
