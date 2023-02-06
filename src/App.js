import './App.css';
import Features from './components/sections/features';
import Hero from './components/sections/hero'
import CTA from './components/sections/cta'
import Centered2x2 from './components/sections/features/centered2x2'
import CenteredBB from './components/elements/headers';
import HearderBanner from './components/elements/banners'
import DarkNavWhitePH from './components/applicationShells/stackedLayout';
import MetaAndAction from './components/pageHeadings';
import StripedInCardLA from './components/dataDisplay'
import Form1 from './components/forms';
import Input1 from './components/inputGroup';
import SelectMenu1 from './components/selectMenus';
import SignIn1 from './components/signinAndReg'
import Navbar1 from './components/navigation'
import Pagination1 from './components/navigation/pagination';
import Modal1 from './components/overlays';
import SlideOvers1 from './components/overlays/slideOvers'
import Avatar1 from './components/elements/avatars'
import Dropdown1, {Dropdown2} from './components/elements/dropdowns'
import Overview1 from './components/productOverviews';
import ProductList1 from './components/productList'
import ProductList2 from './components/productList/productList2';
import ThreeColumn from './components/categoryReviews';
import Cart1 from './components/shoppingCarts'
import Filter1 from './components/categoryFilters';
import PrdQuickview1 from './components/productQuickviews';
import PrdFeatures1 from './components/productFeatures';
import StoreNav1 from './components/storeNavigation'
import PromoCodes1 from './components/promocodes';

function App() {
  return (
    <div className='space-y-8'>
      <Hero />
      <Features />
      <Centered2x2 />
      <CTA />
      <CenteredBB />
      <HearderBanner />
      <DarkNavWhitePH />
      <MetaAndAction />
      <StripedInCardLA />
      <Form1 />
      <Input1 />
      <SelectMenu1 />
      <SignIn1 />
      <Navbar1 />
      <Pagination1 />
      <Modal1 />
      <SlideOvers1 />
      <Avatar1 />
      <Dropdown1 />
      <Dropdown2 />
      <Overview1 />
      <ProductList1 />
      <ProductList2 />
      <ThreeColumn />
      <Cart1 />
      <Filter1 />
      <PrdQuickview1 />
      <PrdFeatures1 />
      <StoreNav1 />
      <PromoCodes1 />
    </div>
  );
}

export default App;
