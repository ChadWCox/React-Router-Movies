import React from 'react';
import { Link } from "react-router-dom"

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link className="home-button" style={{color: 'black', textDectoration:"none"}} to="/">
        Home
      </Link>
    </div>
  );
}
