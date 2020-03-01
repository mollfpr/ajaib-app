import { Container } from '@material-ui/core';
import Header from './Header';

const Layout = ({ children }) => (
  <Container maxWidth="xs">
    <Header></Header>
    {children}
  </Container>
);

export default Layout;
