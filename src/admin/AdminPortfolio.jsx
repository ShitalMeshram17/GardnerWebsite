
import React, { useState } from "react";
import { projects as initialData } from "../data/portfolioData";

export default function AdminPortfolio() {
  const [items, setItems] = useState(initialData);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Portfolio</h2>
      {items.map(item => (
        <div key={item.id} className="p-4 shadow mb-3 rounded">
          <h4>{item.title}</h4>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
}
