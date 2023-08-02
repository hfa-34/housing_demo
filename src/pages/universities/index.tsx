import Link from "next/link";
import UniversityCard from "./components/university_card";
import { api } from "~/utils/api";

export default function Index() {
    const universities = api.v1.university.getAll.useQuery()

    return (
        <>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-[3rem]">
                    Universities
                </h2>
            </div>
            {
                universities.data ?
                    universities.data.map((university) => (
                        <div className="m-12 grid grid-cols md:grid-cols-2 gap-4 max-w-5xl">
                            <Link href={`/universities/${university.external_id}/units`}>
                                <UniversityCard key={university.external_id} name={university.name} imageUrl={university.photo_url}></UniversityCard>
                            </Link>
                        </div>
                    ))
                    :
                    <div className="m-12 grid grid-cols-2 gap-4 max-w-5xl">
                        "Loading.."
                    </div>
            }
        </>
    );
}
