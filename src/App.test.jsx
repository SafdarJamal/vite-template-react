import { render } from '@testing-library/react';
import App from './App.jsx';

test('App renders without crashing', () => {
  const { unmount } = render(<App />);
  unmount();
});
