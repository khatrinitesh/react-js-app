import React,{ useState } from 'react';

let nextId = 0;

export default function CustomApp() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    const handleAdd = () => {
        setArtists(
            [...artists,{id:nextId++,name:name}]
        )
    }

    const deleteItem = (index) => {
        setArtists((prevState) => {
          let items = [...prevState];
          console.log(items);
          items.splice(index, 1);
          return items;
        });
      };

  return (
    <>
        <h1>Inspiring sculptors:</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {artists.map((artist) => {
                return(
                    <li key={artist.id}>{artist.name} <button onClick={deleteItem}>x</button></li>
                )
            })}
        </ul>
    </>
  )
}
