import React from 'react'

export const ChicletValue = props => (
  <div className="chiclet-value facet-value">
    <span>{ props.name + ': ' + props.value }</span>
    &nbsp;
    <i className="fa fa-close action" onClick={props.clear}></i>
  </div>
)

export const Chiclet = props => (
  <div className="chiclet">
  {
    props.values.map(value => (
      <ChicletValue key={props.name + props.value}
                    name={props.name} value={value}
                    clear={() => props.clear({ name: props.name, value })} />
    ))
  }
  </div>
)

const Chiclets = props => (
  <div className="chiclets">
  {
    Object.keys(props.constraints)
    .map(name => {
      let c = props.constraints[name]
      c.name = name
      return c
    })
    .filter(constraint => constraint.values && constraint.values.length)
    .map(constraint => (
      <Chiclet key={constraint.name} name={constraint.name} values={constraint.values}
               clear={props.clear} />
    ))
  }
  </div>
)

export default Chiclets
