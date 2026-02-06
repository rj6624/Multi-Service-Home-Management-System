import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import CleaningServiceDetailsSideBar from "../components/CleaningServiceDetails-SideBar";

function CleaningServiceDetails() {
    return (
        <div className="cleaning-service-details-page">
            <HeaderLogin />
            <CleaningServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default CleaningServiceDetails;