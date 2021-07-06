import {FC} from "react";

export function FactoryComponent<Props, HookParams> (Component : FC<Props>, hook: (params: HookParams) => Props) : FC<HookParams> {
    const result : FC<HookParams> = (params: HookParams, {children}) => {
        const props = hook(params)

        return <Component {...props}>{children}</Component>
    }

    return result
}
