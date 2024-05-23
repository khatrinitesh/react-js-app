import React  from 'react';
import Banner from '../components/banner';
import TextAreaApp from '../repository/textAreamaxLengthLimit/1';
import AccApp from '../repository/accordion/1';
import TabApp from '../repository/tab/1';
import VerticalTabApp from '../repository/verticalTabs/1';

export default function Home() {
  

  return (
    <div className='content'>
        <Banner title="Home" desc="Ea aliquip sunt ullamco consequat consectetur enim nostrud."/>
        <TextAreaApp/>
        <AccApp/>
        <TabApp/>
        <VerticalTabApp/>
        <Profile/>
    </div>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile(){
  return(
    <>
     <h1>{user.name}</h1>
     <img className='avatar' src={user.imageUrl} style={{width:user.imageSize,height:user.imageSize}}/>
    </>
  )
}