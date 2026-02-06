import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import ElectricalServiceDetailsSideBar from "../components/ElectricalServiceDetails-SideBar";

function ElectricalServiceDetails() {
    return (
        <div className="electrical-service-details-page">
            <HeaderLogin />
            <ElectricalServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default ElectricalServiceDetails;