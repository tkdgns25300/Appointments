import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map(contact => contact.name)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Appointment Name'
          required
        />
      </label>
      <br />
      <label>
        <ContactPicker
          contacts={getContactNames()} 
          onChange={e => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type='time'
          value={time}
          onChange={e => setTime(e.target.value)}
          required
          min={getTodayString()}
        />
      </label>
      <br />
      <label>
        <input
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <input type='submit' value='Add Appointment' />
    </form>

  );
};
