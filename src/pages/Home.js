import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import ImageOne from '../assets/140Z_2106.w023.n001.614B.p1.614.jpg';
import ImageTwo from '../assets/6508430.jpg';
import ImageThree from '../assets/3255317.jpg';
import 'react-awesome-slider/dist/styles.css';
import Card from '../component/card/Card';
const styles = {
  marginTop: '5rem',
};

function Home() {
  return (
    <section style={styles}>
      <AwesomeSlider>
        <div data-src={ImageOne} />
        <div data-src={ImageTwo} />
        <div data-src={ImageThree} />
      </AwesomeSlider>
      <section>
        <Card /> <Card />
        <Card /> <Card />
      </section>
    </section>
  );
}

export default Home;
