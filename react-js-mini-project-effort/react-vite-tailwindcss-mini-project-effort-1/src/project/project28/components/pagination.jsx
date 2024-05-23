import React,{useState} from 'react';
import { PaginationData } from '../data/data';

export default function PaginationApp() {
  return (
    <>
      <CustomPagination/>
    </>
  )
}

const CustomPagination = () => {
    const [currentPage,setCurrentPage] = useState(1);
    return(
        <>
         <Page pageNumber={currentPage}/>
         <PaginationControl totalPages={Math.ceil(PaginationData.length / 10)}/>
        </>
    )
}

const Page = ({pageNumber}) => {
    const dataForPage = PaginationData.slice(pageNumber * 10,(pageNumber + 1) * 10);
    return(
        <>
         <ul>
            {dataForPage.map((item) => {
                <li key={item.id}>{item.name}</li>
            })}
         </ul>
        </>
    )
}
const PaginationControl = ({totalPages}) => {
    var i = 0;
    const buttons = [];
    for(let i=1;i<=totalPages;i++){
        buttons.push(
            <button key={i} onClick={() => console.log(i)}>Page {i}</button>
        )
    }
    return <div>{buttons}</div>
}
