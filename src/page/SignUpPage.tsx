import { useForm } from "react-hook-form";

const SignUpPage = () => {


  const { handleSubmit, register } = useForm();

  const onSubmit = (inputData) => {
    console.log("inputData:", inputData.email);
  };

  return (
    <div className="flex  justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* """"""""""""""""  */}
        {/* Full Name */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Full Name</span>
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
            <span className="label-text">email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        {/* """"""""""""""""  */}

        {/* Phone Number */}
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="label-text">Phone Number</span>
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
            <span className="label-text">Password</span>
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
