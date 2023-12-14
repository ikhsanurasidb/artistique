

const PriceInput = () => {

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
