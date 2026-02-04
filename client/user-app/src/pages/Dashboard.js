import Header from "../components/Header";
import HeaderLogin from "../components/HeaderLogin";
import IntroDashboard from "../components/IntroDashboard";
import MostBookedServices from "../components/MostBookedServices";
import LaundryDashboard from "../components/LaundryDashboard";
import CleaningDashboard from "../components/CleaningDashboard";
import PlumbingDashboard from "../components/PlumbingDashboard";
import ElectricalworkDashboard from "../components/ElectricalworkDashboard";
import ApplianceRepairDashboard from "../components/ApplianceRepairDashboard";
import TailorDashboard from "../components/TailorDashboard";
import VehicleServiceDashboard from "../components/VehicleServiceDashboard";
import PersonalServiceDashboard from "../components/PersonalServiceDashboard";
import Footer from "../components/Footer";

function Dashboard() {
    return(
        <div>
            <HeaderLogin />
            <IntroDashboard />
            <MostBookedServices />
            <LaundryDashboard />
            <CleaningDashboard />
            <PlumbingDashboard />
            <ElectricalworkDashboard />
            <ApplianceRepairDashboard />
            <TailorDashboard />
            <VehicleServiceDashboard />
            <PersonalServiceDashboard />
            <Footer />
        </div>
    );
}

export default Dashboard;