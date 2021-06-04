import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Papers from '../components/Resume/Papers';

import Experience from '../components/Resume/Experience';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import papers from '../data/resume/papers';

const sections = [
  'Education',
  'Experience',
  'Publications',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Papers data={papers} />
      <References />

    </article>
  </Main>
);

export default Resume;
