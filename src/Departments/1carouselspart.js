import React from 'react';
import './1carouselspart.css';

const slides = [
  {
    image:
      'url(https://kothiwalinstitutetechnology.com/slider/images/slider1.jpg)',
    title: '',
    text:
    '',
        
    buttonText: 'ADMISSION NOW',
  },
  {
    image:
      'url(https://kothiwalinstitutetechnology.com/slider/images/sliderfair.jpg)',
    title: "",
    text: '',
    buttonText: 'RAGISTRATION CLICK HERE',
  },
  {
    image:
      'url(https://images.collegedunia.com/public/college_data/images/campusimage/1500275412labshf.JPG?mode=stretch)',
    title: '',
    text: '',
    buttonText: 'ADMIT CARD',
  },
];

const Part1 = () => {
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(1);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const toggleAutoPlay = () => setAutoplay(!autoplay);
  const nextOne = () => active < max - 1 && setActive(active + 1);
  const prevOne = () => active > 0 && setActive(active - 1);
  const isActive = (value) => (active === value ? 'active' : '');

  const setSliderStyles = () => {
    const transition = active * -100;
    return {
      width: slides.length * 100 + 'vw',
      transform: 'translateX(' + transition + 'vw)',
    };
  };

  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.image }}
      >
        <div className="slide-content">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <button className="cta-button">{item.buttonText}</button>
        </div>
      </div>
    ));

  const renderDots = () =>
    slides.map((_, index) => (
      <li className={isActive(index) + ' dots'} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));

  const renderPlayStop = () =>
    autoplay ? (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );

  const renderArrows = () => (
    <>
      <button type="button" className="arrows prev" onClick={prevOne}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={nextOne}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </>
  );

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
      <button type="button" className="toggle-play" onClick={toggleAutoPlay}>
        {renderPlayStop()}
      </button>
    </section>
  );
};

export default Part1;
