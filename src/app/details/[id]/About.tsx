import Link from 'next/link';
import React from 'react';

const Two = () => {
  return (
    <div>
      <article className="ml-4 text-xl font-bold">
        <h2>
          <i>
            SO HOW DID WE COLLECT ALL THESE INFORMATION FOR OUR GAME? IT’S ALL THROUGH NASA PACE
            SPACECRAFT.
          </i>
        </h2>
      </article>
      <article>
        The PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) spacecraft is like Earth's superhero,
        studying our planet’s oceans and atmosphere. It uses super-advanced tools to measure tiny
        marine organisms called phytoplankton and tracks changes in ocean color. PACE also keeps an
        eye on aerosols (tiny particles in the air), helping scientists understand climate change
        and the health of our environment. Think of it as Earth's guardian, collecting data to keep
        our planet in balance!
      </article>
      <h2 className="ml-4 text-4xl font-bold">Instruments:</h2>
      <article>
        <p>
          <b>OCI (Ocean Color Instrument):</b>
          <section>
            <ul className="list-disc list-inside">
              <li>
                Measures light at many wavelengths (ultraviolet to near-infrared), analyzing how
                light reflects off the ocean’s surface and the atmosphere
              </li>{' '}
              <li>
                Provides high-resolution data on ocean color changes, which can indicate the
                presence of phytoplankton, harmful algal blooms, and other oceanic changes.
              </li>{' '}
            </ul>
            <Link
              href={'https://pace.oceansciences.org/learn/ocispectrum.htm#particlesize'}
              target="_blank"
              className="w-full max-w-[750px] mx-auto grid place-items-center text-center "
            >
              <img className="w-full  rounded-xl my-12 " src="/image/details/a0/1.png" alt="" />
              <p className="opacity-80 italic">
                The exceptionally broad range of wavelengths sensed by the OCI – from ultraviolet to
                near-infrared along with several shortwave infrared bands – will support
                investigation of the ocean, atmosphere, and key climate-related factors. A few
                examples of science topics that will be investigated using data acquired at various
                PACE wavelengths.
              </p>
            </Link>
            <p className="mt-12">
              The color of the ocean is determined by the interaction of sunlight with substances or
              particles present in seawater such as chlorophyll, a green pigment found in most
              phytoplankton species. By monitoring global phytoplankton distribution and abundance
              with unprecedented detail, the OCI will help us to better understand the complex
              systems that drive ocean ecology.
            </p>
          </section>
        </p>
      </article>
      <article className="a1">
        <img src="/image/details/a0/2.png" alt="" />
        <p>
          <b>Multi-Angle Polarimeters:</b>
          <section>
            <ul className="list-disc list-inside">
              <li>
                Two polarimeters onboard, including the Spectro-Polarimeter for Planetary
                Exploration (SPEXone) and the Hyper-Angular Rainbow Polarimeter-2 (HARP2).
              </li>{' '}
              <li>
                These instruments measure light at different angles to detect the size, shape, and
                type of aerosols, as well as cloud properties.
              </li>
            </ul>{' '}
            <p className="mt-4">
              Polarization data is key in understanding how particles influence climate change by
              absorbing or reflecting sunlight.
            </p>
          </section>
        </p>
      </article>
      <article>
        PACE’s comprehensive data collection allows scientists to study how oceans and the
        atmosphere interact, providing key insights into the global carbon cycle, climate shifts,
        and environmental health.
      </article>
    </div>
  );
};

export default Two;
