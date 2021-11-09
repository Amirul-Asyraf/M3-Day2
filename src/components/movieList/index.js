import React from 'react';

import classes from './movieList.module.css';

class MovieList extends React.Component {
    render () {
        return (
            <div className={classes.movie_holder}>
                <div className={classes.poster_holder}>
                    <div  className={classes.poster_image} style={{backgroundImage: `url(${this.props.poster})`}}>
                        <div className={classes.rating}>
                            <p>{this.props.rating} <i class="fas fa-star"></i></p>
                        </div>
                    </div>
                </div>

                <div className={classes.movie_info}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.category}</p>
                </div>
            </div>
        );
    }
}

export default MovieList;