export default function Card() {
    return (
        <div className="flex block max-w-sm p-6 rounded-lg bg-custom2">
            <slot />
        </div>
    )
}