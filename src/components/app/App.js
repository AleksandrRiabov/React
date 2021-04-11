import React from "react";
import {Col, Row, Container} from "reactstrap";
import Header from "../header/";
import ItemDetails from "../itemDetails/";
import ItemList from "../itemList/";
import RandomChar from "../randomChar/";
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from "../characterPage";
import HousesPage from "../pages/housesPage";


import { Button } from 'reactstrap';

export default class App extends React.Component{

	state = {
		showRandomChar: true,
		error: false
	}
    
	componentDidCatch() {
		console.log("Error, fix it in App");
		this.setState({error: true});
	}
	
	toogleRandomCharBlock = () => {
		this.setState({showRandomChar: !this.state.showRandomChar});
	}
	
	
	
	
	render = () => {	
		const {showRandomChar, error} = this.state;
		
		if (error) {
			return <ErrorMessage/>
		}
		
		const randomChar = showRandomChar ? <RandomChar/> : null;
		const randomCharBtnText = showRandomChar ? "Hide Randon Charachter" : "Show Random Character";
		
	
		return (
			 <> 
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}}>
							{randomChar}
							<Button className="mb-3" onClick={this.toogleRandomCharBlock}>{randomCharBtnText}</Button>
						</Col>

					</Row>
					<CharacterPage/>
				    <HousesPage/>
				</Container>
			</>
  		)
	}
}


