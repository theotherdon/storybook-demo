import type { Meta, StoryObj } from '@storybook/vue3';

import { userEvent, within, expect } from '@storybook/test';

import LoginForm from './LoginForm.vue';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByLabelText('Email:'), 'email@provider.com');

    await userEvent.type(canvas.getByLabelText('Password:'), 'a-random-password');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    canvas.findByText('Form submitted!');
  },
};