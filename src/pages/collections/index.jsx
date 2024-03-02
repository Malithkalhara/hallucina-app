import { Route, Routes, useLocation } from "react-router-dom";
import MensPants from "./men/pants";
import MensTops from "./men/tops";
import MensCostumeSets from "./men/costume-sets";
import WomensDresses from "./women/dresses";
import WomensSkirts from "./women/skirts";
import WomensCostumeSets from "./women/costume-sets";
import WomensTops from "./women/tops";
import WomensPants from "./women/pants";
import AccessoriesAccessories from "./accessories/accessories";
import AccessoriesPocketBeltsAndBags from "./accessories/pocket-belts-and-bags";
import AccessoriesCuffs from "./accessories/cuffs";
import AccessoriesHolsters from "./accessories/holsters";
import AccessoriesFootwear from "./accessories/footwear";
import JeweleryHair from "./jewelery/hair";
import JeweleryNeck from "./jewelery/neck";
import JeweleryPiercings from "./jewelery/piercing";
import JeweleryBodyJewelery from "./jewelery/body-jewelery";

const Collections = () => {
  const { pathname } = useLocation();

  return (
    <Routes>
      {/* <Route index element={<Product />} /> */}
      <Route path="mens-tops" element={<MensTops />} />
      <Route path="mens-pants" element={<MensPants />} />
      <Route path="mens-costume-sets" element={<MensCostumeSets />} />
      <Route path="womens-dresses" element={<WomensDresses />} />
      <Route path="womens-skirts" element={<WomensSkirts />} />
      <Route path="womens-costume-sets" element={<WomensCostumeSets />} />
      <Route path="womens-tops" element={<WomensTops />} />
      <Route path="womens-pants" element={<WomensPants />} />
      <Route path="accessories-accessories" element={<AccessoriesAccessories />} />
      <Route path="accessories-pocket-belts-and-bags" element={<AccessoriesPocketBeltsAndBags />} />
      <Route path="accessories-cuffs" element={<AccessoriesCuffs />} />
      <Route path="accessories-holsters" element={<AccessoriesHolsters />} />
      <Route path="accessories-footwear" element={<AccessoriesFootwear />} />
      <Route path="jeweleries-hair" element={<JeweleryHair />} />
      <Route path="jeweleries-neck" element={<JeweleryNeck />} />
      <Route path="jeweleries-piercings" element={<JeweleryPiercings />} />
      <Route path="jeweleries-body-jewelery" element={<JeweleryBodyJewelery />} />
      
    </Routes>
  );
};

export default Collections;
