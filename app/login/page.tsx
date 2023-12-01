import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    return redirect("/");
  }
  return (
    <Form/>
  );
}


