import './App.css';
import BlogList from './components/blog-list/blog-list';
import Footer from './components/footer/footer';
import Header from './components/header/header';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <BlogList />
      </div>
        <Footer />
    </div>
  );
}

export default App;
