import type { V2_MetaFunction } from "@remix-run/node";
import {Navbar} from "~/includes/Navbar";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Weave Index | Explore" },
        { name: "description", content: "Explore Weave Mods on Weave Index!" },
    ];
};

export default function Index() {
    return (
        <div style={{ lineHeight: "1.8" }}>
            <div>
                <Navbar />
            </div>

            <div className="m-2">

            </div>
        </div>
    );
}
