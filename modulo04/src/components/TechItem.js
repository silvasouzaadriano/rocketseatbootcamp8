import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
        {tech}
        <button type="button" onClick={onDelete}>Remover</button>
    </li>
  );
}

export default TechItem;