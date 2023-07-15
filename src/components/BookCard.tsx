import { Link } from "react-router-dom";
import StarRating from "../components/ui/StarRating";
import { IBook } from "../types/globalTypes";
const BookCard = ({ book }:IBook) => {
  const { _id, title, author, genre } = book;

  return (
    <Link
      to={`/book-details/${_id}`}
      className="card w-80 bg-yellow-50  shadow-xl"
    >
      <div className="card-body">
        <figure className="my-2">
          <img
            className="h-56"
            src="https://static8.depositphotos.com/1004221/832/i/600/depositphotos_8329452-stock-photo-pile-of-books-on-a.jpg"
            alt="Shoes"
          />
        </figure>
        <h2 className="card-title">{title}</h2>
        <p className="font-semibold text-sm ">{author}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{genre}</div>
          <StarRating />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
