import React from "react";
import {Col, Row, Container} from "reactstrap";
import "./characterPage.css";
import ItemDetails, {Field} from "../itemDetails/";
import ItemList from "../itemList/";
import ErrorMessage from '../errorMessage/errorMessage';
import gotService from '../../services/gotService';
import RowBlock from "../rowBlock";



export default class ItemacterPage extends React.Component {
	gotService = new gotService();

	state = {
		selectedItem: 130,
		error: false
	}


	componentDidCatch() {
			console.log("Error, fix it before publish");
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
					getData={this.gotService.getAllCharacters} 
					onItemSelected={this.onItemSelected} 
					renderItem={(item) => item.name}/>
		)
		
		
		const itemDetails = (
		    <ItemDetails 
				selectedItem={this.state.selectedItem}
				 getData={this.gotService.getCharacter}>
				<Field field="gender" label={"Gender"}/>
				<Field field="born" label={"Born"}/>
				<Field field="died" label={"Died"}/>
				<Field field="culture" label={"Culture"}/>	
			</ItemDetails>	
		)
		
		
		return (
		       <RowBlock left={itemList}
				   right={ itemDetails} />
		)
	}
	
}