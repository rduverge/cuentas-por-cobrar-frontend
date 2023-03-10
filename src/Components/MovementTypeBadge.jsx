import React from 'react';

const MovementTypeBadge = ({ movementType }) => {
  const backgroundColor = movementType === 'Credito' ? 'bg-red-200' : 'bg-green-200';
  const textColor = movementType === 'Credito' ? 'text-red-600' : 'text-green-600';

  return (
    <p className={`py-1 px-3 rounded-full text-xs ${backgroundColor} ${textColor}`}>
      {movementType}
    </p>
  );
};

export default MovementTypeBadge;