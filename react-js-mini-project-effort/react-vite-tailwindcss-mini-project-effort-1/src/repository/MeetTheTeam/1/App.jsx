import React from 'react'

const MeetTeamApp = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            position: 'CEO',
            imageUrl: 'https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'Jane Smith',
            position: 'Developer',
            imageUrl: 'https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg',
            bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // Add more team members as needed
    ];
    return (
        <>
            {teamMembers.map((val, index) => {
                return (
                    <TeamMember key={index} name={val.name} position={val.position} imgUrl={val.imageUrl} bio={val.bio} />
                )
            })}
        </>
    )
}

export default MeetTeamApp

const TeamMember = ({ name, position, imgUrl, bio }) => {
    return (
        <>
            <img src={imgUrl} alt={name} />
            <h2>{name}</h2>
            <p>{position}</p>
            <p>{bio}</p>
        </>
    )
}
