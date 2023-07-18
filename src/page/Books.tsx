import BookCard from "../components/BookCard";
import SearchFilter from "../components/SearchFilter";
import IsLoading from "../components/ui/IsLoading";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";

const Books = () => {
  const { data, isLoading } = useGetAllBooksQuery("gone");
  if (!data?.data?.data && isLoading) {
    return <IsLoading />;
  }
  const books = data?.data?.data;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <SearchFilter/>
      </div>

      <div className="col-span-9 ">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
       {books?.map((book: IBook) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
       </div>
      </div>
    </div>
  );
};

export default Books;
