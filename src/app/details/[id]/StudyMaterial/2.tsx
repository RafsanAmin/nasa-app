import React from 'react';

const Two = () => {
  return (
    <div>
      <article className="a2">
        <section>
          <h3>What are Aerosols?</h3>
          Aerosols are tiny particles that float in the air, like dust, sea salt, or pollution.
          According to NASA, aerosols impact the climate in two major ways: direct and indirect
          effects.
        </section>
        <img src="/image/details/a2/1.png" alt="" />
      </article>
      <article className="a1">
        <img src="/image/details/a2/2.png" alt="" />

        <p>
          <section>
            <h3>Direct:</h3>
            Aerosols can either reflect or absorb sunlight, which influences Earth&apos;s
            temperature:
            <ol>
              <li>
                Cooling Effect: Aerosols like sulfates scatter sunlight, sending it back into space.
                This reduces the amount of sunlight reaching the Earth&apos;s surface, causing a
                cooling effect.
              </li>
              <li>
                Warming Effect: Certain aerosols, such as black carbon (soot), absorb sunlight and
                heat the atmosphere. This absorption leads to localized warming, contributing to
                overall climate change.
              </li>
            </ol>
          </section>
          <section>
            <h3>Indirect Effects:</h3>
            Aerosols also affect how clouds form and behave, which further impacts Earth&apos;s
            climate:
            <ol>
              <li>
                Cloud Brightness (Albedo): Aerosols can make clouds brighter by increasing the
                number of water droplets in them. Brighter clouds reflect more sunlight, which can
                have a cooling effect on the planet.
              </li>
              <li>
                Cloud Lifespan: Aerosols can make clouds last longer, which also influences how much
                sunlight is reflected or trapped, altering Earth&apos;s energy balance. This also
                impacts rainfall patterns.
              </li>
            </ol>
          </section>
        </p>
      </article>
      <article className="a2">
        <section>
          <p>
            PACE aims to improve the characterization of different types of aerosols, their sources,
            and how they interact with clouds. The high-resolution data from PACE will help clarify
            aerosols role in climate models, making predictions more accurate.
          </p>
          <p>
            Aerosols and the ocean are connected in an interesting way! When fall onto the ocean,
            they can actually change how things live and grow there. Some of these particles help
            tiny plants in the ocean, called phytoplankton, grow better. These plants are super
            important because they help produce oxygen and remove carbon dioxide from the air.
          </p>
          <p>
            But it goes both ways! The ocean also sends particles and gases back into the air,
            called aerosol precursors. These can turn into more aerosols, which then affect the air
            around us and even change the weather. So, the ocean and the air are always working
            together, and they both help control Earth&apos;s climate!
          </p>
        </section>
        <img src="/image/details/a2/3.png" alt="" />
      </article>
    </div>
  );
};

export default Two;
