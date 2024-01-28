/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("./Button").ButtonProps & import("react").RefAttributes<any>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Red: Story;
export declare const Blue: Story;
