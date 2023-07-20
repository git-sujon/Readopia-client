import { Link } from "react-router-dom";
import {
  useAddToWishlistMutation,
  useDeleteFromFinishedListMutation,
  useDeleteFromWishlistMutation,
  useGetSingleBookQuery,
} from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalTypes";
import StarRating from "./StarRating";
import IsLoading from "./IsLoading";
import { toast } from "react-hot-toast";

const WishlistAndFinishedCard = ({ wishListId, finishedListId, email }) => {
  let id = null;
  if (wishListId) {
    id = wishListId;
  }
  if (finishedListId) {
    id = finishedListId;
  }

  const { data, isLoading } = useGetSingleBookQuery(id);

  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [deleteFromFinishedList] = useDeleteFromFinishedListMutation();

  if (isLoading && !data) {
    <IsLoading />;
  }
  const book: IBook = data?.data;

  const handleDelete = async () => {
    const wishlistOptions = {
      email,
      data: { wishlist: wishListId },
    };
    const finishedBookOptions = {
      email,
      data: { finishedBook: finishedListId },
    };
    if (wishListId) {
      await deleteFromWishlist(wishlistOptions);
      toast.success("Book deleted from wishlist")
    }
    if (finishedListId) {
      await deleteFromFinishedList(finishedBookOptions);
      toast.success("Book deleted from Finished List")
    }
  };

  return (
    <div className="card w-96  shadow-xl image-full">
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
          <Link
            to={`/book-details/${book?._id}`}
            className="btn btn-warning btn-sm"
          >
            Details
          </Link>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistAndFinishedCard;
