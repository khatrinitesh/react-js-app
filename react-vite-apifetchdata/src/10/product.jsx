import React,{useState,useEffect} from 'react'

const Product = () => {
    const [listData,setListdata] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    
    const baseurl = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            setListdata(result)
            console.log(result.docs)
            if(result.docs && result.docs.length >0 ){
                setListdata(result.docs)
            }
        } catch (error) {
            console.error('Error',error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnDel = (index) => {
        const newListdata = [...listData]
        newListdata.splice(index,1)
        setListdata(newListdata)
        // Remove the item from selectedItems if it exists
        if (selectedItems.includes(index)) {
            const newSelectedItems = selectedItems.filter((item) => item !== index);
            setSelectedItems(newSelectedItems);
        }
    }

    const toggleSelection = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter((item) => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    }

  return (
    <div>
     {listData.map((val, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => btnDel(index)}>delete</button>
                        <div
                            className={selectedItems.includes(index) ? 'selected' : ''}
                            onClick={() => toggleSelection(index)}
                        >
                            {val.author_name ? (
                                <div className='text-[red]'>Author: {val.author_name.join(', ')}</div>
                            ) : (
                                <div className='text-[blue]'>Author: Unknown</div>
                            )}
                        </div>
                    </div>
                );
            })}
    </div>
  )
}

export default Product
