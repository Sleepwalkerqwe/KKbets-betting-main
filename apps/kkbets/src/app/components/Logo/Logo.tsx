import { StyledLogo } from './Logo.css';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

function Logo(): JSX.Element {
  const theme = useTheme();
  const logoPath = './Logo.png'; // Относительный путь к вашему логотипу

  return (
    <StyledLogo>
      <Link to="/">
        <img src={logoPath} alt="Logo" style={{ width: '100%', height: '100%' }} />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
