import IsLoading from "../components/ui/IsLoading";
import WishlistCard from "../components/ui/WishlistCard";
import { useGetSingleUserQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import { IUser } from "../types/globalTypes";

const MyProfile = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { data } = useGetSingleUserQuery(user?.email);

  if (isLoading && data) {
    return <IsLoading />;
  }

  const profile: IUser = data?.data;

  const {
    name,
    email,
    phoneNumber,
    addedBook,
    finishedBook,
    givenRating,
    givenReviews,
    wishlist,
  } = profile;

  console.log("profile:", profile);

  const photoUrl =
    "https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png";

  return (
    <div>
      {/* user info  */}
      <div className="">
        <div className="mr-3">
          <img
            className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
            src={photoUrl}
            alt=""
          />
        </div>
        <div className="mt-5">
          <h3 className="font-bold ">Name: {name}</h3>
          <h3 className="font-bold ">Phone: {phoneNumber}</h3>
          <h3 className="font-bold ">Email: {email}</h3>
        </div>
      </div>

      <div className="py-20">
        <h2 className="font-bold text-xl mb-10">Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {wishlist?.map((id) => (
            <WishlistCard id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
