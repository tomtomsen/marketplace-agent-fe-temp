import React from 'react';
import QueryInput from './QueryInput';

type TQuery = {
  id: string;
  query: string;
};

type Properties = {
  queries: Array<TQuery>;
};

const QueryInputList: React.FunctionComponent<Properties> = ({ queries }) => {
  const [items, setItems] = React.useState(queries);

  const handleRemoved = (query: TQuery) => {
    setItems(items.filter((q: TQuery) => q.id !== query.id));
  };

  return (
    <>
      {items.map((query: TQuery) => (
        <div key={query.id}>
          <QueryInput query={query} onRemoved={() => handleRemoved(query)} />
        </div>
      ))}
    </>
  );
};

export default QueryInputList;
