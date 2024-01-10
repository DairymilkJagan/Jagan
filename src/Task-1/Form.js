import React from 'react';
// import './index.css'

const Form = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    console.log('Form submitted:', name, email);
  };

  return (
    <form
 
onSubmit={handleSubmit}>

      
<label
 
htmlFor="name">Name:</label>

      
<input
 
type="text"
 
id="name"
 
value={name}
 
onChange={(e) => setName(e.target.value)} />
      <br />

      
<label
 
htmlFor="email">Email:</label>

      
<input
 
type="email"
 
id="email"
 
value={email}
 
onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;