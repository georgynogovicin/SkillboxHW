import React, {useEffect, useState} from 'react';
import styles from './icon.css';
import * as SvgIcon from './../Icons'
import classNames from "classnames";
import {EIconNames} from '../../constants/constants';

export type TSizes = 12 | 16;

interface IconProps {
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    icon?: React.ReactNode;
    name: EIconNames;
}

export function Icon(props :IconProps){
    const {size = 16, mobileSize,desktopSize, tabletSize,  name, icon} = props;
    const [svgIconComponent, setSvgIconComponent] = useState(icon);
    const classes = classNames(
        styles.icon,
        styles[`s${size}`],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`d${desktopSize}`]]: desktopSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
    );

    useEffect(() => {
        if(typeof svgIconComponent === 'undefined'){
            setSvgIconComponent(SvgIcon[name]);
        }
    },[]);

    return(
        <div className={classes}>
            {svgIconComponent}
        </div>
    )
}