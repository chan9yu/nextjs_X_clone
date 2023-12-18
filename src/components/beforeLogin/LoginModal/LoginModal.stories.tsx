import type { Meta, StoryObj } from '@storybook/react';
import LoginModal from './LoginModal';

const meta: Meta<typeof LoginModal> = {
	title: 'Components/beforeLogin/LoginModal',
	component: LoginModal,
	tags: ['autodocs']
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
