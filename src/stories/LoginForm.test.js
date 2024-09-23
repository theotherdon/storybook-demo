import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/vue';
import { describe, it } from 'vitest';
import LoginForm from './LoginForm.vue';

describe('LoginForm', () => {
  it('submits the form', async () => {
    render(LoginForm);

    await userEvent.type(screen.getByLabelText('Email:'), 'email@provider.com');
    await userEvent.type(screen.getByLabelText('Password:'), 'a-random-password');
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(screen.getByRole('button'));

    // 👇 Assert DOM structure
    await screen.findByText('Form submitted!');
  })
});