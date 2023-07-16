import { useForm } from "react-hook-form";
import { ICreateBook } from "../types/globalTypes";
import { useAddBookToDBMutation } from "../redux/api/apiSlice";
import toast from 'react-hot-toast';
const AddBook = () => {
  const [addBookToDB, { isLoading, isError, isSuccess, error }] =
    useAddBookToDBMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (inputData: ICreateBook) => {
    const book: ICreateBook = {
      title: inputData.title,
      author: inputData.author,
      bookDetails: inputData.bookDetails,
      genre: inputData.genre,
      publicationDate: inputData.publicationDate,
      imgUrl: inputData.imgUrl,
      rating: 5,
      reviews: ["A Test Auto Review"],
    };


     await addBookToDB({ data: book });
     reset()
  };
  if (isSuccess) {
    toast('Book add successfully');

  }

  if (error) {
    console.log(error?.data.message);
  }

  return (
    <div className="px-32">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Book Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("title", { required: "Email is required" })}
          />
        </div>

        {/* """"""""""""""""  */}

        {/* book details */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Book Details</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("bookDetails", { required: "Need some Details" })}
          />
        </div>

        {/* """"""""""""""""  */}
        {/* Author */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("author", { required: "Author is required" })}
          />
        </div>

        {/* """"""""""""""""  */}
        {/* """"""""""""""""  */}
        {/* Genre */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("genre", { required: "genre is required" })}
          />
        </div>

        {/* """"""""""""""""  */}
        {/* """"""""""""""""  */}
        {/* Publication Date */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Publication Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("publicationDate", {
              required: "Publication Date is required",
            })}
          />
        </div>

        {/* """"""""""""""""  */}
        {/* """"""""""""""""  */}
        {/* Book Image */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Book Image</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("imgUrl", { required: "Image address is required" })}
          />
        </div>

        {/* """"""""""""""""  */}

        <button type="submit" className="btn btn-neutral mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
