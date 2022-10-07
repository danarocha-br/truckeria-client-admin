export const data = {
  id: '1',
  menu_category_id: '1',
  name: 'Burger supreme',
  internal_name: 'BG_SUP',
  image_url: '',
  description:
    'Hamburguer, pão brioche, cheddar , tomate, pickles, salada, maionese de ervas',
  cost_price: 9.85,
  price: 15.0,
  margin_price: 100.0,
  product_unity: 'unity',
  product_type: 'combo',
  product_category: ['hamburger'],
  tags: ['hamburger', 'double'],
  is_active: true,
  default_quantity: 1,
  max_quantity: 10,
  calories: 670,
  product_weight: 320,
  barcode: 8501000000035,
  internal_barcode: 13345,
  item_stock_quantity: 100,
  badges: ['eggs', 'nuts', 'vegan', 'vegetarian', 'gluten'],
  direct_sale: true,
  display_featured: false,
  display_new_item: true,
  additional_items: [
    {
      id: '2',
      name: 'Ponto da carne',
      title: 'Escolha os molhos',
      internal_name: 'molhos',
      type: 'single',
      price: 15,
      items: [
        {
          id: '1',
          name: 'Ponto médio',
        },
        {
          id: '2',
          name: 'Ponto mais',
        },
        {
          id: '3',
          name: 'Ponto a menos',
        },
      ],
    },
  ],

  // additional_items: [{
  //   group_name: 'Ponto da carne',
  //   type: 'mandatory',
  //   min_quantity: 0,
  //   max_quantity: 0,
  //   isActive: true,
  //   items: {
  //     id: '1',
  //     item_id: 0,
  //     item_name: 0,
  //     item_price: 0,
  //     isActive: 0,
  //   }]
};
