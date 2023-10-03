import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "./components/layout";
import { Suspense, lazy } from "react";
import { PageLoader } from "./components/loader/page-loader";

const Home = lazy(() => import("./pages/home"));
const Product = lazy(() => import("./pages/product"));

function App() {
  return (
    <BaseLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
