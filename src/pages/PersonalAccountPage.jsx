import classNames from 'classnames';
import { useState } from 'react';
import Contract from '../components/Contract';

export default function PersonalAccountPage() {
    const role = 2;
    const application_count = [
      {
      id: 1,
      isApplicationConfirm: true
    },
  {
    id:2,
    isApplicationConfirm: false,
  },
{
  id: 3,
  isApplicationConfirm: false
}
]
    const user=[
        {
            name: "hello",
            second_name: 'hello2'
        }
    ];
    const manager=[
        {
            name: "manager_hello",
            second_name: 'manager_hello2'
        }
    ];
    const product = [
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
        // {
        //     id: 2,
        //     name: 'Kia K5',
        //     // href: '#',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        //     imageAlt: "cool car",
        //     price: '1 250 799',
        //     color: 'белый',
        //     drive: 'передний',
        //     fuel: 'diesel',
        //     liters_count: '1.6'
        //   },
        //   {
        //     id: 3,
        //     name: 'Nissan Qashqai',
        //     // href: '#',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        //     imageAlt: "cool car",
        //     price: '11 450 999',
        //     color: 'красный',
        //     drive: 'передний',
        //     fuel: 'diesel',
        //     liters_count: '1.6'
        //   },
      ]
    return (
        <div className="bg-white py-24 sm:py-16 container mx-auto">
             {/* заголовок */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-5">Личный кабинет</h2>
                </div>
            </div>

            {/* перечисление инфы */}
        <div className="lg:px-8">
        <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Информация о пользователе</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Тут перечислена персональная информация и документы.</p>
      </div>
      </div>
      {
        role === 1 ? <UserPersonalAcc product={product} manager={manager} user={user}/> : (role === 2 ? <ManagerPersonalAcc application_count={application_count}/> : <SellerPesonalAcc />)
      }
        </div>
    )
}

const UserPersonalAcc = ({product, manager, user}) => {
    const application_id = 1;
    const isApplicationConfirm = true;
    const isContractPayment = false;
    const [open,setOpen] = useState(false);
    const openContract = () => {
        setOpen(!open);
    }
    return (
        <>
      <div className="mt-6 border-t border-gray-100 lg:px-8">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Имя</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Фамилия</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Роль</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Пользователь</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Номер телефона</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+7 891 345 35 65</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Документы</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                {
                    application_id ? 
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                   
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">Заявка.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p 
                      className={classNames('font-medium', {
                'text-green-500': isApplicationConfirm,
                'text-red-500': !isApplicationConfirm,
                })} 
                      >
                        {isApplicationConfirm ? "Подтверждена" : "Не подтверждена"}
                      </p>
                    </div>
                  </li>
                    : <>
                    </> 

                }
                
                {
                    isApplicationConfirm && application_id ? 
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Договoр.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  {
                    isContractPayment !== true ? 
                    
                        <div className="ml-4 flex-shrink-0" onClick={openContract}>
                        <p 
                        className='font-medium text-red-500 hover:text-red-700 cursor-pointer'
                        >
                        Hе оплачено
                        </p>
                    </div>
                     : 
                    <div className="ml-4 flex-shrink-0">
                        <p 
                        className='font-medium text-green-500' 
                        >
                        "Oплачено"
                        </p>
                    </div>
                    
                  }

                </li>
                    : <></>
                }
                
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <Contract product={product} manager={manager} user={user} open={open} setOpen={setOpen}/>
      </>
    )
}

const ManagerPersonalAcc = ({application_count}) => {
    return (
      <div className="mt-6 border-t border-gray-100 lg:px-8">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Имя</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Фамилия</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Роль</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Менеджер</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Номер телефона</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+7 891 345 35 65</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Количество открытых заявок</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{application_count.length || 0}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Документы</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {
              application_count.length !== 0 ? 
    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
      {
        application_count.map((application) => 
        
        <li key={application.id}className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
          <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">{application.id}</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>

                  <div className="ml-4 flex-shrink-0">
                  <p 
                      className={classNames('font-medium', {
                'text-green-500': application.isApplicationConfirm,
                'text-red-500': !application.isApplicationConfirm,
                })} 
                      >
                        {application.isApplicationConfirm ? "Подтверждена" : "Не подтверждена"}
                      </p>
                    </div>
        </li> 
        )
      }
    </ul>
     : 
              <>
              </>
            }
            </dd>
          </div>
        </dl>
      </div>
    )
}

const SellerPesonalAcc = () => {
    return (
      <div className="mt-6 border-t border-gray-100 lg:px-8">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Имя</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Фамилия</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Роль</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Продавец</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Номер телефона</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+7 891 345 35 65</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Количество проданных авто</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Количество оставшихся авто</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
        </dl>
      </div>
    )
}