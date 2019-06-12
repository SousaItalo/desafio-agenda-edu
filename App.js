import React from 'react';

import Routes from "./src/routes";
import ThemeWrapper from './src/theme/ThemeWrapper';

export default function App() {
  return (
    <ThemeWrapper>
      <Routes />
    </ThemeWrapper>
  );
};
