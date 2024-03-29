import React from "react";

const MovieCard = (props) => {

        return (
            <div className="row">
                {props.movieList.map(
                    movie => {
                        return (
                            <div className="col-lg-4" key={movie.id}>
                                <div className="card mb-4 shadow-sm">
                                    <img src={movie.imageURL} className="card-img-top" alt="Sample"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.name}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button type="button" onClick={(event) =>props.delMovie(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                            <h2><span className="badge badge-info">{movie.rating}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        );
}

export default MovieCard;