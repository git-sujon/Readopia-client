import { Link } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalTypes";
import StarRating from "./StarRating";
import IsLoading from "./IsLoading";

const WishlistCard = ({ id }:string) => {

  const { data, isLoading} = useGetSingleBookQuery(id);

  if(isLoading && !data){
    <IsLoading/>
  }
  const book: IBook = data?.data;

  console.log("book:", book)




  const handleDelete = async() => {
    console.log("delete")
  }

  return (
    <Link
      to={`/book-details/${book?._id}`}
      className="card w-96  shadow-xl image-full"
    >
      <figure className="h-60">
        <img className="w-full bg-cover" src={book?.imgUrl} alt={book?.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{book?.title}</h2>
        <p className="font-medium">{book?.author}</p>
        <p className="italic">{book?.bookDetails}</p>
        <div className="card-actions justify-between items-center">
          <div className="flex  items-center gap-5">
            <StarRating />
            <p className="mb-0 font-black">{book?.rating}</p>
          </div>
          <button className="btn btn-warning btn-sm" onClick={handleDelete()}>Delete</button>
        </div>
      </div>
    </Link>
  );
};

export default WishlistCard;
