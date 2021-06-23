import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'input'> & {
  fullWidth?: boolean;
};

const TodoInput: VFC<Props> = ({ fullWidth = false, ...props }) => {
  return <input css={[todoInput, fullWidth && fullWidthSize]} {...props} />;
};

const todoInput = css`
  padding: 16px 16px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 17px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;

  ::placeholder {
    color: #828282;
  }
`;

const fullWidthSize = css`
  width: 100%;
`;

export default TodoInput;
