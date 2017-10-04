import React, { Component } from "react";
import { DropdownButton, MenuItem, Col, Thumbnail, Button, Grid } from 'react-bootstrap';
import axios from 'axios';
import Hero from "../components/Hero";
import Container from "../components/Container";
//import API from "../utils/API";



class Discover extends Component {
  constructor() {
    super();
    this.state = {
      recipe_image: "",
      link: "",
      recipes: []
    };
  }

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
//    this.loadRecipe();
  }

  

  loadRecipe = (recipe, index) => {
    return <Col xs={6} md={4} key={index}>
      <Thumbnail src={recipe.image_url} alt="242x200" width="200px" height="200px">
        <h3>{recipe.title}</h3>
        <p>
          <Button href="'/recipes/'+recipe.recipe_id" bsStyle="primary">Add Ingredients</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>   
  };

  getSelected = (eventKey, event) => {
    axios.post('http://localhost:3001/api/recipes', {recipe: eventKey})
    .then(res => this.setState({recipes: res.data}))
    .catch(err => console.log('err occured', err));
  };



  render() {
    const recipes = this.state.recipes;
    const recipeMap = recipes ? recipes.map((recipe, index) => this.loadRecipe(recipe, index)) : [];
    return (
      <div className="container" style={{ minHeight: "80%" }}>
        <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1>SmartGrocer</h1>
      <h2>Meal Planning Done Right</h2>
    </Hero>
        <div>

    <DropdownButton title='Select Recipe' id={`recipe-dropdown`} onSelect={this.getSelected.bind(this)}>
      <MenuItem eventKey="vegan">Vegan</MenuItem>
      <MenuItem eventKey="vegetarian">Vegetarian</MenuItem>
      <MenuItem eventKey="chicken">Chicken</MenuItem>
      <MenuItem eventKey="beef">Beef</MenuItem>
      <MenuItem eventKey="pork">Pork</MenuItem>
    </DropdownButton>

        </div>
        <h1 className="text-center">Recipes</h1>


  <Grid>
{recipeMap}
  </Grid>
     

        <h3 className="text-center">
          Add a recipe to your meal plan
        </h3>
      </div>
    );
  }
}

export default Discover;
