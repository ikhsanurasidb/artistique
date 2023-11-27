"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [state, dispatch] = useFormState(authenticate, undefined);

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
          <form className="card-body" action={dispatch}>
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
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {state === "CredentialsSignin" && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">Invalid credentials</p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-outlone mt-4 w-full" aria-disabled={pending}>
      Log in
    </button>
  );
}
