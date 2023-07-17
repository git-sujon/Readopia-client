import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/features/user/userSlice";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  console.log("errors:", errors)

  const { user, error, isLoading } = useAppSelector((state) => state.user);

  console.log("user:", user);

  console.log("error:", error);

  const dispatch = useAppDispatch();

interface IUserLogin{
    email:string
    password:string
}

  const onSubmit = async (inputData:IUserLogin) => {
    await dispatch(
      loginUser({ email: inputData?.email, password: inputData?.password })
    );
  };

  useEffect(()=>{
    if (user?.email && !isLoading) {
        console.log(user?.email);
        toast.success("Login successfully");
        reset();
      }
  } ,[user?.email, isLoading])

  return (
    <div className="flex  justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* """"""""""""""""  */}

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
          <p className="text-red-500">{errors.email ? errors.email.message : ''}</p>
        </div>

        {/* """"""""""""""""  */}

        {/* Password */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("password", { required: "Password is required" })}
          />
                 <p className="text-red-500">{errors.password ? errors.password.message : ''}</p>
        </div>

        <button type="submit" className="btn btn-neutral mt-5">
          Submit
        </button>
        <p className="text-red-500">{error ? error : ''}</p>
      </form>
    </div>
  );
};
export default LoginPage;
