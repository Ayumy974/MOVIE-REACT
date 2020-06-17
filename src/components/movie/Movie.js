import React from 'react';
import Like from './../like/Like';
import style from './movie.module.scss';

const Movie = ({ date, title, category, resume, trailer, image, nbLike }) => {

    const bgStyle = { 
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className={style.wrapper} style={bgStyle}>
            <Like date={date} nbLike={nbLike} />
            <article>
                <h2><span>Titre:</span> <em>{title}</em></h2>
                <p><span>Catégorie:</span> <em>{category}</em></p>
                <p><span>Synopsis:</span><br></br> "<em>{resume}</em>"</p>
                <p className={style.trailer}><a href={trailer} target="_blank">Trailer</a></p>
            </article>
        </div>
    )
}

export default Movie;