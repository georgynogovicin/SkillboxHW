import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import {EColor} from '../../constants/constants';

type TSizes = 28 | 20 | 16 | 14 | 12 |10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  tabletSize?: TSizes;
  mobileSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  upperCase?: boolean;
}

export function Text(props : ITextProps) {
  const {As = 'span', children, size, mobileSize, tabletSize, desktopSize, color = EColor.black, upperCase = false} = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`t${desktopSize}`]]: desktopSize},
    {[styles.upperCase]: upperCase},
  )

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
