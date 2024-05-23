import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Box = styled.div`
  flex: 1;
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const EqualWidthApp = () => {
    return (
        <>
            <Container>
                <Box>Box 1 Eiusmod irure quis deserunt veniam voluptate sit. Ad officia dolore veniam reprehenderit dolore deserunt deserunt. Officia adipisicing pariatur irure aliqua cillum qui Lorem qui et laboris. Sint ut do ad consectetur commodo commodo officia sint quis non. Cupidatat ipsum non deserunt consequat in anim magna laborum. Aliqua pariatur aliquip ipsum reprehenderit nulla deserunt amet dolore cillum Lorem aliqua pariatur sint. Fugiat consectetur proident consequat exercitation cupidatat ea qui nostrud anim.</Box>
                <Box>Box 2</Box>
                <Box>Box 3</Box>
                {/* Add more boxes as needed */}
            </Container>
        </>
    )
}

export default EqualWidthApp
