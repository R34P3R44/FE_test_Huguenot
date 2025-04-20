import { Navbar, FilterRegion, FilterDomicile } from "./dataTypes"

export const navbarItems: Navbar[] = [
    {id: 1, value: "About", isOpen: false},
    {id: 2, value: "Funds", isOpen: true},
    {id: 3, value: "Insights", isOpen: false},
    {id: 4, value: "Resources", isOpen: false},
    {id: 5, value: "Contact", isOpen: false},
]

export const filterRegion: FilterRegion[] = [
    {id: 1, value: "UK Equities", isChecked: false},
    {id: 2, value: "Global Equities", isChecked: false},
    {id: 3, value: "European Equities", isChecked: false},
    {id: 4, value: "Emerging Markets Equities", isChecked: false},
    {id: 5, value: "Asian Equities", isChecked: false},
]

export const filterDomicile: FilterDomicile[] = [
    {id: 1, value: "Dublin (Irish ICAV)", isChecked: false},
    {id: 2, value: "London (UK OEIC)", isChecked: false},
]

