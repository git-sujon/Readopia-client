import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ICreateBook } from "../types/globalTypes";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import IsLoading from "../components/ui/IsLoading";

const EditBook = () => {
  const { id } = useParams();

  console.log("id:", id)


  const [updateBook, { isError, isSuccess, error }] =
    useUpdateBookMutation();


  const { data, isLoading } = useGetSingleBookQuery(id);




  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (data?.data && isLoading) {
    return <IsLoading />;
  }

  const book: ICreateBook = data?.data;


  const onSubmit = async (inputData: Partial<ICreateBook>) => {

    console.log("inputData:", inputData)

    const book: Part = {
      title: inputData.title,
      author: inputData.author,
      bookDetails: inputData.bookDetails,
      genre: inputData.genre,
      publicationDate: inputData.publicationDate,
      imgUrl: inputData.imgUrl,
      rating: 5,
      reviews: ["A Test Auto Review"],
    };
    const options = {
      id: id,
      data: { ...book },
    };

    console.log("options:", options);

    await updateBook(options);

  };
  if (isSuccess) {

    console.log("isSuccess:", isSuccess)

    toast.success("Book Updated successfully");
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
            defaultValue={book?.title}
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
            defaultValue={book?.bookDetails}
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
            defaultValue={book?.author}
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
            defaultValue={book?.genre}
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
            defaultValue={book?.publicationDate?.slice(0, 10)}
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
            defaultValue={book?.imgUrl}
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

export default EditBook;
