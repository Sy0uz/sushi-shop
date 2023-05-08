import React, { FC, PropsWithChildren, CSSProperties } from 'react'
import s from './MyButton.module.scss'

interface ButtonProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
    size?: 'large' | 'default' | 'small';
    onClick?: () => void;
}

const MyButton: FC<ButtonProps> = ({ className, style, size = 'default', onClick, children }) => {

    let buttonClass = size === 'default' ? s.button : size === 'large' ? [s.button, s.large].join(' ') : [s.button, s.small].join(' ');

    return (
        <button
            style={style}
            onClick={onClick}
            className={className ? [buttonClass, className].join(' ') : buttonClass}
        >
            {children}
        </button>
    )
}

export default React.memo(MyButton);