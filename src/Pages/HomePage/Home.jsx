
import Header from "./Header";
import Banner from "./Banner";
import Amount from "./Amount";
import Elements from "./Elements";
import Beneficial from "./Beneficial";


const Home = () => {
    return (
        <div className="p-5 bg-[#d9f99d]">
            <h1 className="text-2xl text-center">this is home page</h1>
            <Header></Header>
            <Banner></Banner>
            <Amount></Amount>
            <Elements></Elements>
            <Beneficial></Beneficial>
        </div>
    );
};

export default Home;