import UnitCard from "./components/unit_card";

export default function Index() {
    return (
        <>
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    University Name
                </h1>
            </div>
            <div className="m-12 grid grid-cols-2 gap-4 max-w-5xl">
                <UnitCard name="Univ" imageUrl="https://www.homeand.co/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Feasyliving%2F680ca0e5-0f9c-4743-901a-c318dd6ec66a_Berlin_Yard_Common_Work_Area_Desk_Detail.jpg%3Fauto%3Dcompress%2Cformat%26w%3D1200&w=3840&q=75"></UnitCard>
            </div>
        </>
    );
}
