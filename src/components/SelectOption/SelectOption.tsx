import React from "react";

const SelectOption: React.FC<{ handleSelect: (regions: Regions) => void; region: Regions }> = ({
  handleSelect,
  region
}): JSX.Element => {
  return <button onClick={() => handleSelect(region)}>{region}</button>;
};

export default SelectOption;
