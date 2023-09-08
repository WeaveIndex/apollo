export default function Toggle() {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"/>
            <div
                className="w-11 h-6 bg-custom1 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-custom2 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-custom4"></div>
            <span className="ml-3 text-sm font-semibold font-mono">Toggle me</span>
        </label>
    )
}