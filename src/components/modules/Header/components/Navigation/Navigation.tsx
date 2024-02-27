import { useNavigate } from 'react-router-dom';
import { useMobile } from 'hooks/useMobile';
import * as S from './NavigationStyled';
import { NavigationProps } from '../../@types';

const Navigation = ({
  Links,
  isDark,
  handlePushRouter = () => {}
}: NavigationProps) => {
  const navigate = useNavigate();
  const [isMobile] = useMobile();

  const handleNavigate = (router: string) => {
    navigate(router);
    handlePushRouter(router);
  };

  return (
    <S.NavigationContainer data-testid="navigation_test">
      {Links?.map((item) => {
        return (
          <S.Item>
            {isMobile && <S.Icon isDark={isDark} src={item.icon} alt="Icon" />}
            <S.Text
              key={item.text}
              isDark={isDark}
              data-testid="link_test"
              onClick={() => handleNavigate(item.router)}
            >
              {item.text}
            </S.Text>
          </S.Item>
        );
      })}
    </S.NavigationContainer>
  );
};

export default Navigation;
