import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';



export default function FetchData() {

    const { data, isLoading, isError } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
  );

  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error fetching data</div>
  }
  return (
    <>
      {data.map((todo) => {
        <div key={todo.id}>{todo.title}</div>
      })}
    </>
  )
}
