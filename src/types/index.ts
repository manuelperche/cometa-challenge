export interface StudentInfo {
  id: string;
  first_name: string;
  last_name: string;
  guardian: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    tax_id: string;
  };
  cohort: string;
  school: {
    id: string;
    name: string;
    logo: string;
    country: string;
    city: string;
    address: string;
    zip_code: string;
  };
  monthly_grant_type: string;
  monthly_grant_value: string;
  inscription_grant_value: string;
  inscription_grant_type: string;
}

export interface StudentOrder {
  id: string;
  concept: string;
  name: string;
  price: string;
  price_currency: string;
  due: string;
  status: "PAID" | "DUE" | "OUTSTANDING";
  interest: string;
  pending: boolean;
  payin: {
    id: string;
    status: string;
    created: string;
  }
}

export interface StudentContextType { 
  student: StudentInfo | null;
  orders: StudentOrder[];
}