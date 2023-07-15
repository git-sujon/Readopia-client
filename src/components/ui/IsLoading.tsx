const IsLoading = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
};

export default IsLoading;
