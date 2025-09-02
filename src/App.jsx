import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/view/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
}

export default App;