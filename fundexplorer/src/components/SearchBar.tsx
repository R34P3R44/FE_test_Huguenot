import '../styles/searchBar.css';
import { Grid, Menu } from 'react-feather';
import {Search} from 'react-feather';
import { FundsView } from '../dataTypes';

interface SearchBarProps {
  setView: (value: FundsView) => void;
  onSearch: (value: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  view: FundsView;
}

const SearchBar: React.FC<SearchBarProps> = ({setView, onSearch, query, view}) => {

  return (
    <section className="top-controls">
        <div className="search-wrapper">
          <span><Search size={24} /></span>
          <input
            value={query}
            type="text"
            placeholder="Search by fund name, ISIN, benchmark, manager"
            className='search-input'
            onChange={onSearch}
          />
        </div>
        <div className="view-buttons">
          <button className={`grid-view-btn ${view === FundsView.GRID ? 'active' : ''}`} onClick={() => setView(FundsView.GRID)}>
              <Grid color='#FFF' className='views-button-icons'/>
            <span>Grid view</span>
          </button>
          <button className={`list-view-btn ${view === FundsView.LIST ? 'active' : ''}`} autoFocus onClick={() => setView(FundsView.LIST)}>
            <span>List view</span>
              <Menu color='#FFF' className='views-button-icons'/>
          </button>
        </div>
    </section>
  );
}

export default SearchBar;