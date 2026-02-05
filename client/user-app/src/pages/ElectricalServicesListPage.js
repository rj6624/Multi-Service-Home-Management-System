import ElectricalServicesFilterServiceCard from "../components/ElectricalServicesFilter-ServiceCard";
import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";

function ElectricalServicesListPage() {
    return (
        <div>
            <HeaderLogin />
            <ElectricalServicesFilterServiceCard />
            <Footer />
        </div>
    );
}

export default ElectricalServicesListPage;