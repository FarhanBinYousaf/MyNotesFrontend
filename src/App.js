import './App.css';
import Header from './components/Header'
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<NotesListPage />}></Route>
            <Route exact path="/note/:id" element={<NotePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
