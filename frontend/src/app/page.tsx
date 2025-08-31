import { Categories, Container, Filters, ProductCard, ProductsGroupList, SortPopup, Title, TopBar } from "@/components/ui/shared";

export default function Home() {
  return <>

      <Container className="mt-10">
        <Title text='All pizzas' size="lg" className="font-extrabold"/>

        
      </Container>

        <TopBar />

        <Container className="mt-10 pb-14">
          <div className="flex gap-[70px]">

            {/* filters */}
            <div className="w-[250px">
              <Filters />
            </div>

            {/* assortiment's list */}
            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductsGroupList 
                  title='Pizzas'
                  items={[
                    {
                      id: 1,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 2,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 3,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 4,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 5,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 6,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 7,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                  ]}
                  categoryId={1}
                />
                <ProductsGroupList 
                  title='Combs'
                  items={[
                    {
                      id: 8,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 9,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 10,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 11,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 12,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 13,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 14,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                  ]}
                  categoryId={2}
                />
                <ProductsGroupList 
                  title='Snacks'
                  items={[
                    {
                      id: 8,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 9,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 10,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 11,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 12,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 13,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 14,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 15,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 16,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                    {
                      id: 17,
                      name: 'Pizza super',
                      imageUrl: 'https://pizzavenus.gr/site/wp-content/uploads/2022/03/pizzeria-template-header-pizza-img.png',
                      price: 15,
                      items: [{ price: 15 }],
                    },
                  ]}
                  categoryId={3}
                />
              </div>
            </div>

          </div>
        </Container>
        <div className="h-1000"></div>
    </>;
  
}
