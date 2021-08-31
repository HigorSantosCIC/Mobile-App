import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';
import { theme } from '../../constants/Theme';
import Typography from '../Typography';

export const Container = styled.View`
  padding: 5px;
  border-radius: 16px;
`;

export const Header = styled.View`
  height: ${dp(25)}px;
  padding-horizontal: 10px;
  background-color: ${theme.colors.secondary};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterInfo = styled.View`
  background-color: #ffffff;
  height: ${dp(25)}px;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const FooterCityContainer = styled.View`
  background-color: #ffffff;
  height: ${dp(25)}px;
  align-items: center; ;
`;
export const FooterTypography = styled(Typography)`
  font-size: 12px;
  color: #434343;
`;
