"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log(response);

    if (response.ok) {
      alert("Signup successful!");
      router.push("/login");
    } else if (!response.ok) {
      alert("Signup failed, please try again.");
    }
  };
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
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium tracking-widest">
                    First Name
                  </span>
                </label>
                <input
                  name="first_name"
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
                  name="last_name"
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
                name="email"
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
                name="password"
                type="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
