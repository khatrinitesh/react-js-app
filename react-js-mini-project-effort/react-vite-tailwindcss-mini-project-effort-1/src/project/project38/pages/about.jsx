import React from "react";
import Banner from "../components/banner";
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    border: 2px solid blue;
    border-radius: 4px;
    background-color:orange;
    margin:10px;
    color:blue;
    font-weight:700;
`
const LinkButton = styled.a`
  padding: 10px;
  border: 2px solid red;
  border-radius: 4px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #000;

  h2 {
    font-weight: 400;
    color: violet;
    font-size: 1rem;
  }

  li {
    list-style: none;
    display: inline-block;
    color: #ccc;
    transition:all .3s linear;
    &:not(:last-child){
        margin:0 20px 0 0;
    }
    &:hover{
        color:red;
    }
  }
`;
const Wrapper = styled.div`
h1{
  text-align: center;
  color: violet;
}

p{
  font-size: 40px;
}

button{
  background-color: pink;
  padding: 4px 8px;
  border: none;  
}
`

export default function About() {
    
  return (
    <div className="content">
      <Banner
        title="About"
        desc="Enim ut aliqua id eiusmod dolore sunt nulla deserunt. Reprehenderit voluptate dolor amet in aliquip. Id pariatur nisi non est reprehenderit. Ullamco est velit ut minim cillum ex deserunt aliquip eiusmod minim non qui. Ex velit in elit culpa consectetur incididunt. Excepteur labore quis irure in anim magna et aliquip. Eu Lorem aute duis ullamco exercitation officia anim magna irure sunt ut commodo minim fugiat. Velit velit amet nulla officia. Consectetur tempor qui elit incididunt magna aliqua ullamco ad irure nisi nulla anim culpa. Mollit exercitation ipsum sunt duis minim esse pariatur. Ad amet aliquip esse id quis officia velit fugiat laborum."
      />
      <Button>Click me</Button>
      <LinkButton  href="https://www.google.com" target="_blank">Link</LinkButton>
      <Header>
            <h2>Hello World</h2>
            <ul>
            <li>About</li>
            <li>About</li>
            </ul>
        </Header>
        <Wrapper>
            <h1>Another heading</h1>
            <p>Another para</p>
            <button>Another button</button>
        </Wrapper>
    </div>
  );
}
