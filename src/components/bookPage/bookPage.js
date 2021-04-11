import React, {Component} from "react";
import {Col, Row, Container} from "reactstrap";
import "./bookPage.css";
import BookDetails from "../bookDetails/";
import ItemList from "../itemList/";
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';



eport default class BookDetails extends Component {
    state = {
       selectedBook: 11,
       error: false
	}

	

	render () {
		
		if (this.state.error) {
			return <ErrorMessage/>
		}
		
		return (
				<Row>
					<Col md='6'>
						<ItemList 
							getData={this.gotService.getAllCharacters} 
							onChartSelected={this.onChartSelected} />
					</Col>
					<Col md='6'>
						<CharDetails selectedChar={this.state.selectedChar}/>
					</Col>
				</Row>
		)
	}
}