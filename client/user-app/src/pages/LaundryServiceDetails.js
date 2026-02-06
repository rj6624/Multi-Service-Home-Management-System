import HeaderLogin from '../components/HeaderLogin';
import './LaundryServiceDetails.css';
import LaundryServiceDetailsSideBar from '../components/LaundryServiceDetails-SideBar';
import Footer from '../components/Footer';

function LaundryServiceDetails() {
    return (
        <div>
            <HeaderLogin />
            <LaundryServiceDetailsSideBar />
            <Footer />
        </div>
    );
}

export default LaundryServiceDetails;