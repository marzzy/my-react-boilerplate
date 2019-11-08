import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <p>
      page not found
      <br />
      <code>
        {location.pathname}
      </code>
    </p>
  );
}
