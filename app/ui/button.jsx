import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export function ArrowBack({ buttonColor }) {
  return (
    <button className={`flex-none btn btn-circle m-2 ${buttonColor}`}>
      <ArrowBackIosRoundedIcon />
    </button>
  );
}

export function ArrowForward({ buttonColor }) {
  return (
    <button className={`flex-none btn btn-circle m-2 ${buttonColor}`}>
      <ArrowForwardIosRoundedIcon />
    </button>
  );
}

export function LoginButton({ action }) {
  return (
    <button
      className="btn btn-outline btn-sm w-32 btn-neutral rounded-full"
      onClick={action}
    >
      <p className="text-base-200 tracking-widest text-lg font-light">LogIn</p>
    </button>
  );
}

export function SignUpButton({ action }) {
  return (
    <button
      className="btn btn-sm w-32 btn-accent rounded-full"
      onClick={action}
    >
      <p className="text-base-200 tracking-widest text-lg font-light">SignUp</p>
    </button>
  );
}
