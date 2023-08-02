import Link from "next/link";
import PrimaryButton from "./components/primary_button";

export default function Index() {
  //const hello = api.v1.university.getAll.useQuery()

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Housing Demo
      </h1>
      <Link href="/universities">
        <PrimaryButton className="mt-12">Start Looking</PrimaryButton>
      </Link>

      <p className="text-2xl text-white">
        {
          //hello.data ? JSON.stringify(hello.data) : "Loading tRPC query..."
        }
      </p>
    </>
  );
}
