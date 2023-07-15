import BookCard from "../components/BookCard";
import IsLoading from "../components/ui/IsLoading";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";

const Books = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  if(isLoading){
    return <IsLoading/>
}
  const books = data?.data?.data;

  return (
    <div className="grid grid-cols-3 gap-10">
      {books?.map((book: IBook) => (
        <BookCard key={book._id} book={book}></BookCard>
      ))}
    </div>
  );
};

export default Books;
