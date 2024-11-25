import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

const MasonryComp = () => {
  return (
    <>
      <MasonryGrid/>
    </>
  );
}

export default MasonryComp;


// Styled Components for custom styling
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;


const MasonryGrid = () => {
    // Sample data for the cards
    const items = [
      { id: 1, title: "Card 1", description: "This is the description for card 1." },
      { id: 2, title: "Card 2", description: "This is the description for card 2." },
      { id: 3, title: "Card 3", description: "This is the description for card 3." },
      { id: 4, title: "Card 4", description: "This is the description for card 4." },
      { id: 5, title: "Card 5", description: "This is the description for card 5." },
      { id: 6, title: "Card 6", description: "This is the description for card 6." },
    ];
  
    // Breakpoints for different screen sizes (for responsive Masonry)
    const breakpoints = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };
  
    return (
      <Container>
        <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {items.map(item => (
            <Card key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </Masonry>
      </Container>
    );
  }
  