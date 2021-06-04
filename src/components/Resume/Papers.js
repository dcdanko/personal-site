import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><a href={data.url}>{data.title}</a></h4>
      <p className="school">{data.authors} <b>{data.journal}</b>, {data.year}</p>
    </header>
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    journal: PropTypes.string,
    year: PropTypes.number,
    url: PropTypes.string,
    authors: PropTypes.string,
  }).isRequired,
};

const Papers = ({ data }) => {
  const papers = data.filter((blob) => blob.show);
  const peers = papers.filter((blob) => !blob.preprint);
  const pres = papers.filter((blob) => blob.preprint);
  return (
    <div className="publications">
      <div className="link-to" id="publications" />
      <div className="title">
        <h3>Publications</h3>
      </div>
      <h4>Selected</h4>
      {peers.filter((blob) => blob.selected).map((blob) => (
        <>
          <Publication data={blob} />
          <br />
        </>
      ))}
      <h4>Peer Reviewed</h4>
      {peers.filter((blob) => !blob.selected).map((blob) => (
        <>
          <Publication data={blob} />
          <br />
        </>
      ))}
      <h4>Preprints</h4>
      {pres.map((blob) => (
        <>
          <Publication data={blob} />
          <br />
        </>
      ))}
    </div>
  );
};

Papers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    journal: PropTypes.string,
    year: PropTypes.number,
    url: PropTypes.string,
    authors: PropTypes.string,
  })),
};

Papers.defaultProps = {
  data: [],
};

export default Papers;
