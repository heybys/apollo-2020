import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_MOVIES = gql`
    query {
        movies {
            id
            title
            rating
            summary
            language
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.extraInfo}</p>;

    return (
        <div>
            <h2>Home</h2>
            {data.movies.map(({ id, title, rating }) => (
                <div key={id}>
                    <span>Title : </span>
                    {title}
                    <br />
                    <span>Rating : </span>
                    {rating}
                    <br />
                </div>
            ))}
        </div>
    );
};
