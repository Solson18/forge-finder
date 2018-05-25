import { combineReducers } from "redux";
import clans from "./clans";
import occupations from "./occupations";
import beards from "./beards";
import dwarves from "./dwarves";
import searchFilter from "./searchFilter";


export default combineReducers({
  dwarves,
  clans,
  occupations,
  beards,
  searchFilter,
  
});
