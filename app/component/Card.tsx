import Button from "~/component/Button";

export default function Card() {
    return (
        <div className="block relative max-w-sm h-52 p-6 rounded-lg bg-custom2">
            <p className="text-xl font-mono">Syz66/JumpReset</p>

            <div className="mt-2">
                <p className="">A long description</p>
            </div>

            <div className="flex absolute bottom-4 items-center justify-end pt-2.5">
                <Button color={"bg-custom3"} text={"Details"} />
            </div>
        </div>
    )
}