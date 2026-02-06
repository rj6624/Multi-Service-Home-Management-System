import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import TailorServiceDetailsSideBar from "../components/TailorServiceDetails-SideBar";

function TailorServiceDetails() {
    return (
        <div className="tailor-service-details-page">
            <HeaderLogin />
            <TailorServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default TailorServiceDetails;