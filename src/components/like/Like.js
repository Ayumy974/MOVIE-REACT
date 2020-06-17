import React, { useState } from 'react';
import style from './like.module.scss';

const bookmark = require('./../../assets/icons/bookmark.svg');
const whiteBookmark = require('./../../assets/icons/filled-bookmark.svg');
const like = require('./../../assets/icons/heart.svg');
const redLike = require('./../../assets/icons/red-heart.svg');

const Like = ({ date, nbLike }) => {
    const [likes, setLikes] = useState(nbLike);
    const [activeLikes, setActiveLikes] = useState(false);
    const [activeBook, setActiveBook] = useState(false);

    const toggleLike = () => {
        setActiveLikes(!activeLikes);
        setLikes(nbLike + 1);
        if (activeLikes) {
            setLikes(nbLike);
        }
    }
    const toggleBookmark = () => {
        setActiveBook(!activeBook);
    }

    return (
        <div className={style.container}>
            <time>{date}</time>
            <ul className={style.like}>
                <li><img onClick={toggleBookmark} src={activeBook ? whiteBookmark : bookmark} alt="bookmark"></img></li>
                <li>
                    <div className={style.heart}>
                        <p className={style.rank}>{likes}</p>
                        <img onClick={toggleLike} src={activeLikes ? redLike : like} alt="heart" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Like;