import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #556B2F; /* Verde Musgo */
  ul {
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 15px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    transition: background 0.3s;
  }
  a:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
