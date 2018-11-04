import React, {Component} from 'react'
import { 
    Card, 
    CardBody, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    CardTitle } from 'reactstrap';

class Search extends Component {
    state = {
        topic:"",
        startYear:"",
        endYear:""
    }

    handleInputChange = event => {
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

    }

    render() {
        return(
            <Card>
                <CardBody>
                    <CardTitle>Search</CardTitle>
                </CardBody>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for='topicInput'>Topic</Label>
                            <Input onChange={this.handleInputChange} value={this.state.topic} type='text' name='topic' id='topicInput'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='startYearInput'>Start Year</Label>
                            <Input onChange={this.handleInputChange} value={this.state.startYear} type='date' name='startYear' id='startYearInput'/>
                        </FormGroup><FormGroup>
                            <Label for='endYear'>End Year</Label>
                            <Input onChange={this.handleInputChange} value={this.state.endYear} type='date' name='endYear' id='endYearInput'/>
                        </FormGroup>
                        <Button onClick={this.handleFormSubmit}>Search</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

export default Search   

