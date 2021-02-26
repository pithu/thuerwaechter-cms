import React, { useState } from 'react';

const CLICK_DELAY = 100;

const  interactionIsDelayed = (humanInteraction) =>
    new Date().getTime() - humanInteraction > CLICK_DELAY


const obfuscateUrl = (url) => {
    if (!url) return;
    const keepCount = 2 * Math.round(url.length / 3);
    return `${url.substr(0, keepCount)}...`;
}

const ObfuscatedLink = ({ linkType, url }) => {
    const [humanInteraction, setHumanInteraction] = useState(0);

    const handleClick = (e) => {
        if (humanInteraction === 0
            || interactionIsDelayed(humanInteraction)) return;
        e.preventDefault();
    }

    const handleHumanInteraction = () => {
        if (humanInteraction > 0) {
            return;
        }
        setHumanInteraction(new Date().getTime())
    }

    const value = humanInteraction ? url : obfuscateUrl(url)
    const link = `${linkType}:${value}`

    return (
        <a
            href={link}
            onFocus={handleHumanInteraction}
            onMouseOver={handleHumanInteraction}
            onContextMenu={handleHumanInteraction}
            onClick={handleClick}
        >{value}</a>
    )

}

export default ObfuscatedLink;

