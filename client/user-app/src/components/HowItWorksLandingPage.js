import './HowItWorksLandingPage.css';
import { SlCursor } from "react-icons/sl";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";

function HowItWorksLandingPage() {
    const steps = [
        {
            number: "01",
            icon: <SlCursor />,
            title: "Choose a Service",
            description: "Browse our wide range of home services and select what you need."
        },
        {
            number: "02",
            icon: <BsCalendar3 />,
            title: "Select Date & Time",
            description: "Pick a convenient time slot that works best for your schedule."
        },
        {
            number: "03",
            icon: <IoLocationOutline />,
            title: "Track Service Provider Live",
            description: "Follow your service provider's location in real-time on the map."
        },
        {
            number: "04",
            icon: <BsWallet2 />,
            title: "Pay Securely & Review",
            description: "Complete payment securely and share your experience with a review."
        }
    ];

    return (
        <div className="how-it-works">
            <div className="how-it-works-header">
                <h2>How It Works</h2>
            </div>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step-wrapper">
                        <div className="step-card">
                            <div className="step-badge">Step {step.number}</div>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && <div className="step-connector"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorksLandingPage;
