"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import css from "./page.module.css";

const TV = () => {
  const category = useParams();
  const [tv, setTv] = useState([]);
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const getTv = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${category.id}?api_key=${api_key}`
      );
      console.log(data);
      setTv(data.results);
      // console.log(tv)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tv.length === 0) getTv();
  }, []);

  return (
    <>
      <div>{category.id}</div>
      <div className={css.main}>
        {tv &&
          tv.map((d) => {
            return (
              <div key={d.id} className={css.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`}
                />
                <div className={css.card_title}>
                  <h3>{d.name}</h3>
                </div>
                <div className={css.card_content}>
                  <div className={css.card_content_user_info}>
                    -{" "}
                    <div className={css.card_content_user_contact}>
                      <h4>⭐{d.vote_average} / 10</h4>
                      <p>Release Date: {d.first_air_date}</p>
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

export default TV;
