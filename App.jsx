import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RoleProvider } from './context/RoleContext';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/chakraTheme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RoleProvider>
          <Router>
            <AppRoutes />
          </Router>
        </RoleProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App; 