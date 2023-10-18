import React from 'react'
import { Link } from 'react-router-dom';
export default function Products() {
  return (
    <div>
      <p>Produts</p>
      <Link className="underline" to="/">Go to Dashboard</Link>
    </div>
  );
}
