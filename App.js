import React from 'react';

import ThemeWrapper from './src/theme/ThemeWrapper';

import Login from './src/components/screens/Login';
import EventsList from './src/components/screens/EventsList';

export default function App() {
  return (
    <ThemeWrapper>
      <EventsList />
    </ThemeWrapper>
  );
};
