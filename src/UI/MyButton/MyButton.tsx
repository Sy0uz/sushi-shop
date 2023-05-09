import React, { FC, PropsWithChildren, CSSProperties } from 'react'
import s from './MyButton.module.scss'

interface ButtonProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
    size?: 'large' | 'default' | 'small';
    type?: 'default' | 'ghost';
    onClick?: () => void;
}

const MyButton: FC<ButtonProps> = ({ className, style, size = 'default', type = 'default', onClick, children }) => {

    let buttonClass: string;

    switch (size) {
        case 'large':
            buttonClass = [s.button, s.large].join(' ');
            break;
        case 'small':
            buttonClass = [s.button, s.small].join(' ');
            break;
        default:
            buttonClass = s.button;
            break;
    }

    if (type === 'ghost')
        buttonClass = [buttonClass, s.ghost].join(' ');

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