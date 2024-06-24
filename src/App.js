import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import TutorialsPage from './Pages/TutorialsPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import LinguisticEducationPage from './Pages/LinguisticEducationPage';
import MathPage from './Pages/MathPage';
import SciencePage from './Pages/SciencePage';
import EnglishPage from './Pages/EnglishPage';
import ArtPage from './Pages/ArtPage';
import CitizenshipPage from './Pages/CitizenshipPage';
import BiblePage from './Pages/BiblePage';
import Layout from './components/Layout'; // Import the Layout component
import ParentSection from './Pages/ParentSection';
import WarTime from './Pages/WarTime';
import EmergencyLearning from './Pages/EmergencyLearning';
import RatingPage from './Pages/RatingPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/linguistic-education" element={<LinguisticEducationPage />} />
            <Route path="/math" element={<MathPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/english" element={<EnglishPage />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/citizenship" element={<CitizenshipPage />} />
            <Route path="/bible" element={<BiblePage />} />
            <Route path="/parentsection" element={<ParentSection />} />
            <Route path="/wartime" element={<WarTime />} />
            <Route path="/emergencylearning" element={<EmergencyLearning />} />
            <Route path="/feedback" element={<RatingPage />} />
            <Route path="/math" element={<MathPage />} />
            
            {/* Add other routes similarly */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
