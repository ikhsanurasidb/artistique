export default function Main() {
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-base-200 bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-neutral font-bold">Live Auction NOW!</h1>
          <button className="btn btn-outline text-neutral">Enter the Room</button>
        </div>
      </div>
    </div>
  );
}
