import Head from "next/head";

export default function SimpleLayout(props: any) {
    return (
        <>
            <Head>
                <title>Housing Demo</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
                {props.children}
            </main>
        </>
    );
}