import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import { useActions } from '../hooks/useActions';


const RepoList: React.FC = ()=>{
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();

  const repos = useSelector((state:RootState) => state.repositories);
  const { loading, error, data } = repos;

  const searchHandler = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       searchRepositories(term);
  }

  console.log(data)

    return(
        <div>
          <form onSubmit={searchHandler}>
              <input value={term} onChange={(e)=> setTerm(e.target.value)} />
              <button type="submit">Search</button>
          </form>
        </div>
    )
}

export default RepoList;