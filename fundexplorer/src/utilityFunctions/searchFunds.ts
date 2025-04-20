import { Funds } from "../dataTypes";

  export const searchFunds = (query: string, data: Funds[]) => {

    if(!query) return data;

    const queryLowercase = query.toLowerCase().trim();

    return data.filter((fund: Funds) => {
      const name = fund.name || '';
      const benchmark = fund.benchmark || '';

      return (
       name.toLowerCase().includes(queryLowercase) || 
       benchmark.toLowerCase().includes(queryLowercase)
      );
    });
  }

  export const filterFunds = (
    selectedRegions: string[], 
    selectedDomicile: string[], 
    fundsData: Funds[]
    ) : Funds[]  => {

    if (!selectedDomicile.length && !selectedRegions.length) return fundsData;

    return fundsData.filter((fund: Funds) => {

      const regionMatch = 
        selectedRegions.length === 0 ?
        true
        : selectedRegions.some(region => region.startsWith(fund.region));

      const domicileMatch = 
        selectedDomicile.length === 0 ?
        true
        : selectedDomicile.some(domicile => domicile.startsWith(fund.domicile));

      return regionMatch && domicileMatch
    });
  };
