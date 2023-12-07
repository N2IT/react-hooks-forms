import React  from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  newsletter,
  handleNewsletterChange,
  number,
  handleNumberChange,
  isInvalidNumber,
}) {

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input id="newsletter" type="checkbox" onChange={handleNewsletterChange} value={newsletter} />
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
    </form>
  )
}

export default Form;
