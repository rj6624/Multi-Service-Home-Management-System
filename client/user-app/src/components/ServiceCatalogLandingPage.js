import { useState, useRef, useEffect } from 'react';
import './ServiceCatalogLandingPage.css';
import plumbingImg from '../assets/images/Plumbing.png';
import electricianImg from '../assets/images/Electrician.png';
import cleaningImg from '../assets/images/Cleaning.png';
import applianceImg from '../assets/images/Appliance Repair.png';
import laundryImg from '../assets/images/Laundry.png';
import tailorImg from '../assets/images/Tailor.png';
import vehicleImg from '../assets/images/Vehicle Service.png';
import personalImg from '../assets/images/Personal Service.png';

function ServiceCatalogLandingPage() {
    const gridRef = useRef(null);
    const scrollbarRef = useRef(null);
    const thumbRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const services = [
        { name: 'Plumbing', img: plumbingImg },
        { name: 'Electrician', img: electricianImg },
        { name: 'Cleaning', img: cleaningImg },
        { name: 'Appliance Repair', img: applianceImg },
        { name: 'Laundry', img: laundryImg },
        { name: 'Tailor', img: tailorImg },
        { name: 'Vehicle Service', img: vehicleImg },
        { name: 'Personal Service', img: personalImg },
    ];

    useEffect(() => {
        const grid = gridRef.current;
        const thumb = thumbRef.current;
        const scrollbar = scrollbarRef.current;

        if (!grid || !thumb || !scrollbar) return;

        const updateScrollbar = () => {
            const scrollPercentage = grid.scrollLeft / (grid.scrollWidth - grid.clientWidth);
            const maxThumbPosition = 250 - thumb.offsetWidth;
            thumb.style.left = `${scrollPercentage * maxThumbPosition}px`;
        };

        const updateThumbSize = () => {
            const visibleRatio = grid.clientWidth / grid.scrollWidth;
            const thumbWidth = Math.max(30, 250 * visibleRatio);
            thumb.style.width = `${thumbWidth}px`;
        };

        updateThumbSize();
        updateScrollbar();

        grid.addEventListener('scroll', updateScrollbar);
        window.addEventListener('resize', () => {
            updateThumbSize();
            updateScrollbar();
        });

        return () => {
            grid.removeEventListener('scroll', updateScrollbar);
            window.removeEventListener('resize', updateThumbSize);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        e.preventDefault();
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;

            const scrollbar = scrollbarRef.current;
            const thumb = thumbRef.current;
            const grid = gridRef.current;

            if (!scrollbar || !thumb || !grid) return;

            const rect = scrollbar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const maxThumbPosition = 250 - thumb.offsetWidth;
            const newPosition = Math.max(0, Math.min(x - thumb.offsetWidth / 2, maxThumbPosition));
            
            const scrollPercentage = newPosition / maxThumbPosition;
            grid.scrollLeft = scrollPercentage * (grid.scrollWidth - grid.clientWidth);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="service-catalog">
            <div className="service-header">
                <h2>Services</h2>
            </div>
            <div className="service-container">
                <div className="service-grid" ref={gridRef}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.img} alt={service.name} />
                            <p>{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="custom-scrollbar-container">
                <div className="custom-scrollbar" ref={scrollbarRef}>
                    <div 
                        className="custom-scrollbar-thumb" 
                        ref={thumbRef}
                        onMouseDown={handleMouseDown}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCatalogLandingPage;