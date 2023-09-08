import type {InputTypes} from "~/types/InputTypes";

export default function Input(props: InputTypes) {
    return props.placeholder ? (
        <input type="search" placeholder={props.placeholder} className={"bg-custom2 rounded-md p-2 font-mono" + props.classNames} />
    ) : (
        <input type="search" className={"bg-custom2 rounded-md p-2 font-mono" + props.classNames} />
    )
}