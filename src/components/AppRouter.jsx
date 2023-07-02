import React from "react";
import { Route, Routes } from "react-router-dom";
import Top100 from "../pages/Top100";
import { Registration } from "../pages/Registration";
import { ErrorPage } from "../pages/ErrorPage";
import { AnimeByIdPage } from "../pages/AnimeByIdPage";

export const AppRouter = ({ props, topHundred }) => {
    return (
        <Routes>
            <Route path="/Top100" element={<Top100 topHundred={topHundred} />} />
            <Route path="/Top25/:mal_id" element={<AnimeByIdPage />} />
            <Route path="/Top100/:mal_id" element={<AnimeByIdPage />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};
