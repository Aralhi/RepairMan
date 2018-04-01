export interface Material {
  _id: string;
  name: string;
  carType: string;
  count: number;
  unit: string;
  inPrice: number;
  outPrice: number;
  vendor: {
    _id: string;
    name: string;
  };
  remark: string;
}
