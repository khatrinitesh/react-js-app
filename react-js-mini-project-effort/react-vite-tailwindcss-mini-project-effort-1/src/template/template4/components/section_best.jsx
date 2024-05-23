import React from 'react';
import {BestClass} from './data';
import SectionTitle from './sectiontitle';

export default function SectionBest() {
  return (
    <>
        <div className="best-class-club">
            <div className='container'>
                <div className="row best-class-sections-detail">
                    <div className="col-lg-6 best-class-club-desc">
                        <div className="row">
                    <div className="col-lg-8 detail-col-club col-12 text-left">
                    <SectionTitle headTitle="The Best Class for your Yoga Center" para="At solmen li esser necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari quam coalescent lingues."/>
                        <ul>
                        {BestClass.map((item,i) => {
                            const {subitem} = item
                            return(
                                <>
                                <li key={i}>{subitem}</li>   
                            </>
                            )
                        })}
                        </ul>
                        <p>Consequat pariatur ullamco quis minim esse laboris labore amet sunt. Tempor velit proident quis non. Consequat adipisicing occaecat ullamco irure cillum Lorem quis labore exercitation laborum est esse amet. Aliqua ut magna pariatur consectetur exercitation quis in non voluptate veniam duis eiusmod Lorem.</p>
                        </div> 
                        </div> 
                    </div> 
                </div> 
            </div>
        </div> 
    </>
  )
}
