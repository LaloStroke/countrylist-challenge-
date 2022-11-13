import React, { useState } from "react";
import SelectOption from "../SelectOption/SelectOption";

const Select: React.FC<{ regions: Regions[]; handleSelect: (regions: Regions) => void }> = ({
  regions,
  handleSelect
}): JSX.Element => {
  const [filterActive, setFilterActive] = useState(false);
  return (
    <div>
      <button onClick={() => setFilterActive(!filterActive)}>Search</button>

      {filterActive && (
        <ul>
          {regions.map((region) => {
            return <SelectOption key={region} region={region} handleSelect={handleSelect} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
