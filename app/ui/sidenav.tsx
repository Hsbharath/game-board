'use client';

import React, { useState} from "react";

import Link from "next/link";

export default function SideNav() {

    const [selectedGame, setSelectedGame] = useState('');

    const loadGame = (gameName: string) => {
        setSelectedGame(gameName);
    };

    return (
        <div className="flex grow h-full flex-col px-3 py-4 md:px-2">
            <Link className="mb-2 flex h-[48px] items-center justify-start bg-red-600 p-4"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <p className="text-2xl font-semibold">Game Board</p>
                </div>
            </Link>
            <div className="h-auto w-full grow bg-gray-400 mb-2 p-2">
            </div>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:hover:bg-red-300 hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className="hidden md:block text-black">Sign Out</div>
            </button>
        </div>
    )
}