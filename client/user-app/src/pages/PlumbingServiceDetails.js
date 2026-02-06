import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import PlumbingServiceDetailsSideBar from "../components/PlumbingServiceDetails-SideBar";

function PlumbingServiceDetails() {
    return (
        <div className="plumbing-service-details-page">
            <HeaderLogin />
            <PlumbingServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default PlumbingServiceDetails;