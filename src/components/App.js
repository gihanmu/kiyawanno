import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <Grid centered columns={1} style={{ top: "50px", position: "relative" }}>
        <SearchBar />
      </Grid>
    );
  }
}

export default App;
