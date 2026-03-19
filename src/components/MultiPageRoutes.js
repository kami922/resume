import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import MultiVendorEcommerce from "./casestudies/MultiVendorEcommerce";
import Nutz from "./casestudies/Nutz";
import WemoFit from "./casestudies/WemoFit";
import GoReSymSignatureBlog from "./blogs/GoReSymSignatureBlog";
import GoReSymStringsBlog from "./blogs/GoReSymStringsBlog";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
            <Route exact path={'/case-study/multi-vendor-ecommerce'} element={<MultiVendorEcommerce />} />
            <Route exact path={'/case-study/nutz'} element={<Nutz />} />
            <Route exact path={'/case-study/wemofit'} element={<WemoFit />} />
            <Route exact path={'/blog/goresym-function-signature-reconstruction'} element={<GoReSymSignatureBlog />} />
            <Route exact path={'/blog/goresym-strings-feature'} element={<GoReSymStringsBlog />} />
        </Routes>
    )
}