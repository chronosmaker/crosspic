export interface Mission {
  id: string;
  title: string;
  option: MOption;
  data: Array<MData[]>;
}

export interface MOption {
  row: string;
  col: string;
  life: string;
}

export interface MData {
  fill: number;
  color: string;
}
