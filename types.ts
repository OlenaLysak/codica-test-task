import { Dispatch, SetStateAction } from 'react';

export interface CityItem {
  id: string;
  name?: string;
  lat: number;
  lon: number;
  state?: string;
  label?: string;
}

export interface ObjectItem extends Object {
  id: string;
  lat: number;
  lon: number;
  name: string;
  label: string;
} //??????????

export interface AppContextInterface {
  cities: [CityItem];
  setCities: Dispatch<SetStateAction<[CityItem]>>;
}

export interface InputProps {
  handleOptionSelected: (item: CityItem) => void;
}

export interface LocationProps {
  state: string;
  country: string;
  name: string;
  lat: number;
  lon: number;
}

export interface TextItemProps {
  title: string;
  value: number | string;
}
