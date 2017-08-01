import React from 'react'

export const Match = props => (
  <div className="match">
  {
    props.match['match-text'].map((text, i) => (
      <em key={ 'match-text-' + i }>
      {
        text.highlight === undefined ?
        <span>{ text }</span> :
        <span className="highlight">{ text.highlight }</span>
      }
      </em>
    ))
  }
  </div>
)

export const Matches = props => (
  <div className="matches">
  {
    props.matches.map((match, i) => (
      <Match key={ 'match-' + i } match={match} />
    ))
  }
  </div>
)

export const Result = props => (
  <div className="result">
    <h4>
      <a>{ props.result.uri }</a>
    </h4>
    <Matches matches={props.result.matches} />
    <hr />
  </div>
)

const Results = props => (
  <div className="results">
  {
    props.results.map(result => (
      <Result key={result.uri} result={result} />
    ))
  }
  </div>
)

export default Results
