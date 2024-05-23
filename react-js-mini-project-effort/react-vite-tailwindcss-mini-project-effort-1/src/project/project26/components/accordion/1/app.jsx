import React,{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.css";
import { AccordionData } from '../../../somedata/data';


export default function AccordionApp() {
  return (
    <><Example/></>
  )
}

function Example(){
    const categories = {};
    for (const item of AccordionData) {
      if (item.title in categories) {
        categories[item.title].push(item);
      } else {
        categories[item.title] = [item];
      }
    }
    return(
        <>
        <Accordion >
        {Object.entries(categories).map((entry) => {
            const category = entry[0];
            const itemList = entry[1];
            return (
            <Accordion.Item eventKey={category} key={category} >
                <Accordion.Header>{category}</Accordion.Header>
                <Accordion.Body>
                {itemList.map((item) => (
                    <span key={item.id}>{item.body} </span>
                ))}
                </Accordion.Body>
            </Accordion.Item>
            );
        })}
        </Accordion>
        </>
    )
}