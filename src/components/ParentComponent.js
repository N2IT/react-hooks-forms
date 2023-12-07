import React, { useState } from 'react'
import Form from './Form';
import DisplayData from './DisplayData';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(false);
    const [ number, setNumber ] = useState(0);
    const [ isInvalidNumber, setIsInvalidNumber ] = useState(null)
    
    function handleNumberChange(event) {
      const newNumber = parseInt(event.target.value);
      if(newNumber >= 0 && newNumber <= 5) {
        return setNumber(newNumber)
      } else {
        return setIsInvalidNumber(`${newNumber} is not a valid number.`)
      }
    }

    function handleNewsletterChange(event) {
        setNewsletter(event.target.checked)
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleNewsletterChange={handleNewsletterChange}
                newsletter={newsletter}
                number={number}
                handleNumberChange={handleNumberChange}
                isInvalidNumber={isInvalidNumber}

            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default ParentComponent