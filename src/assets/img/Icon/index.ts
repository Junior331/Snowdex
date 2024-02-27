import sun from './sun.png';
import logo from './logo.png';
import moon from './moon.png';
import fire from './fire.png';
import down from './down.png';
import users from './users.png';
import coins from './coins.png';
import flame from './flame.png';
import graph from './graph.png';
import order from './order.png';
import globe from './globe.png';
import rocket from './rocket.png';
import search from './search.png';
import history from './history.png';
import logo_gmx from './logo_gmx.png';
import logo_sdao from './logo_sdao.png';
import logo_avax from './logo_avax.png';
import right_arrow from './right_arrow.png';
import badge_check from './badge_check.png';
import cursor_ranger from './cursor_ranger.png';
import arrow_increase from './arrow_increase.png';
import cursor_ranger_dark from './cursor_ranger_dark.png';

interface IIcon<TValue> {
  [id: string]: TValue;
}

const icons: IIcon<string> = {
  sun,
  logo,
  moon,
  fire,
  down,
  order,
  users,
  globe,
  graph,
  coins,
  flame,
  search,
  rocket,
  history,
  logo_gmx,
  logo_avax,
  logo_sdao,
  right_arrow,
  badge_check,
  cursor_ranger,
  arrow_increase,
  cursor_ranger_dark
};

export const getIcon = (id: string) => icons[id];

export default icons;
