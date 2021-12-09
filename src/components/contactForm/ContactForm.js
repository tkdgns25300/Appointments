import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder='Contact Name'
        />
      </label>
      <br />
      <label>
        <input
          type='tel'
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          placeholder='Phone Number (###-###-####)'
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        />
      </label>
      <br />
      <label>
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Contact Email'
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
