import '../styles/gridView.css';
import Card from './Card';
import { Funds } from '../dataTypes';

interface GridViewProps {
  searchResults: Funds[]
}

const GridView: React.FC<GridViewProps> = ({searchResults}) => {

  return (
    <div className="cards-grid">
      {searchResults.map((fund: Funds) => (
        <div key={fund.id}>
          <Card
            cardData={{
                name: fund.name,
                benchmark: fund.benchmark,
                domicile: fund.domicile,
                regionColor: fund.regionColor,
                region: fund.region,
                holdings: fund.holdings,
                size: fund.size,
                launchDate: fund.launchDate
              }}
          />
        </div>
      ))}
    </div>
  );
}

export default GridView