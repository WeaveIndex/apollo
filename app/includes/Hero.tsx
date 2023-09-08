import Button from "~/component/Button";

export default function Hero() {
    return (
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://cat-lover.me/logo.webp" alt="logo" />
            </div>

            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="font-mono max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Weave Index</h1>

                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Your epic weave mod database</p>

                <Button to={"/explore"} text="Explore Mods" />
            </div>
        </div>
    )
}