import React, { MouseEvent } from 'react';
import join from 'classnames';
import BootstrapButton from 'react-bootstrap/Button';
import styles from './Button.scss';

export interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  variant?: 'link' | 'primary' | 'secondary' | 'danger';
  text?: string;
  theme?: 'link' | 'confirm' | 'cancel';
  onClick: (event: MouseEvent) => void;
}

export default function Button(
  // ES6 default props for functional components
  {
    className = '',
    type = 'button',
    variant = 'link',
    text = 'OK',
    disabled = false,
    theme = 'confirm',
    onClick = (): void => {}
  }: ButtonProps
) {
  const handleClick = (event: MouseEvent): void => {
    event.stopPropagation();
    !disabled && onClick && onClick(event);
  };

  const buttonCustomClass = join(
    styles.button,
    className,
    theme && styles[theme]
  );

  return (
    <BootstrapButton
      className={buttonCustomClass}
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </BootstrapButton>
  );
}
