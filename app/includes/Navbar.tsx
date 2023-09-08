import {Link} from "@remix-run/react";

export function Navbar() {
    return (
        <div className="flex-wrap shadow-md items-center justify-between m-2 p-2 rounded-lg bg-custom4">
            <div className="w-10 h-10 flex items-center">
                <img src="https://cat-lover.me/logo.webp" alt="logo" />

                <Link to={"/"}>
                    <p className="font-mono self-center text-white text-xl">Weave Index</p>
                </Link>
            </div>
        </div>
    )
}