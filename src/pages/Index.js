import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"David C. Danko's personal website. New York based Computational Biologist researching urban microbiomes."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Urban Ecologies, Human Health</Link></h2>
          <p>
            I study how human health is affected by the cities we live in.
          </p>
        </div>
      </header>
      <p>
        I am a New York based Computational Biologist researching
        how cities affect human health. My goals are to develop
        quantitative molecular measures of human health, unravel
        changes in the environment from the start of the industrial
        revolution, and design resources for public health.
      </p>
      <p>
        Currently I am a Bioinformatician at Biotia and the Director of
        Bioinformatics for the MetaSUB Consortium.
        I did my Ph.D. research at Weill Cornell under Chris Mason and
        Iman Hajirasouliha. Before that I worked at the Kennedy Institute
        in Oxford under Fiona Powrie and did my Undergraduate research at
        MIT with Bonnie Berger.
      </p>
    </article>
  </Main>
);

export default Index;
