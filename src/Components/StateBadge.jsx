import React from 'react';

const StateBadge = ({ state }) => {
  let colorClass = '';
  switch(state) {
    case 'Aprobado':
      colorClass = 'bg-teal-200 text-teal-600';
      break;
    case 'Pendiente':
      colorClass = 'bg-yellow-200 text-yellow-600';
      break;
    case 'Rechazado':
      colorClass = 'bg-orange-200 text-orange-600';
      break;
    default:
      colorClass = 'bg-gray-200 text-gray-600';
      break;
  }

  return (
    <p className={`py-1 px-3 rounded-full text-xs ${colorClass}`}>
      {state}
    </p>
  );
};

export default StateBadge;