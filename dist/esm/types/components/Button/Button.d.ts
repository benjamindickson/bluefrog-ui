import React, { MouseEventHandler } from "react";
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<any>>;
