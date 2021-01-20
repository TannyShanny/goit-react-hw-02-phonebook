import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filter_text}>
      Find contacts by name:
      <input
        className={styles.filter_input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
