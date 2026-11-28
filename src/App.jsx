import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import NavigationTracker from "@/lib/NavigationTracker";
import { pagesConfig } from "./pages.config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

function Wrapper({ name, children }) {
  return Layout ? <Layout currentPageName={name}>{children}</Layout> : children;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <BrowserRouter basename="/Gesher.llc">
        <NavigationTracker />
        <Routes>
          <Route path="/" element={<Wrapper name={mainPageKey}><MainPage /></Wrapper>} />
          {Object.entries(Pages).map(([name, Page]) => (
            <Route key={name} path={`/${name}`} element={<Wrapper name={name}><Page /></Wrapper>} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}
