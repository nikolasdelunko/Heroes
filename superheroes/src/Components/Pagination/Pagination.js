import React, { useEffect, useState } from "react";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { setHero } from "../../store/hero/heroSlice";
import axios from "axios";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.hero.heroes);
  const aciveHero = useSelector((state) => state.helpers.activeHero);

  const limit = 5;

  const getInfo = async () => {
    const res = await axios(
      `http://localhost:8000/api/heroes?page=${page}&limit=${limit}`
    );
    return dispatch(setHero(res.data));
  };

  useEffect(() => {
    getInfo();
  }, [page, aciveHero]);

  const currentPage = data?.next
    ? data?.next.page - 1
    : data?.previous?.page + 1;

  // ! хочу доробити пагинацію ще по цыфрам сторінок
  // const pages = Math.round(data?.length / limit);

  return (
    <div>
      <div className="container">
        <ul className="pagination">
          <li
            className="pagination-el"
            onClick={() => {
              if (!data.previous) {
                setPage(1);
              } else {
                setPage(currentPage - 1);
              }
            }}
          >
            <a>Previous</a>
          </li>
          <li>
            <a>{currentPage ? currentPage : 1}</a>
          </li>
          <li
            className="pagination-el"
            onClick={() => {
              if (!data.next) {
                setPage(1);
              } else {
                setPage(currentPage + 1);
              }
            }}
          >
            <a>Next</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
