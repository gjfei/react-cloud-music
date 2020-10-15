import styled from 'styled-components';

const SidebarWrap  = styled.aside`
  background-color: ${props => props.theme['sidebar-background-color']};
  width: 200px;
  height: 100%;
`;

export default SidebarWrap;