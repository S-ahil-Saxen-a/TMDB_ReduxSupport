"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import css from "./page.module.css";

const Movies = () => {
  const category = useParams();
  const [movies, setMovies] = useState([]);
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${category.id}?api_key=${api_key}`
      );
      console.log(data);
      setMovies(data.results);
      // console.log(movies)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movies.length === 0) getMovies();
  }, []);

  return (
    <>
      <div>{category.id}</div>
      <div className={css.main}>
        {movies &&
          movies.map((d) => {
            return (
              <div key={d.id} className={css.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`}
                />
                <div className={css.card_title}>
                  <h3>{d.title}</h3>
                  {/* <h3>{d.release_date}</h3> */}
                  {/* <p>742 Evergreen Terrace</p> */}
                </div>
                <div className={css.card_content}>
                  {/* <div className={css.card_content_row}>
                    <div className={css.card_content_col}>
                      <i className={`${css.fa} ${css.fa_bed}`}></i>
                      <b>3</b> Bedrooms
                    </div>
                    <div className={css.card_content_col}>
                      <i className={`${css.fa} ${css.fa_bath}`}></i>
                      <b>2</b> Bathrooms
                    </div>
                  </div> */}
                  <div className={css.card_content_user_info}>
                    {/* <img src="https://homefinder.com/images/preferred-partner-agent.jpg" /> */}
                    <div className={css.card_content_user_contact}>
                      <h4>⭐{d.vote_average} / 10</h4>
                      <p>Release Date: {d.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Movies;
