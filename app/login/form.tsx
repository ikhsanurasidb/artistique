"use client";

import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const response = await fetch("/api/auth/signup", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: formData.get("email"),
    //     password: formData.get("password"),
    //   }),
    // });
    // console.log(response);
  };
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-base-200 font-bold">Login now!</h1>
          <p className="py-6 text-base-200">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium tracking-widest">
                  Email
                </span>
              </label>
              <input type="email" className="input input-bordered" required />
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <LoginButton/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoginButton() {

  return (
    <button className="btn btn-outline mt-4 w-full">
      Log in
    </button>
  );
}