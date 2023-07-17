import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/features/user/userSlice";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const dispatch = useDispatch();


  const onSubmit = async (inputData) => {

    await updateProfile(auth.currentUser, {
      displayName: inputData.fullName,
      photoURL: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    });

    dispatch(
      createUser({ email: inputData?.email, password: inputData?.password })
    );
  };

  return (
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
  );
};

export default SignUpPage;
