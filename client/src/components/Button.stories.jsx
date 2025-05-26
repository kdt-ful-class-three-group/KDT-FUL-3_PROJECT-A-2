// src/components/Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'Components/Button', // Storybook에서 보이는 이름
  component: Button,
};

export const 기본버튼 = () => <Button label="클릭!" onClick={() => alert('눌렀어!')} />;
export const 회색버튼 = () => <Button label="비활성" style={{ backgroundColor: 'gray' }} />;
