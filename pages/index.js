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

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${db.theme.colors.primary};
  background-color: ${db.theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

export default function Home() {
  // return <Title>
  //   Quiz dos Gatos e Gatas
  // </Title>
  return (
    <BackgroundImage>
      <QuizContainer>
      <Widget>
          <h1>The legend of zelda</h1>

          <p>lorem upsum dolor sit amet...</p>
        </Widget>

        <Widget>
          <h1>Quizes da Galera</h1>

          <p>lorem upsum dolor sit amet...</p>
        </Widget>
      </QuizContainer>
      <QuizContainer>teste</QuizContainer>
    </BackgroundImage>
  )
}
