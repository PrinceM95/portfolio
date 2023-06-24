import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: "relative",
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    const leftArrowStyles = {
        position: 'absolute',
        top: '86%',
        transform: 'translate(0, -50%)',
        left: "5px",
        fontSize: "55px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
        animation: "blinker 4s linear infinite"
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '86%',
        transform: 'translate(0, -50%)',
        right: "5px",
        fontSize: "55px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
        animation: "blinker 4s linear infinite"
    };
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '10px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
            ❮</div>
        <div style={rightArrowStyles} onClick={goToNext}>
        ❯</div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} style={dotStyles} 
                onClick={() => goToSlide(slideIndex)}>
                ⚫
                </div>
            ))}
        </div>
    </div>
    )
}

export default ImageSlider