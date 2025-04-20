import '../styles/fundList.css';
import { ArrowRight } from 'react-feather';
import { Funds } from '../dataTypes';

interface FundListProps {
  searchResults: Funds[]
}

const FundList: React.FC<FundListProps> = ({searchResults}) => {

  return (
    <div className="fund-list">
      <div className="fund-list-header">
        <span>Fund Name / Benchmark</span>
        <span>Domicile</span>
        <span>Region</span>
        <span>Holdings</span>
        <span>Fund Size</span>
        <span>Launch Date</span>
      </div>
      <div className="horizontal-divider"></div>
      {searchResults.map((fund: Funds) => (
        <div className="fund-row" key={fund.id}>
          <div className='fund-row-first'>
            <div className='fund-name'>{fund.name}</div>
            <div className='fund-benchmark'>{fund.benchmark}</div>
          </div>
            <span>{fund.domicile}</span>
            <span>{fund.region}</span>
            <span>{fund.holdings}</span>
            <span>{fund.size}</span>
            <span>{fund.launchDate}</span>
            <div className='fund-row-icon-container'>
              <ArrowRight className='fund-row-icon' />
            </div>
        </div>
      ))}
            <div className="horizontal-divider"></div>

    </div>
  );
}

export default FundList