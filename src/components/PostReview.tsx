import { useAddReviewMutation } from "../redux/api/apiSlice";

const PostReview = ({ id }) => {

  console.log("id from <post></post>:", id)

  const [addReview, { isSuccess, error }] = useAddReviewMutation(id);

  const handleReview = async (event) => {
    event.preventDefault();

    const review = event.target.reviewInput.value;

    console.log("review:", review);

    await addReview({ review });
  };

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
