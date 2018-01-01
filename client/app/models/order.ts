export class Order {
  _id: string;
  name: string;
  no: string;
  subject: string;
  customer: {
    name: string
    carNumber: string
    phone: string
    carType: string
    company: string
    remark: string
  };
  repairSubjects: [
    {
      name: string
      code: string
      staff: string
      cost: number
      costUnit: string
    }
  ];
  repairMaterials: [
    {
      name: string
      code: string
      spec: string
      count: number
      costUnit: string
      outPrice: number
      unit: string
    }
  ];
}
