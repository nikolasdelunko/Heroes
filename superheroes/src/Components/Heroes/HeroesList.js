import React from "react";
import "./Style.css";
import Hero from "./Hero";
import { useSelector } from "react-redux";

export default function HeroesList() {
  const data = useSelector((state) => state.hero.heroes);


  return (
    <div>
		{data ?
      <ul className="items-page">
        {data.result?.map((item) => (
          <Hero key={item.id} card={item} />
        ))}
      </ul> : <p>Loading</p>
		}
    </div>
  );
}
