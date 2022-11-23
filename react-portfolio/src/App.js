import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
return <div>
<Header/>
<div className="portfolio-container">
<PortfolioContainer />
</div>
<Footer />
</div>
}
export default App;
