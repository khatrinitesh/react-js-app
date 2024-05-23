import React, { useState, useMemo } from 'react'

const CustomApp = () => {
    return (
        <>
            <List />
            {/* <PlayButton movieName="sdadsdaddad" />
            <UploadBtn /> */}
        </>
    )
}

export default CustomApp


// function List({ data }) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(5);
//     const [searchTerm, setSearchTerm] = useState('');

//     // Filter data based on search term
//     const filteredData = useMemo(() => {
//         return data.filter(item =>
//             item.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     }, [data, searchTerm]);

//     // Calculate total pages
//     const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//     // Get current page items
//     const currentItems = useMemo(() => {
//         const indexOfLastItem = currentPage * itemsPerPage;
//         const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//         return filteredData.slice(indexOfFirstItem, indexOfLastItem);
//     }, [currentPage, itemsPerPage, filteredData]);

//     // Change page
//     const handlePageChange = page => {
//         setCurrentPage(page);
//     };
//     return (

//         <><div>
//             {/* Search input */}
//             <input
//                 type="text"
//                 placeholder="Search by name"
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//             />

//             {/* Table */}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         {/* Add more columns as needed */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentItems.map(item => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             {/* Add more columns as needed */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Pagination */}
//             <div>
//                 {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//                     page => (
//                         <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             style={{
//                                 fontWeight: currentPage === page ? 'bold' : 'normal',
//                             }}
//                         >
//                             {page}
//                         </button>
//                     )
//                 )}
//             </div>
//         </div></>
//     )
// }

// function List() {

//     const initialData = ['banana', 'apple', 'grape', 'orange']
//     const [words, setWords] = useState(initialData);
//     const [isDescending, setIsDescending] = useState(false);

//     const handleSortToggle = () => {
//         setWords((prevWords) => {
//             const sortWords = [...prevWords]
//             if (isDescending) {
//                 sortWords.sort((a, b) => a.localeCompare(b))
//             }
//             else {
//                 sortWords.sort((a, b) => b.localeCompare(a))
//             }
//             return sortWords;
//         });
//         setIsDescending((prevIsDesending) => !prevIsDesending)
//     };


//     return (
//         <>
//             <button onClick={handleSortToggle}>Reverse Sort</button>
//             {words.map((val, index) => {
//                 return (
//                     <div key={index}>{val}</div>
//                 )
//             })}
//         </>
//     )
// }

// function List() {
//     let initialArtists = [
//         { id: 0, name: 'Marta Colvin Andrade' },
//         { id: 1, name: 'Lamidi Olonade Fakeye' },
//         { id: 2, name: 'Louise Nevelson' },
//     ];

//     const [artist, setArtist] = useState(initialArtists)
//     const [name, setName] = useState('')
//     const handleMoveDown = (index) => {
//         if (index < artist.length - 1) {
//             setArtist((prevArtists) => {
//                 const updatedArtists = [...prevArtists];

//                 // Swap the current shape with the one below it
//                 const temp = updatedArtists[index];
//                 updatedArtists[index] = updatedArtists[index + 1];
//                 updatedArtists[index + 1] = temp;

//                 return updatedArtists;
//             });
//         }
//     };

//     // Assuming you have a move down button in your UI that triggers this function
//     const handleMoveDownButtonClick = (index) => {
//         handleMoveDown(index);
//     };
//     return (
//         <>
//             {artist.map((item, index) => (
//                 <div key={item.id}>
//                     <span>{item.name}</span>
//                     <button onClick={() => handleMoveDownButtonClick(index)}>Move Down</button>
//                 </div>
//             ))}

//         </>
//     )
// }

// function List() {

//     let initialArtists = [
//         { id: 0, name: 'Marta Colvin Andrade' },
//         { id: 1, name: 'Lamidi Olonade Fakeye' },
//         { id: 2, name: 'Louise Nevelson' },
//     ];

//     const [artist, setArtist] = useState(initialArtists)
//     const [name, setName] = useState('')
//     let nextId = 1;

//     const handleDel = (indexToDelete) => {
//         setArtist((prevArtist) => {
//             const updatedArtist = [...prevArtist];
//             updatedArtist.splice(indexToDelete, 1);
//             return updatedArtist
//         })
//     }

//     const handleChange = (e) => {
//         setName(e.target.value)
//     }

//     const handleAdd = () => {
//         setArtist([
//             ...artist,
//             {
//                 id: nextId++,
//                 name: name
//             }
//         ]);
//         setName('')
//     }
//     return (
//         <>
//             <input type="text" value={name} onChange={handleChange} />
//             <button onClick={handleAdd}>Add</button>
//             <ul>
//                 {artist.map((val, index) => {
//                     const { name } = val
//                     return (
//                         <li key={index}>{name}
//                             <button onClick={() => handleDel(index)}>&times;</button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// function List() {

//     const [artist, setArtist] = useState([]);
//     const [name, setName] = useState('');
//     let nextId = 1;

//     const handleAdd = () => {
//         setArtist([
//             ...artist,
//             {
//                 id: nextId++,
//                 name: name,
//             },
//         ]);
//         setName(''); // Clear the input field after adding an artist
//     };

//     const handleDelete = (id) => {
//         const updatedArtist = artist.filter((item) => item.id !== id);
//         setArtist(updatedArtist);
//     };


//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <button onClick={handleAdd}>Add</button>

//             <ul>
//                 {artist.map((item) => (
//                     <li key={item.id}>
//                         {item.name}
//                         <button onClick={() => handleDelete(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// function Counter() {
//     const [num, setNum] = useState(0)
//     return (
//         <>
//             {num}
//             <button onClick={() => setNum(num + 5)}>+3</button >
//         </>
//     )
// }

// function UploadBtn() {
//     return (
//         <>
//             <Button onClick={() => alert('uploading')}>upload image</Button>
//         </>
//     )
// }

// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}`)
//     }
//     return (
//         <>
//             <Button onClick={handlePlayClick}>Play "{movieName}"</Button></>
//     )
// }

// function Button({ onClick, children }) {
//     return (
//         <>
//             <button onClick={onClick}>
//                 {children}
//             </button>
//         </>
//     )
// }
