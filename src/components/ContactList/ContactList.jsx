import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.contact_list}>
      {contacts.map((contact) => (
        <li className={styles.list_item} key={contact.id}>
          {`${contact.name} : ${contact.number}`}
          {
            <button
              className={styles.list_button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
