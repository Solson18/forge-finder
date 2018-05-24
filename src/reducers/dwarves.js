import services from "../service";

let dwarfId = 200;

const dwarves = (state = [], action) => {
  switch (action.type) {
    case "DWARF_ADD":
      dwarfId++;
      services.dwarves.add({ ...action.payload });
      return [...state, { ...action.payload, id: dwarfId }];
    case "DWARF_LOAD":
      console.log("loading dwarves!");
      if (action.payload.length > 0) {
        dwarfId = action.payload
          .map(d => d.id)
          .reduce((max, num) => (max = max > num ? max : num));
        console.log(dwarfId);
      }
      return [...action.payload];
    case "DWARF_REMOVE":
      services.dwarves.delete(action.payload);
      return [...state.filter(d => d._id !== action.payload)];

    default:
      return state;
  }
};

export default dwarves;
