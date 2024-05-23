import React,{useState} from 'react'

const Nested = () => {
    const [nestedData, setNestedData] = useState([
        {
          id: 1,
          name: 'Parent 1',
          children: [
            { id: 101, name: 'Child 1.1' },
            { id: 102, name: 'Child 1.2' },
          ],
        },
        {
          id: 2,
          name: 'Parent 2',
          children: [
            { id: 201, name: 'Child 2.1' },
            { id: 202, name: 'Child 2.2' },
          ],
        },
        // Add more parents and children as needed
      ]);

      const handleDelete = (parentId,childId) => {
        setNestedData((prevData) =>
            prevData.map((parent) => {
                if (parent.id === parentId) {
                return {
                    ...parent,
                    children: parent.children.filter((child) => child.id !== childId),
                };
                }
                return parent;
            })
        );
      };

  return (
    <div>
      {nestedData.map((parent) => {
        return(
            <>
            <h2>{parent.name}</h2>
            <ul>
                {parent.children.map((child) => {
                    return(
                        <li key={child.id}>
                            {child.name}
                            <button onClick={() => handleDelete(parent.id,child.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
            </>
        )
      })}
    </div>
  )
}

export default Nested
