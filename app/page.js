"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetPopularMovies } from "@/store/Actions/tmdbActions";
import Link from "next/link";

const HomePage = () => {
  const { data } = useSelector((state) => state.tmdbReducer);
  const dispatch = useDispatch();
  // console.log(data);
  // console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(asyncGetPopularMovies());
    }
  }, []);

  return (
    <div>
      HomePage
      {/* {data && data.map((d) => {
      return(
        <div key={d.id}>
          <img src="" alt="" />
          <h3>{d.title}</h3>
          <Link href={`/details/${id}`}>Details</Link>
        </div>
      )
    })} */}
      {data &&
        data.map((d) => {
          return (
            <div key={d.id}>
              <img
                height={200}
                src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`}
                alt=""
              />
              <p>Movie Name:{d.title}</p>
              <Link href={`/details/${d.id}`}>Details</Link>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
