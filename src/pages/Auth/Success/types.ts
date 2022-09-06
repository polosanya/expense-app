import { ReactNode } from "react"
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

export type SuccessProps = ButtonUnstyledProps & {
    children?: ReactNode,
    buttonLabel?: string,
    handleClick?: React.MouseEventHandler<HTMLButtonElement>,
}