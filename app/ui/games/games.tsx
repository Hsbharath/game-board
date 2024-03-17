import Link from "next/link";

export default async function GameWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Game name="tictactoe" title="Tic Tac Toe"/>
      <Game name="sequence" title="Sequence"/>

    </>
  );
}

export function Game({
    name,
    title,
}: {
    name: string,
    title: string;
}) {

  return (
    <Link href={`/dashboard/${name}`}
        className={`
          w-full bg-white text-black py-3 text-center text-2xl shadow-md`}
      >
        {title}
      </Link>
  );
}