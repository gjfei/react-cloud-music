import styled from 'styled-components';

export const LayoutWrap = styled.section`
  background-color:${props => props.theme['background-color-base']};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  
`;

export const Container = styled.section`
  flex: 1
`;