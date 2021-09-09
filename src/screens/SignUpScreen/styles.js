import styled from 'styled-components/native';
import { dp } from '../../constants/Spacing';
import DefaultInput from '../../components/Input';

export const SignupFormContainer = styled.View``;

export const SignupFormTitle = styled.View`
  margin-top: ${dp(32)}px;
`;

export const Input = styled(DefaultInput)`
  margin-top: ${dp(36)}px;
`;
