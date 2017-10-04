import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Hero from "../components/Hero";
import GroceryList from "../components/GroceryList";


class Plan extends Component {
render() {
    return (
      <Container style={{ minHeight: "80%" }}>
       <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1>SmartGrocer</h1>
      <h2>Meal Planning Done Right</h2>
    </Hero>
        <h1 className="text-center">Your Grocery List</h1>
        <Grid>
        {GroceryList}
        </Grid>
      </Container>

    );
  }
}


export default Plan;
