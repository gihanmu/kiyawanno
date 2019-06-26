import React from "react";
import { Icon, Input } from "semantic-ui-react";

const SearchBar = props => (
  <Input
    icon="search"
    placeholder="Search..."
    size="big"
    style={{ width: "80%" }}
  />
);
export default SearchBar;
