import { useForm } from "react-hook-form";
import {
  createUser,
  createUserWithGoogle,
} from "../redux/features/user/userSlice";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { user, error, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const onSubmit = async (inputData) => {
    await updateProfile(auth.currentUser, {
      displayName: inputData.fullName,
      photoURL:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    });

    await dispatch(
      createUser({ email: inputData?.email, password: inputData?.password })
    );
  };

  const handleGoogleSignUP = async () => {
    await dispatch(createUserWithGoogle());
  };

  useEffect(() => {
    if (user?.email && !isLoading) {
      console.log(user?.email);
      toast.success("SignUp successfully");
      reset();
    }
  }, [user?.email, isLoading]);

  return (
    <div>
      <div className="flex  justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* """"""""""""""""  */}
          {/* Full Name */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Full Name:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
              {...register("fullName", { required: "Author is required" })}
            />
          </div>

          {/* """"""""""""""""  */}

          {/* email */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
              {...register("email", { required: "Email is required" })}
            />
          </div>

          {/* """"""""""""""""  */}

          {/* Phone Number */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Phone Number:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
              {...register("phoneNumber", { required: "Email is required" })}
            />
          </div>

          {/* """"""""""""""""  */}

          {/* Password */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-sm"
              {...register("password", { required: "Need some Details" })}
            />
          </div>

          <button type="submit" className="btn btn-neutral mt-5">
            Submit
          </button>
        </form>
      </div>

      <div className=" flex justify-center items-center mt-3">
        <button
          onClick={handleGoogleSignUP}
          className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded btn btn-success"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 326667 333333"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
              fill="#4285f4"
            ></path>
            <path
              d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
              fill="#34a853"
            ></path>
            <path
              d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
              fill="#fbbc04"
            ></path>
            <path
              d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
              fill="#ea4335"
            ></path>
          </svg>
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
