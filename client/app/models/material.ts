export interface Material {
  _id: string;
  name: string;
  no: string;
  guige: number;
  unit: string;
  inPrice: number;
  outPrice: number;
  vendor: {
    _id: string;
    name: string;
  };
  remark: string;
}
