import CarCard from "./CarCard"

export default function CardList () {

    const products = [
        {
          id: 1,
          name: 'Mazda 3',
        //   href: '#',
          imageSrc: 'https://pokatim.ru/uploads/posts/2020-07/1595083762_anh-thuc-te-kia-optima-the-he-moi-vua-ra-mat-27-_6966.jpg',
          imageAlt: "cool car",
          price: '3 500 400',
          color: 'черный',
          drive: 'передний',
          fuel: 'diesel',
          liters_count: '1.6'
        },
        {
            id: 2,
            name: 'Kia K5',
            // href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "cool car",
            price: '1 250 799',
            color: 'белый',
            drive: 'передний',
            fuel: 'diesel',
            liters_count: '1.6'
          },
          {
            id: 3,
            name: 'Nissan Qashqai',
            // href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "cool car",
            price: '11 450 999',
            color: 'красный',
            drive: 'передний',
            fuel: 'diesel',
            liters_count: '1.6'
          },
      ]

    return  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Все автомобили</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <CarCard {...product}/>
        ))}
      </div>
    </div>
  </div>
}