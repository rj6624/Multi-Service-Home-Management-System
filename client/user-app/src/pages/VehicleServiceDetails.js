import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import VehicleServiceDetailsSideBar from "../components/VehicleServiceDetails-SideBar";

function VehicleServiceDetails() {
    return (
        <div className="vehicle-service-details-page">
            <HeaderLogin />
            <VehicleServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default VehicleServiceDetails;