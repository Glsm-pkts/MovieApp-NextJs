import Movies from '@/components/Movies';
import React from 'react';

// Doğrudan API anahtarınızı buraya ekleyin
const API_KEY = '56e027cd146687945044cba80958950c';

const page = async ({ searchParams }) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${
        searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
      }?api_key=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data, "data");

    return (
      <div className="flex items-center justify-center gap-3 flex-wrap">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
    )
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Error fetching data</div>;
  }
};

export default page;
