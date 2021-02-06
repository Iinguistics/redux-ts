import RepoList from './RepoList';
import '../styles/App.css';

const App: React.FC = ()=>{
  

    return(
        <div className="container">
          <h1>Search for a package</h1>
          <RepoList />
        </div>
    )
}


export default App;