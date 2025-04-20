
export type Navbar = {
    id: number,
    value: string,
    isOpen: boolean
}

export type FilterRegion = {
    id: number,
    value: string,
    isChecked: boolean,
}

export type FilterDomicile = {
    id: number,
    value: string,
    isChecked: boolean,
}

export enum FundsView {
    LIST = 'list',
    GRID = 'grid'
}

export type Funds = {
    id: number,
    name: string,
    benchmark: string,
    domicile: string,
    regionColor: string;
    region: string,
    holdings: number,
    size: string,
    launchDate: string,
}

export type FundsOptionalId = Partial<Pick<Funds, 'id'>> & Omit<Funds, 'id'>;