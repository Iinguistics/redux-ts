import { useState } from 'react';
import { RootState } from '../state';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepoList: React.FC = ()=>{
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();

  const repos = useTypedSelector((state:RootState) => state.repositories);
  const { loading, error, data } = repos;

  const searchHandler = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       searchRepositories(term);
  }

  console.log(data);

  const renderData = ()=>{
    if(data){
        return data.map((item: any)=>{
            return(
                <div key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.links.npm} target="_blank" rel="noreferrer">{item.name} npm package</a>
                </div>
            )
        })
    }
  }



    return(
        <div>
          <form onSubmit={searchHandler}>
              <input value={term} onChange={(e)=> setTerm(e.target.value)} />
              <button type="submit">Search</button>
          </form>
          {error && <h5>{error}</h5>}
          {loading && <h5>Loading...</h5>}
          {renderData()}
         
        </div>
    )
}

export default RepoList;