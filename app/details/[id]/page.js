// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import useParams from "";
// import axios from "axios";

// const DetailsPage = () => {
//   const params = useParams();
//   const [detail, setDetail] = useState(null);
//   console.log(params);
//   const getDetails = async () => {
//     try {
//       const { data } = axios.get("");
//       console.log(data)
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     if (detail === null) getDetails();
//   }, []);

//   return <div>DetailsPage</div>;
// };

// export default DetailsPage;

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const DetailsPage = () => {

  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const [detail, setDetail] = useState(null)
  const { id } = useParams();
  console.log(id);

  const getDetails = async () => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
      );
      // console.log(data)
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(detail === null) getDetails()
  },[])

  return <div>DetailsPage</div>;
};

export default DetailsPage;
