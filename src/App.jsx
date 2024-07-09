// src/App.jsx
import React from 'react';
import './index.css';
import { NavbarComp } from './Components/NavbarComp';
import AboutSection from './Components/AboutSection';
import ImageGallery from './Components/ImageGallery';
import {Cards} from './Components/Cards';
import {Footer_comp} from './Components/Footer_comp';
import {cardData} from '../src/assets/Image';

function App() {
  return (
    <div className="px-3 sm:px-6 md:px-12">
        <NavbarComp />
        {/* Section 1 */}
      <section className="h-screen flex items-center justify-center bg-gray-200">
      <AboutSection />
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center bg-gray-300">
      <ImageGallery />
      </section>

      {/* Section 3 */}
      <section className="h-screen flex items-center justify-center bg-gray-400">
      <Cards cardData={cardData} />
      </section>

      {/* Section 4 */}
      {/* <section className="h-screen flex items-center justify-center bg-gray-500">
        <h1 className="text-4xl font-bold">Welcome to Section 4</h1>
      </section> */}
      <Footer_comp />
      </div>
  );
}

export default App;
