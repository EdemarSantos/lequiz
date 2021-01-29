import styled from 'styled-components'
import db from '../db.json';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.contrastText};
// `

// function Title(props) {
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position:  center;
`;

export default function Home() {
  // return <Title>
  //   Quiz dos Gatos e Gatas
  // </Title>
  return (
    <BackgroundImage>
      testes!
    </BackgroundImage>
  )
}
