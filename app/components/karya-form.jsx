

const PriceInput = () => {

  const handleInputChange = (event) => {
    // Remove non-digit characters
    const rawValue = event.target.value.replace(/\D/g, "");

    // Check if the parsed value is a valid number
    const parsedValue = parseInt(rawValue, 10);
    if (!isNaN(parsedValue)) {
      // Set input value as a valid number
      setInputValue(parsedValue);
    } else {
      // Keep the original input value if it's not a valid number
      setInputValue(rawValue);
    }
  };

  return (
    <>
      <input
        name="nama_karya"
        type="text"
        placeholder="Nama Karya"
        className="input input-bordered w-full max-w-xs text-neutral"
      />
      <br/>
      <br/>
      <input
        name="deskripsi"
        type="text"
        className="textarea textarea-bordered text-neutral"
        placeholder="Deskripsi"
      ></input>
      <br/>
      <br/>
      <input
        name="harga"
        type="number" // Change type to text to handle string input
        placeholder="Harga"
        className="input input-bordered w-full max-w-xs text-neutral"
      />
      <br/>
      <br/>
    </>
  );
};

export default PriceInput;
