import React, { useCallback, useState, useEffect } from 'react';
import Banner from "./Banner.tsx";
import SidebarFilter from "./SidebarFilter.tsx";
import SearchBar from "./SearchBar.tsx";
import FundsList from "./FundsList.tsx";
import GridView from './GridView.tsx';
import "../styles/body.css"
import { FundsView } from '../dataTypes.ts';
import { searchFunds, filterFunds } from '../utilityFunctions/searchFunds.ts';
import { fundsData } from '../data/fundsData.ts';
import { Funds } from '../dataTypes.ts';

const Body: React.FC = () => {

    const [view, setView] = useState<FundsView>(FundsView.LIST)
    const [query, setQuery] = useState<string>('')
    const [searchResults, setSearchResults] = useState<Funds[]>(fundsData)
    const [selectedregions, setSelectedregions] = useState<string[]>([])
    const [selectedDomicile, setSelectedDomicile] = useState<string[]>([])

    useEffect(() => {
        let results = fundsData;

        if (query) {
            results = searchFunds(query, results);
        }
        if (selectedregions.length > 0 || selectedDomicile.length > 0) {
            results = filterFunds(selectedregions, selectedDomicile, results,);
        }
        setSearchResults(results);
    }, [query, selectedregions, selectedDomicile]);


    const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        const results = searchFunds(searchQuery, fundsData);
        setSearchResults(results);
    }, []);


    const onFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        const {value: filterQuery, checked: isChecked, id: filterId} = e.target

        if(filterId === 'regionFilter') {
            setSelectedregions(prev => {
                const updated = isChecked
                    ? [...prev, filterQuery]
                    : prev.filter(region => region !== filterQuery);
    
                const filterResults = filterFunds(updated, selectedregions, fundsData);
                setSearchResults(filterResults);
    
                return updated;
            });
        }

        else if(filterId === 'domicileFilter'){
            setSelectedDomicile(prev => {
                const updated = isChecked
                    ? [...prev, filterQuery]
                    : prev.filter(domicile => domicile !== filterQuery);
    
                const filterResults = filterFunds(updated, selectedDomicile, fundsData);
                setSearchResults(filterResults);
    
                return updated;
            });
        }
    }, []);


    return (
        <>
            <Banner />
            <div className="body-layout">
                <div className="body-inner">
                    <SidebarFilter 
                        onFilter={onFilter}
                        setSelectedDomicile={setSelectedDomicile}
                        setSelectedregions={setSelectedregions}
                        selectedDomicile={selectedDomicile}
                        selectedregions={selectedregions}
                        />
                    <div className="vertical-divider"></div>
                    <div className="main-panel">
                        <SearchBar
                            setView={setView}
                            onSearch={onSearch}
                            query={query}
                            view={view}
                        />
                        {view === FundsView.GRID ?
                            <GridView searchResults={searchResults}/>
                            :
                            <FundsList searchResults={searchResults}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
