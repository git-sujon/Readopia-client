import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import IsLoading from "../components/ui/IsLoading";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { isDelete } from "../redux/features/util/utilSlice";
import { useEffect } from "react";
import BookReview from "../components/BookReview";
import PostReview from "../components/PostReview";

const BookDetails = () => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleBookQuery(_id);

  const demoImageUrl =
    "https://static8.depositphotos.com/1004221/832/i/600/depositphotos_8329452-stock-photo-pile-of-books-on-a.jpg";

  const { isConfirm } = useAppSelector((state) => state?.util);

  const [
    deleteBook,
    { isError, error, status, isLoading: isLoadingForDelete },
  ] = useDeleteBookMutation();

  if (isLoading) {
    return <IsLoading />;
  }

  const book: IBook = data?.data;

  const handleDelete = async () => {
    dispatch(isDelete());
    console.log("isConfirm 1:", isConfirm);
    if (isConfirm) {
      try {
        await deleteBook({ id: _id });
        console.log("Book deleted successfully");
        dispatch(isDelete());
      } catch (error) {
        console.log(isError, error);
      }
    }

    console.log("isConfirm2:", isConfirm);
  };

  return (
    <div>
      <div>
        <dialog id="my_modal_4" className="modal">
          <form
            method="dialog"
            className="modal-box w-11/12 max-w-5xl bg-yellow-100"
          >
            <h3 className=" font-extrabold text-lg">
              Do You want to delete this Book?
            </h3>
            <div className="modal-action">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-error" onClick={handleDelete}>
                Ok
              </button>
              <button className="btn btn-success">Close</button>
            </div>
          </form>
        </dialog>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-80" src={book?.imgUrl} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          {/* <p>{book?.bookDetails}</p> */}
          <p>{book.bookDetails}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Edit Book</button>
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
      <PostReview id={_id}/>
    </div>
  );
};

export default BookDetails;
