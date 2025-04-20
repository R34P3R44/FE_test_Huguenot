import '../styles/sidebar.css';
import { FilterDomicile, FilterRegion } from '../dataTypes';
import { filterRegion, filterDomicile } from '../constants';
import { ArrowRight, X } from 'react-feather';


interface SidebarFilterProps { 
  onFilter: (value: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDomicile: string[];
  selectedregions: string[];
  setSelectedregions: (value: string[]) => void;
  setSelectedDomicile: (value: string[]) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = (
  { 
    onFilter, 
    selectedDomicile, 
    selectedregions, 
    setSelectedregions,
    setSelectedDomicile,
  }) => {

  const onClearFilters = () => {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false
    })
    setSelectedregions([])
    setSelectedDomicile([])
}

  return (
    <aside className="filter-sidebar">
      <div className='filter-title-container'>
        <div className='filter-main-title'>Filter</div>
        {selectedDomicile.length > 0 || selectedregions.length > 0 ? 
          <button onClick={onClearFilters} className='filter-clear-btn'><X className='clear-filter-icon'/>Clear all</button>
          :
          null
        }
      </div>

      <div className="filter-group">
        <p>Region</p>
        {filterRegion.map((region: FilterRegion) => (
          <label key={region.id}>
            <input
              id='regionFilter'
              type="checkbox" 
              onChange={onFilter} 
              value={region.value}
            />
              {region.value}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <p>Domicile</p>
        {filterDomicile.map((dom: FilterDomicile) => (
          <label key={dom.id}>
            <input
              id='domicileFilter'
              type="checkbox" 
              onChange={onFilter} 
              value={dom.value}
            />
              {dom.value}
          </label>
        ))}
      </div>

      <button className="show-managers-btn">
        <span>Show Managers</span>
        <ArrowRight color='#FFF' className='show-managers-button-icon'/>
      </button>
    </aside>
  );
}

export default SidebarFilter;