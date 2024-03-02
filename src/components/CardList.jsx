import CarCard from "./CarCard"

export default function CardList () {

    const products = [
        {
          id: 1,
          name: 'Mazda 3',
          imageSrc: 'https://avatars.mds.yandex.net/get-autoru-vos/2078455/7ca8c3236195839768059c21bf98e9df/1200x900',
          imageAlt: "cool car",
          price: '3 500 400',
          color: 'черный',
          drive: 'передний',
          fuel: 'diesel',
          liters_count: '1.6'
        },
        {
          id: 7,
          name: 'Porsche 911',
          imageSrc: 'https://avatars.mds.yandex.net/get-autoru-vos/2153937/e09f3957a8ad7a75c8f6026f14e99352/1200x900',
          imageAlt: "cool car",
          price: '12 550 899',
          color: 'желтый',
          drive: 'передний',
          fuel: 'diesel',
          liters_count: '2'
        },
        {
            id: 2,
            name: 'Kia K5',
            imageSrc: 'https://pokatim.ru/uploads/posts/2020-07/1595083762_anh-thuc-te-kia-optima-the-he-moi-vua-ra-mat-27-_6966.jpg',
            imageAlt: "cool car",
            price: '4 250 799',
            color: 'белый',
            drive: 'передний',
            fuel: 'бензин',
            liters_count: '1.6'
          },
          {
            id: 3,
            name: 'Nissan Qashqai',
            imageSrc: 'https://avatars.mds.yandex.net/get-autoru-vos/2173513/90ef946600554f354efb2b0150850dd3/1200x900',
            imageAlt: "cool car",
            price: '2 350 799',
            color: 'красный',
            drive: 'передний',
            fuel: 'бензин',
            liters_count: '2'
          },
          {
            id: 4,
            name: 'Toyota Camry',
            imageSrc: 'https://avtovesti.com/wp-content/uploads/2022/09/WK7A0036.jpg',
            imageAlt: "cool car",
            price: '5 250 999',
            color: 'черный',
            drive: 'передний',
            fuel: 'diesel',
            liters_count: '1.6'
          },
          {
            id: 5,
            name: 'Volkswagen Polo',
            imageSrc: 'https://avatars.mds.yandex.net/get-autoru-vos/1650647/ddfe5e9c13eafe50fefdcf115bb41b87/1200x900',
            imageAlt: "cool car",
            price: '2 100 999',
            color: 'красный',
            drive: 'передний',
            fuel: 'бензин',
            liters_count: '2.5'
          },
          {
            id: 6,
            name: 'Kia Stinger',
            imageSrc: 'https://cdn.carbuzz.com/gallery-images/1600/438000/800/438863.jpg',
            imageAlt: "cool car",
            price: '11 450 999',
            color: 'желтый',
            drive: 'передний',
            fuel: 'diesel',
            liters_count: '2'
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