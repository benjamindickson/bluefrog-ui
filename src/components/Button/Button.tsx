import React, { MouseEventHandler, Ref } from "react";

export interface ButtonProps {
    label?: string;

    /**
     * Callback fired when the button is clicked.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /**
     * The color of the button.
     */
    color?: 'red' | 'blue';
}

export const Button = React.forwardRef((props: ButtonProps, ref: Ref<any>): React.JSX.Element => {
    const { onClick, color = "red", label } = props;
    return (
        <button ref={ref} onClick={onClick} style={{ backgroundColor: color }}>{label}</button>
    )
});
