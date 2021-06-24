import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import DeleteIconButton from '@/components/TodoList/DeleteIconButton';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  checked: boolean;
};

const TodoListItem: VFC<Props> = ({ text, checked, ...props }) => {
  return (
    <li css={todoListItem} {...props}>
      <label css={checkBoxBlock}>
        <input css={checkBox} type="checkbox" defaultChecked={checked} />
        <span css={[customCheckBox, checked && customCheckBoxChecked]} />
        <span css={[labelText, checked && labelTextChecked]}>{text}</span>
      </label>
      <DeleteIconButton />
    </li>
  );
};

const todoListItem = css`
  display: flex;
  align-items: center;
  padding: 4px 0;
  list-style: none;
`;

const checkBoxBlock = css`
  display: inline-flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
`;

const checkBox = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

const customCheckBox = css`
  position: relative;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #828282;
    border-radius: 4px;
  }

  &::after {
    top: 0.375em;
    left: 0.25em;
    width: 1em;
    height: 0.5em;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    opacity: 0;
    transition: opacity 0.5s;
    transform: rotate(-40deg);
  }
`;

const customCheckBoxChecked = css`
  &::before {
    background-color: #06f;
    border-color: #06f;
  }

  &::after {
    opacity: 1;
  }
`;

const labelText = css`
  margin-left: 8px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;

  &:hover,
  input[type='checkbox'].focus-visible ~ & {
    color: #06f;
  }
`;

const labelTextChecked = css`
  text-decoration-line: line-through;
`;

export default TodoListItem;