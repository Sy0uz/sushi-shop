import { FC, PropsWithChildren, CSSProperties } from 'react'
import s from './../styles/Wrapper.module.scss'

interface WrapperProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
}

const Wrapper: FC<WrapperProps> = ({ className, style, children }) => {
    return (
        <div style={style} className={className ? [s.wrapper, className].join(' ') : s.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper