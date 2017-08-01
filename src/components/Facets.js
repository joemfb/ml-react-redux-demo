import React from 'react'

export const FacetValue = props => (
  <div className="facet-value">
    <i className="fa fa-plus-circle action" onClick={props.match}></i>
    &nbsp;
    <span>{ props.value }</span>
    &nbsp;
    <span>({ props.count })</span>
  </div>
)

export const Facet = props => (
  <div className="facet">
    <h4>{ props.name }</h4>
    <div>
    {
      props.values.map((value, i) => (
        <FacetValue key={props.name + '-' + i} value={value.name} count={value.count}
                    match={() => props.match(value.name)} />
      ))
    }
    </div>
  </div>
)

const Facets = props => (
  <div className="facets">
    {
      Object.keys(props.facets)
      .map(name => {
        let f = props.facets[name]
        f.name = name
        return f
      })
      .filter(facet => facet.facetValues && facet.facetValues.length)
       .map(facet => (
          <Facet key={facet.name} name={facet.name}
                 values={facet.facetValues}
                 match={value => props.match({name: facet.name, value})} />
        )
      )
    }
  </div>
)

export default Facets
