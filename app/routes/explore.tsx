import type { V2_MetaFunction } from "@remix-run/node";
import {Navbar} from "~/includes/Navbar";
import Card from "~/component/Card";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Weave Index | Explore" },
        { name: "description", content: "Explore Weave Mods on Weave Index!" },
    ];
};

export default function Explore() {
    return (
        <div style={{ lineHeight: "1.8" }}>
            <div>
                <Navbar />
            </div>

            <div className="flex items-center justify-center">
                <h1 className="font-mono max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Modlist</h1>

                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Epic weave mod list</p>
            </div>

            <div className="flex-col m-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
