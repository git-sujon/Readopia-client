import { toast } from "react-hot-toast/headless";
import { useAddReviewMutation } from "../redux/api/apiSlice";

const PostReview = ({ id }) => {
  const [addReview, { isSuccess, error }] = useAddReviewMutation();

  const handleReview = async (event) => {
    event.preventDefault();

    const review = event.target.reviewInput.value;
    const options = {
      id: id,
      data: { review },
    };

    await addReview(options);
    event.target.reset()
  };

  if (error) {
    console.log(error?.data.message);
  }

  if (isSuccess) {
    console.log("isSuccess:", isSuccess);

    toast.success("Review added successfully");
  }

  return (
    <div className="flex justify-end mt-5">
      <form onSubmit={handleReview}>
        <input
          type="text"
          placeholder="Type here"
          name="reviewInput"
          className="input input-bordered border-2  w-full max-w-xs"
        />
        <button className="btn btn-success mt-2" type="submit">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default PostReview;
