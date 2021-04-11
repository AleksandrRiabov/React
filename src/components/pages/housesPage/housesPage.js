import React from "react";
import {Col, Row, Container} from "reactstrap";
import "./housesPage.css";
import ItemDetails, {Field} from "../../itemDetails/";
import ItemList from "../../itemList/";
import ErrorMessage from '../../errorMessage/errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from "../../rowBlock";



export default class HousesPage extends React.Component {
	gotService = new gotService();

	state = {
		selectedItem: 130,
		error: false
	}


	componentDidCatch() {
			console.log("Error, fix it before publish HOUSES PAGE");
			this.setState({error: true});
		}
	
	onItemSelected = (id) => {
		this.setState({selectedItem: id});
		}
	
	
	
	render () {
		
		if (this.state.error) {
			return <ErrorMessage/>
		}
		
		
		const itemList = (
			<ItemList 
					getData={this.gotService.getAllHouses} 
					onItemSelected={this.onItemSelected} 
					renderItem={(item) => item.name}/>
		)
		
		
		const itemDetails = (
		    <ItemDetails 
				selectedItem={this.state.selectedItem}
				 getData={this.gotService.getHouse}>
				<Field field="name" label={"Name"}/>
				<Field field="region" label={"Region"}/>
				<Field field="coatOfArms" label={"Coat Of Arms"}/>
			</ItemDetails>	
		)
		
		return (
		       <RowBlock 
				   left={itemList}
				   right={ itemDetails} />
		)
	}
	
}