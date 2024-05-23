import React from "react";
import Banner from "../components/banner";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ContentImage = styled.img`
  display: block;
  margin-bottom: 8px;
  width: 100%;
  max-width: ${p => p.maxWidth};
`;


export default function Home() {
  return (
    <div className="content">
      <Banner
        title="Home"
        desc="Enim ut aliqua id eiusmod dolore sunt nulla deserunt. Reprehenderit voluptate dolor amet in aliquip. Id pariatur nisi non est reprehenderit. Ullamco est velit ut minim cillum ex deserunt aliquip eiusmod minim non qui. Ex velit in elit culpa consectetur incididunt. Excepteur labore quis irure in anim magna et aliquip. Eu Lorem aute duis ullamco exercitation officia anim magna irure sunt ut commodo minim fugiat. Velit velit amet nulla officia. Consectetur tempor qui elit incididunt magna aliqua ullamco ad irure nisi nulla anim culpa. Mollit exercitation ipsum sunt duis minim esse pariatur. Ad amet aliquip esse id quis officia velit fugiat laborum."
      />
      <Title>Title 1</Title>
      <ContentImage
      alt="A running shoe with pink laces and a rainbow decal"
      src="https://www.joshwcomeau.com/images/shoe-closeup.png"
      maxWidth="200px"
    />
    </div>
  );
}
