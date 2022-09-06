import { CheckboxProps } from "@mui/material/Checkbox";
import { ReactNode } from "react";

export type CustomCheckboxProps = CheckboxProps & {
    label?: ReactNode,
}