import React, { useState } from "react";

const Footer = props => {
  const [selected, setSelected] = useState(props.chapter[0].aya_number);
  let chapter = props.chapter;

  function handleChange(e) {
    console.log(e);
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  return (
    <div>
      Ke Ayat:
      <select onChange={handleChange} value={selected}>
        {chapter.map((aya, index) => (
          <option value={aya.aya_number} key={index}>
            {aya.aya_number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Footer;
