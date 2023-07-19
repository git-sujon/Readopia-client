import { Link } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalTypes";
import StarRating from "./StarRating";

const WishlistCard = ({ id }) => {
  const { data } = useGetSingleBookQuery(id);

  const book: IBook = data.data;
  const { _id, author, title, rating, imgUrl, genre, bookDetails } = book;

  return (
    <Link
      to={`/book-details/${_id}`}
      className="card w-96  shadow-xl image-full"
    >
      <figure className="h-60">
        <img className="w-full bg-cover" src={imgUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className="font-medium">{author}</p>
        <p className="italic">{bookDetails}</p>
        <div className="card-actions justify-between items-center">
          <div className="flex  items-center gap-5">
            <StarRating />
            <p className="mb-0 font-black">{rating}</p>
          </div>
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </Link>
  );
};

export default WishlistCard;
