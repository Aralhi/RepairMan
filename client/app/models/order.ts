export class Order {
  _id: string;
  name: string;
  no: string;
  subject: string;
  status: string;
  progress: number;
  customer: {
    _id: string
    name: string
    carNumber: string
    phone: string
    carType: string
    company: string
    remark: string
  };
  subjectsCost: number;
  materialsCost: number;
  orderCost: number;
  assignStaffs: [{
    _id: string;
    name: string;
    phone: string;
    address: string;
    remark: string;
  }];
  assignDate: Date;
  repairSubjects: [
    {
      id: number
      name: string
      code: string
      staff: string
      cost: number
      costUnit: string
    }
  ];
  repairMaterials: [
    {
      _id: number
      name: string
      carType: string
      count: number
      costUnit: string
      outPrice: number
      inPrice: number
      unit: string
    }
  ];
}
