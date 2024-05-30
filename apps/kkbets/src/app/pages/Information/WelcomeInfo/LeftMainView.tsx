import { StyledLeftMainView } from './LeftMainView.css';
import euroLogo from '../../../../assets/images/euro-logo.png';
import EuroBadge from '../../../../assets/badges/badge-euro-2020.svg';
import EuroBadgeBest from '../../../../assets/badges/badge-euro-2020-best.svg';
import Badge from '../../../components/Badge/Badge';

function LeftMainView(): JSX.Element {
  return (
    <StyledLeftMainView>
      <h1 className="title">Time for Cybersport!</h1>
      <img src={euroLogo} alt="logo euro" />
      <p className="description">
        Welcome to BetNost
      </p>

      <div className="badges">
        <h3>Make bets and win unique badges!</h3>
        <div className="badges-box">
          <Badge
            src={EuroBadge}
            name="Euro badge"
            description="For participation in Euro 2024"
            style={{ margin: '0 7px' }}
            width={70}
          />
          <Badge
            src={EuroBadgeBest}
            name="Euro best badge"
            description="For the best and most active players during Euro 2024"
            style={{ margin: '0 7px' }}
            width={70}
          />
        </div>
      </div>
    </StyledLeftMainView>
  );
}

export default LeftMainView;
