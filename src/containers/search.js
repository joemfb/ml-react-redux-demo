import React from 'react'
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addConstraint,
  rmConstraint,
  search,
  suggest,
  options
} from '../modules/search'

import Chiclets from '../components/Chiclets.js'
import Facets from '../components/Facets.js'
import Input from '../components/Input.js'
import Results from '../components/Results.js'

class Search extends React.Component {
  componentDidMount () {
    this.props.options()
    .then(() => this.props.search())
  }

  render () {
    return (
    <div className="row">
      <div className="col-md-12">
        <br/>
      </div>
      <div className="col-md-3">
        <Chiclets constraints={this.props.constraints} clear={this.props.rmConstraint}/>
        <Facets facets={this.props.facets} match={this.props.addConstraint}/>
      </div>
      <div className="col-md-9">
        <Input qtext={this.props.suggestQtext || this.props.qtext} suggest={this.props.suggest} search={this.props.search}/>
        <hr/>
        <Results results={this.props.results}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  searchPending: state.search.searchPending,
  suggestPending: state.search.suggestPending,
  optionsPending: state.search.optionsPending,
  page: state.search.page,
  pageLength: state.search.pageLength,
  qtext: state.search.qtext,
  suggestQtext: state.search.suggestQtext,
  results: state.search.response.results,
  facets: state.search.response.facets,
  constraints: state.search.constraints,
  suggestions: state.search.suggestions
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addConstraint,
  rmConstraint,
  search,
  suggest,
  options
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
