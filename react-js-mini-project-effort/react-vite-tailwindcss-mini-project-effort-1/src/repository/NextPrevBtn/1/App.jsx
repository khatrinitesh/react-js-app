import React,{useState} from 'react'

const NextPrevBtnApp = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <>
      <NextPrevBtn items={items}/>
    </>
  )
}

export default NextPrevBtnApp

const NextPrevBtn = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) + items.length % items.length);
      };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return(
        <>
        <button className="prev-button" onClick={handlePrev}>
            Prev
        </button>
        <span className="current-index">{currentIndex + 1}</span>
        <button className="next-button" onClick={handleNext}>
            Next
        </button>
        </>
    )
}
