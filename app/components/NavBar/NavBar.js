import React from "react";
import css from "./NavBar.module.css"
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={css.container}>
        <Link href="/">Home</Link>
        {/* <a href="#news">News</a> */}
        <div className={css.dropdown}>
          <button className={css.dropbtn}>Movies</button>
          <div className={css.dropdown_content}>
            <Link href={`/movies/popular`}>Popular</Link>
            <Link href={`/movies/upcoming`}>Upcoming</Link>
            <Link href={`/movies/top_rated`}>Top Rated</Link>
          </div>
        </div>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>TV Shows</button>
          <div className={css.dropdown_content}>
            <Link href={`/tv/popular`}>Popular</Link>
            <Link href={`/tv/on_the_air`}>On TV</Link>
            <Link href={`/tv/top_rated`}>Top Rated</Link>
          </div>
        </div>
        {/* <a href="#news">Link</a> */}
      </div>
    </>
  );
};

export default NavBar;
