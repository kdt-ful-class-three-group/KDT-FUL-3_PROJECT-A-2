export class CreateOrderDto {
  member_id: number;
  stock_code: string;
  stock_name: string;
  order_type: string;
  quantity: number;
  price: number;
  status: string;
}