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

            <div className="flex-col m-2 grid grid-cols-5 gap-5">
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
