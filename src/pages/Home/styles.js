import styled from "styled-components";

export const Container = styled.div`
  h1{
    text-align: center;
    margin: 4rem 0;
  }
  
  
`

export const MovieList = styled.ul `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem:

ul{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem:
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;

}

li img{
  width: 180px;
  border-radius: .685rem;
}

span {
  margin-top: 2rem;
  font-weight: bold;
  font-size: 120%;
}

a {
  transition: all .3s;
}

a:hover {
  transform: scale(1.1);
}
`