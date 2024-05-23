import React from 'react';
import { Data } from './Constants';

const RestApiCallApp = () => {

    // const data = {
    //     category1: [D:\Nitesh\2023\practical\reference-skills\js-framework\react\react-vite-mini-project-effort\src\project\project42\components\StickyHeader\1
    //         { id: 1, name: 'Item 1' },
    //         { id: 2, name: 'Item 2' },
    //     ],
    //     category2: [
    //         { id: 3, name: 'Item 3' },
    //         { id: 4, name: 'Item 4' },
    //     ],
    // };

    // const CATEGORY_NAMES = ['category1', 'category2', /* ... more categories */];

    return (
        <>
            {/* {CATEGORY_NAMES.map((val) => {
                return (
                    <div key={val}>
                        <h2>{val}</h2>
                        <ul>
                            {data[val].map((item) => {
                                return (
                                    <li key={item.id}>{item.name}</li>
                                    )
                            })}

                        </ul>
                    </div>
                )
            })} */}
            {Data.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        {item.content.map((c, i) => {
                            return (
                                <div key={i}>
                                    <h3>{c.point}</h3>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default RestApiCallApp
