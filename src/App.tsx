import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Content from "./Pages/Content";
import CategoryContent from "./Pages/CategoryContent";
import ContentLatestVideos from "./Component/ContentLatestVideos";
import AboutUs from "./Pages/AboutUs";
import { ContentProvider } from "./Context/ContentContext";
import VideoPage from "./Pages/VideoPage";

const App = () => {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Navigate to="/Home" replace />} />
            <Route path="Home" element={<Home />} />
            <Route path="content" element={<Content />} />
            <Route
              path="content/latest-videos"
              element={<ContentLatestVideos />}
            />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="content/category" element={<CategoryContent />} />
            <Route path="/content/latest-videos/:id" element={<VideoPage />} />
          </Route>
        </Routes>
      </Router>
    </ContentProvider>
  );
};

export default App;
