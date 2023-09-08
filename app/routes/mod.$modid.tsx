import type {LoaderArgs, V2_MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {Navbar} from "~/includes/Navbar";
import {json} from "@remix-run/node";
import Button from "~/component/Button";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Weave Index | Explore" },
        { name: "description", content: "Explore Weave Mods on Weave Index!" },
    ];
};

export function loader({ params }: LoaderArgs) {
    return json({
        id: params.modid,
        name: "JumpReset",
        desc: "An epic mod"
    })
}

export default function ModPage() {
    const data = useLoaderData<typeof loader>();
    return (
        <div style={{ lineHeight: "1.8" }}>
            <div>
                <Navbar />
            </div>

            <div className="flex items-center justify-center">
                <h1 className="font-mono max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">{data.name}</h1>

                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">{data.desc}</p>
            </div>

            <div className="select-none absolute w-80 h-60 m-2 rounded-lg bg-custom2">
                <div className="flex mx-2">
                    <p className="font-mono text-3xl font-extrabold">{data.name}</p>
                </div>

                <div className="mx-2">
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">{data.desc} aspd aspj dıpasjıpdasıod hsıoahd ısahdıonajs dhaıosd joash ıo</p>
                </div>

                <div className="ml-2 flex absolute bottom-2 items-center justify-end pt-2.5">
                    <Button color={"bg-custom3"} text={"Homepage"} />
                </div>
            </div>

            <div className="mt-2 rounded-lg h-auto ml-[21rem] mr-2 bg-custom2">
                <div className="m-2">
                    <p className="whitespace-pre-line">
                        Jump Reset
                    </p>
                </div>
            </div>
        </div>
    );
}
