import React from 'react';

export default function TaskItem(props: any) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/tasks').then(r => r.json()).then(setItems);
  });

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
}
