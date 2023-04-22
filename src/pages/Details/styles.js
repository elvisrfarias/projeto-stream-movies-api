import styled from "styled-components";

export const Container = styled.div `
  h1{
    margin: 3rem 0;
  }
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    max-width: 100%;
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 40%;
  }
  
  button {
    background: #6654da;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: .785rem;
    padding: .8rem 2rem;
    margin-top: 1rem;
    font-weight: 600;
    transition: all 0.3s
  }

  button:hover {
    background: #5846ca;
  }

  p {
    line-height: 1.2rem;
    font-weight: 300;
  }

  span {
    font-weight: bold;
  }

  .release-date {
    opacity: 0.6;
    font-size: .9rem;
    margin: .5rem 0;
  }
`