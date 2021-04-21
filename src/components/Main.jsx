import Banner from "./Banner";
import Discount from "./Discount";
import Footer from "./Footer";
import Jorney from "./Jorney";
import Newsletter from "./Newsletter";
import Why from "./Why";

export default function Main() {
    return(
        <div>
            <Banner />
            <Jorney />
            <Newsletter />
            <Discount />
            <Why />
            <Footer />
        </div>
    )
}