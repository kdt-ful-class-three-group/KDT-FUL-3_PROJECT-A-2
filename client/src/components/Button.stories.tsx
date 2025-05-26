// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // 자동 문서화에 유용
};

export default meta;

type Story = StoryObj<typeof Button>;

export const 기본: Story = {
  args: {
    label: '클릭!',
    onClick: () => alert('버튼 눌림!'),
  },
};

export const 비활성버튼: Story = {
  args: {
    label: '비활성',
    onClick: () => alert('안 눌림!'),
  },
};
