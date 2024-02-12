import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;

export { Toggle, toggleVariants };
