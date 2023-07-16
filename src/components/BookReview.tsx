const BookReview = ({ reviews }) => {
  return (
    <div className="mt-16">
      {reviews?.map((review:string) => {
        return (
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              {review}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookReview;
