import IsLoading from "../components/ui/IsLoading";
import WishlistAndFinishedCard from "../components/ui/WishlistAndFinishedCard";
import { useGetSingleUserQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hooks";
import { IUser } from "../types/globalTypes";

const MyProfile = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data,isLoading } = useGetSingleUserQuery(user?.email);

  if (isLoading && !data) {
    return <IsLoading />;
  }

  const profile = data?.data;

  console.log("profile:", profile)


  


  const photoUrl =
    "https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png";

  return (
    <div>
      {/* user info  */}
      <div className="flex items-center justify-center gap-x-10 border max-w-lg mx-auto  p-10 bg-yellow-100 rounded-lg">
        <div className="">
          <img
            className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
            src={photoUrl}
            alt=""
          />
        </div>
        <div className="mt-5">
          <h3 className="font-bold ">Name: {profile?.name}</h3>
          <h3 className="font-bold ">Phone: {profile?.phoneNumber}</h3>
          <h3 className="font-bold ">Email: {profile?.email}</h3>
        </div>
      </div>

      <div className="py-20">
        <h2 className="font-bold text-xl mb-10">Your Wishlist Books:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {profile?.wishlist?.map((id:string) => (
            <WishlistAndFinishedCard id={id} />
          ))}
        </div>
      </div>

      <div className="py-20">
        <h2 className="font-bold text-xl mb-10">Your Reading Finished Books:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {profile?.finishedBook?.map((id:string) => (
            <WishlistAndFinishedCard id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
