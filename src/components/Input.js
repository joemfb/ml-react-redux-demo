import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap'

const Input = props => (
  <Form className="search-input" inline onSubmit={e => { e.preventDefault(); console.log(e.target); props.search(e.target.value) }}>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" placeholder="Search..." value={props.qtext}
                     onChange={e => props.suggest(e.target.value)}/>
        <InputGroup.Button>
          <Button className="btn btn-default" type="submit">
            <i className="fa fa-search"></i>
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  </Form>
)

export default Input
