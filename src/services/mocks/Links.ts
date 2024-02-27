import icons from 'assets/img/Icon';
import { Link } from 'components/modules/Header/@types';

export const Links: Link[] = [
  {
    text: 'Explore',
    icon: icons.globe,
    router: '/'
  },
  {
    text: 'Featured',
    icon: icons.badge_check,
    router: '/snowdex/featured'
  },
  {
    text: 'Earn',
    icon: icons.flame,
    router: '/snowdex/earn'
  },
  {
    text: 'Trending ',
    icon: icons.coins,
    router: '/snowdex/trending'
  },
  {
    text: 'Community',
    icon: icons.users,
    router: '/snowdex/community'
  }
];
