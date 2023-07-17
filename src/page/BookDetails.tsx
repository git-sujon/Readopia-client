import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/apiSlice";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import IsLoading from "../components/ui/IsLoading";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { isDelete } from "../redux/features/util/utilSlice";
import { useEffect } from "react";
import BookReview from "../components/BookReview";
import PostReview from "../components/PostReview";
import toast from "react-hot-toast";
const BookDetails = () => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleBookQuery(_id);
  const [deleteBook, { error, isSuccess }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const { isConfirm } = useAppSelector((state) => state?.util);

  useEffect(() => {
    const deleteConfirmed = async () => {
      if (isConfirm) {
        try {
          await deleteBook({ id: _id });
          toast.success("Book deleted successfully");

          navigate("/");
        } catch (error) {
          console.log("Error deleting book:", error);
        } finally {
          dispatch(isDelete());
        }
      }
    };

    deleteConfirmed().catch((error) => {
      console.log("Error in deleteConfirmed:", error);
    });
  }, [isConfirm, deleteBook, _id, dispatch,navigate]);
  if (isLoading) {
    return <IsLoading />;
  }

  const book: IBook = data?.data;

  const handleDelete = () => {
    dispatch(isDelete());
  };

  return (
    <div>
      <ConfirmationModal handleDelete={handleDelete} />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-80" src={book?.imgUrl} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          {/* <p>{book?.bookDetails}</p> */}
          <p>{book.bookDetails}</p>
          <div className="card-actions justify-end">
            <Link to={`/edit-book/${book._id}`} className="btn btn-secondary">
              Edit Book
            </Link>
            <button
              onClick={() => window.my_modal_4.showModal()}
              className="btn btn-error"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>

      <BookReview id={_id} />
      <PostReview id={_id} />
    </div>
  );
};

export default BookDetails;
