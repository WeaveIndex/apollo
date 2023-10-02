import type {ButtonTypes} from "~/types/ButtonTypes";
import {Link} from "@remix-run/react";

export default function Button(props: ButtonTypes) {
    return props.to ? (
        <Link to={`${props.to}`}>
            <button
                className={`font-mono h-10 px-6 font-semibold rounded-md ${props.color ? props.color : "bg-custom2"} hover:bg-custom1 transition duration-300 ease-in-out text-white`}>
                {props.text}
            </button>
        </Link>
    ) : (
        <button
            className={`font-mono h-10 px-6 font-semibold rounded-md ${props.color ? props.color : "bg-custom2"} hover:bg-custom1 transition duration-300 ease-in-out text-white`}>
            {props.text}
        </button>
    )
}