const initialState = {
  dwarves: [
    {
      name: "Ammon",
      height: "5",
      clan: "Bardards",
      occupation: "minestructor",
      beard: "gold"
    },
    {
      name: "James",
      height: "4",
      clan: "SwellGuys",
      occupation: "Spider Fighter",
      beard: "blue"
    },
    {
      name: "Steven",
      height: "4.5",
      clan: "Twins",
      occupation: "Man-Wrangler",
      beard: "green"
    }
  ]
};

let dwarfId = 0;

const dwarfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DWARF_ADD":
      return {
        dwarves: [...state.dwarves, action.payload]
      };
    default:
      return state;
  }
};

export default dwarfReducer;
