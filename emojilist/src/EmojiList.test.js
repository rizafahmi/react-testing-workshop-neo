import { render, screen } from '@testing-library/react';
import EmojiList from './EmojiList.js';

test('render empty list', function () {
  render(<EmojiList />);
  screen.getByText(/no emoji/i);
});

test('render emoji list', function () {
  render(<EmojiList emojis={['😀', '🥲', '🥳']} />);
  screen.getByText('😀');
});
