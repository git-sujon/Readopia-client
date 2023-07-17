import { useGetReviewQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import IsLoading from "./ui/IsLoading";

const BookReview = ({ id }) => {

  const { data, isLoading } = useGetReviewQuery(id);

  const reviews = data?.data;

  if (isLoading) {
    return <div className="flex justify-end items-end"><IsLoading /></div>;
  }

  return (
    <div className="mt-16">
      {reviews?.map((review: string) => {
        return (
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">{review}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BookReview;
