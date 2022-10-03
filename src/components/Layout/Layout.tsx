import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import Home from "../Home";
import { HOME, LOGIN, MY_COLLECTION, HOW_IT_WORKS, FAQ, PRIVACY_POLICY, TERMS_OF_USE } from "../../constants/routes";

const Layout = (): JSX.Element => (
    <BrowserRouter>
        <Header />
        <ScrollToTop>
            <Routes>
                <Route path={HOME} element={<Home />} />
            </Routes>
        </ScrollToTop>
        <Footer />
    </BrowserRouter>
);

export default Layout;
