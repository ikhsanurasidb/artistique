export default function SignUpPage() {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-base-200 font-bold">Signup now!</h1>
          <p className="py-6 text-base-200">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium tracking-widest">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-[13.5rem]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium tracking-widest">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-[13.5rem]"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-widest">
                  Email
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-widest">
                  Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
