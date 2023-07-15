import { useGetSingleBooksQuery } from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import IsLoading from "../components/ui/IsLoading";
import ConfirmationModal from "../components/ui/ConfirmationModal";

const BookDetails = () => {
  const { _id } = useParams();
  const { data, isLoading } = useGetSingleBooksQuery(_id);

  if (isLoading) {
    return <IsLoading />;
  }

  const book: IBook = data?.data;



  const handleDelete = () => {
    console.log("g");
  };

  return (
    <div>
      <ConfirmationModal />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://static8.depositphotos.com/1004221/832/i/600/depositphotos_8329452-stock-photo-pile-of-books-on-a.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          {/* <p>{book?.bookDetails}</p> */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt atque
            ea eaque dolorum tenetur aliquam inventore corrupti excepturi
            consequatur nesciunt doloribus amet tempore repellendus sint eos
            veniam nulla, autem officia esse soluta at velit? Quisquam,
            deleniti! Quae eaque repellendus labore doloremque itaque optio
            consectetur. Cum, quis. Consectetur veniam rem dolorum.
          </p>
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
    </div>
  );
};

export default BookDetails;
