import type { V2_MetaFunction } from "@remix-run/node";
import Card from "~/component/Card";
import Button from "~/component/Button";
import Input from "~/component/Input";
import Toggle from "~/component/Toggle";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Pontu Showcase" },
        { name: "description", content: "Our Component Lib Pontu test route" },
    ];
};

export default function Test() {
    return (
        <div style={{ lineHeight: "1.8" }}>
            <div className="m-5">
                <Card />

                <br />

                <Button text={"Test Button"} />

                <br />

                <div className="mt-5">
                    <Input placeholder={"asd"} />
                </div>

                <br />

                <Toggle />
            </div>
        </div>
    );
}
