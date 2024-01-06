import React, { useState } from "react";

export default function ListElement({ name, onDelete }) {
  const [details, showDetails] = useState(false);
  return (
    <>
      <div className="dropdown w-100 pt-1">
        <button
          className="btn btn-secondary w-100"
          type="button"
          onClick={() => {
            showDetails(!details);
          }}
        >
          {name}
        </button>
        {details && (
          <>
            <ul>
              <li>Completed :</li>
              <li>Created At :</li>
            </ul>
            <button
              className="btn btn-danger "
              type="button"
              onClick={() => onDelete(name)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
}
