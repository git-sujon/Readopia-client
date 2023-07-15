
const ConfirmationModal = () => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-yellow-100">
          <h3 className=" font-extrabold text-lg">Do You want to delete this Book?</h3>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn btn-error">Ok</button>
            <button className="btn btn-success">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ConfirmationModal;
