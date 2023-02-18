function Input({ type, placeholder }) {
  return (
    <div>
      <input
        type={type}
        id="error"
        className="bg-transparent text-sm w-full   block  rounded-full  py-4 pl-6 pr-24 border-2 text-white  border-gray-300    "
        placeholder={placeholder}
      />
      {/* <p class="mt-2 text-sm text-red-600 ">
        <span class="font-medium">Oh, snapp!</span> Some error message.
      </p> */}
    </div>
  );
}

// border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500  focus:border-red-500

export default Input;
