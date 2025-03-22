
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import notes from './note';

function createNotes(noteitem){
return(
  <Note
  title={noteitem.title}
  content={noteitem.content}
  />
);
}

function App() {
  return (
    <div className="App">
    <Header/>
    {notes.map(createNotes)}
    <Footer/>
    </div>
  );
}

export default App;
