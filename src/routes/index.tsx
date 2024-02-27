import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Trending, Featured, Liquidity } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/snowdex/trending" element={<Trending />} />
      <Route path="/snowdex/featured" element={<Featured />} />
      <Route path="/snowdex/earn" element={<Liquidity />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
