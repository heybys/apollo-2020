import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TOGGLE_LIKE_MOIVE = gql`
  mutation togglelikeMovie($id: Int!, $isLiked: Boolean!) {
    togglelikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

export default ({ id, bg, isLiked }) => {
  const [togglelikeMovie] = useMutation(TOGGLE_LIKE_MOIVE, {
    variables: {
      id: parseInt(id),
      isLiked
    }
  });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={togglelikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};
