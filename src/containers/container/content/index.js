import React from 'react';

import classes from './content.module.css';

import Filter from '../../../components/filter';
import MovieList from '../../../components/movieList';

import movie_1 from '../../../assets/images/django.jpg';
import movie_2 from '../../../assets/images/moonlight.jpg';
import movie_3 from '../../../assets/images/fight_club.jpg';
import movie_4 from '../../../assets/images/heisenberg.jpg';
import movie_5 from '../../../assets/images/leon.jpg';
import movie_6 from '../../../assets/images/the_birds.jpg';
import movie_7 from '../../../assets/images/pulp.jpg';
import movie_8 from '../../../assets/images/wonder.jpg';


const DATA = [
    {
        name: 'Django Unchained',
        category: 'Action',
        poster: movie_1,
        rating: 8.5,
    },
    {
        name: 'Moonlight',
        category: 'Drama',
        poster: movie_2,
        rating: 9.1,
    },
    {
        name: 'Fight Club',
        category: 'Action Comedy',
        poster: movie_3,
        rating: 7.8,
    },
    {
        name: 'Heisenberg',
        category: 'Action Horror',
        poster: movie_4,
        rating: 9.3,
    },
    {
        name: 'Leon',
        category: 'Action Drama',
        poster: movie_5,
        rating: 7.9,
    },
    {
        name: 'The Birds',
        category: 'Drama',
        poster: movie_6,
        rating: 9.1,
    },
    {
        name: 'Pulp Fiction',
        category: 'Action Comedy',
        poster: movie_7,
        rating: 7.8,
    },
    {
        name: 'Wonder Woman',
        category: 'Action Drama',
        poster: movie_8,
        rating: 7.8,
    },
];

class Content extends React.Component {
    render () {
        return (
            <div className={classes.content}>
                <Filter>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        { DATA.map((list) => <MovieList name={list.name} category={list.category} poster={list.poster} rating={list.rating}/> )}
                    </div>
                </Filter>
            </div>
        );
    }
}

export default Content;