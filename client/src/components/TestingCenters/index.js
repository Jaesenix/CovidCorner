import React, { Component } from "react";
import API from '../../utils/API';
import SearchForm from '../SearchForm';
import { List } from '../SearchResults';
import Center from '../Center';
import "./style.css"

class TestingCenter extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            results: [],
            loading: true,
            search: "",
            States: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
            error: ""
        };
    }

    handleInputChange = event => {
        console.log("clicked")
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const location = this.state.search.trim().toLowerCase()
        console.log(location)
        API.getTestingCenters(location).then(res => {
            this.setState({ results: res.data })
            console.log(res.data)
        }).catch(err => this.setState({ error: err.message }))
    }

    // Map the results
    render() {
        return (
            <div className="testing-center"> 
                <div>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        States={this.state.States}
                    />
                    <div>
                        {this.state.results.length ? (
                        <List>
                            {this.state.results.map(center => (
                                <Center
                                    key={center.id}
                                    name={center.name}
                                    description={center.description}
                                    address={center.physical_address[0].address_1}
                                    city= {center.physical_address[0].city}
                                    state={center.physical_address[0].state_province}
                                    postal_code={center.physical_address[0].postal_code}
                                />
                            ))}
                        </List> 
<<<<<<< HEAD
                        ) : ( 
                            <>
                            </>
=======
                        ) : (
                            <h2 className="no-results">No results</h2>
>>>>>>> 384ee5a5a785d8468e669f177087d9e8ed99572c
                        )}
                    </div>
                </div>
            </div>
        );
    };
}

export default TestingCenter;
