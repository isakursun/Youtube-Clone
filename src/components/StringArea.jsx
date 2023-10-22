import React, { useState } from "react";

const StringArea = ({ text, max }) => {
  const [expand, setExpand] = useState(false);

  //? gösterilecek yazı
  let shortText = text;

  //?yazının ne kadarının gösterileceğine karar verme
  if (text.length > max && !expand) {
    shortText = text.slice(0, max) + "...daha fazla";
  }

  return <p onClick={() => setExpand(!expand)}>
    {shortText.split('\n').map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ))}
    </p>;
};

export default StringArea;
