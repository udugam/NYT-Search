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
                            <Label for='topic'>Topic</Label>
                            <Input type='text' name='topicInput' id='topic'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='startYear'>Start Year</Label>
                            <Input type='date' name='startYearInput' id='startYear'/>
                        </FormGroup><FormGroup>
                            <Label for='endYear'>End Year</Label>
                            <Input type='date' name='endYearInput' id='endYear'/>
                        </FormGroup>
                        <Button>Search</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

export default Search   

