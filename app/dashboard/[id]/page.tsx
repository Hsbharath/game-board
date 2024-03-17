export default async function Page() {

    return <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="w-full">
            <iframe src={`https:hsbharath.dev/`} title={'Tic Tac Toe'} width='1100' height='650'></iframe>
        </div>
    </main>;
}