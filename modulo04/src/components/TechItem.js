import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
        {tech}
        <button type="button" onClick={onDelete}>Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

export default TechItem;