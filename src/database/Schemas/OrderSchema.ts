export const OrderSchema = {
  name: 'Order',
  
  // O mongo usa um id próprio, mas para nosso prórpio uso, vamos criar um _id
  properties: {
    _id: 'string',
    patrimony: 'string',
    equipment: 'string',  
    description: 'string',
    status: 'string',
    created_at: 'date'
  },

  primaryKey: '_id',
}