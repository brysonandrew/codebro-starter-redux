import * as React from 'react';
const s = require('./Footer.css');

export interface ISocialMediaItemProps {
    name: string;
    link: string;
    icon: JSX.Element;
}

export function FooterSocialMediaItem(props: ISocialMediaItemProps) {
    const { name, link, icon } = props;
    return (
        <a href={link}>
            <div>{name}</div>
            <div className={s.footerSocialMedia}>
                {icon}
            </div>
        </a>
    );
}
