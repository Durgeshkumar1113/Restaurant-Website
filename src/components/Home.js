import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Productlist from '../Productlist'
import '../componentcss/Home.css'
const dishes = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese marinated in Indian spices, served with mint chutney.",
    price: 299,
    image: "https://th.bing.com/th/id/OIP.j6VH4YcKhjTrGLuhTsH5wwHaFj?pid=ImgDet&rs=1"
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    description: "Flavorful rice dish cooked with mixed vegetables and aromatic spices.",
    price: 349,
    image: "https://th.bing.com/th/id/R.e48a54dcb2cb42bf174fc9791d9fccb3?rik=UAvP2rJjypygLA&riu=http%3a%2f%2fwww.yummyfoodrecipes.in%2fresources%2fpicture%2forg%2fVegetable-Dum-Biryani.jpg&ehk=pjD3I2fER3cAaq%2fcSLeEupUSslwEKDxTDjidJV8w%2f64%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 3,
    name: "Palak Paneer",
    description: "Paneer cubes cooked in a creamy spinach gravy, served with naan.",
    price: 249,
    image: "https://damdarrecipes.com/wp-content/uploads/2021/03/Palak-Paneer-Recipe-533073805.jpg"
  },
  {
    id: 4,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with deep-fried bread (bhature).",
    price: 199,
    image: "https://th.bing.com/th/id/OIP.m2TsGNbgzWBNQ7O4kuigHAHaEq?pid=ImgDet&rs=1"
  },
  {
    id: 5,
    name: "Aloo Gobi",
    description: "Potato and cauliflower curry cooked with Indian spices.",
    price: 149,
    image: "https://i.pinimg.com/originals/1e/cd/e9/1ecde9db2241cf28a742c21119a7cc90.jpg"
  },
  {
    id: 6,
    name: "Dal Makhani",
    description: "Creamy black lentils simmered overnight with spices and butter.",
    price: 249,
    image: "https://th.bing.com/th/id/OIP.kgI64fKoKoFx1fX-nkEWpAAAAA?pid=ImgDet&rs=1"
  },
  {
    id: 7,
    name: "Matar Paneer",
    description: "Paneer and green peas cooked in a rich and creamy tomato-based gravy.",
    price: 299,
    image: "https://www.gurkhas.com.au/wp-content/uploads/2020/02/matar-paneer-recipe.jpg"
  },
  {
    id: 8,
    name: "Pav Bhaji",
    description: "Spicy mashed vegetable curry served with buttered buns.",
    price: 179,
    image: "https://th.bing.com/th/id/OIP.KNeWMTd-NhhL8sEKVVkIzQHaG9?pid=ImgDet&rs=1"
  },
  {
    id: 9,
    name: "Veg Pulao",
    description: "Fragrant rice dish cooked with mixed vegetables and aromatic spices.",
    price: 199,
    image: "https://i0.wp.com/swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9517.jpg"
  },
  {
    id: 10,
    name: "Malai Kofta",
    description: "Deep-fried paneer and vegetable dumplings in a creamy tomato-based gravy.",
    price: 299,
    image: "https://th.bing.com/th/id/OIP._0YrhnIEgC6EdadwSYwhSAHaLH?pid=ImgDet&rs=1"
  },
  {
    id: 11,
    name: "Noodles",
    description: "Fiery and flavorful Asian delight",
    price: 80,
    image: "https://th.bing.com/th/id/R.2bcdf60de75eeccda4b0d528bbd34020?rik=6QxDQ4vb%2fLNmhg&riu=http%3a%2f%2fmain.poddarfoods.com%2fwp-content%2fuploads%2f2016%2f08%2fnoodles.png&ehk=FSqrHXUW5iF56h0pzm2IgRcw0faCJ8kTvNTH4%2fvpcoU%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 12,
    name: "Grilled Salmon",
    description: "Tender and flaky seafood delight",
    price: 350,
    image: "https://uploads-ssl.webflow.com/578569a32be464af0feec67d/578d14e68ad454da639c01be_food-dish-salmon.png"
  },
  {
    id: 13,
    name: "Spicy Chicken Wings",
    description: "Finger-licking fiery chicken bites",
    price: 200,
    image: "https://www.hayzedmagazine.com/wp-content/uploads/2018/04/Delicious-recipe-for-spicy-chicken-wings-750x400.jpg"
  },
  {
    id: 14,
    name: "Margherita Pizza",
    description: "Classic Italian thin-crust delight",
    price: 300,
    image: "https://i.pinimg.com/originals/3c/a8/ed/3ca8eda1c6b50c3aed0e2781a9a034c4.jpg"
  },
  {
    id: 15,
    name: "Creamy Mushroom Soup",
    description: "Rich and comforting earthy flavors",
    price: 150,
    image: "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2020/11/Creamy-Mushroom-Wild-Rice-Soup-37.jpg"
  },
  {
    id: 16,
    name: "Greek Yogurt Parfait",
    description: "Layers of yogurt, fruit, and granola",
    price: 200,
    image: "https://th.bing.com/th/id/OIP.YX2qMZQg_rF3znD5kr2pyQHaE8?pid=ImgDet&rs=1"
  },
  {
    id: 17,
    name: "Caesar Salad",
    description: "Fresh and crisp greens with creamy dressing",
    price: 250,
    image: "https://kalejunkie.com/wp-content/uploads/2021/05/KALEJUNKIE-CAESAR-SALAD-8-1365x2048.jpg"
  },
  {
    id: 18,
    name: "French Onion Soup",
    description: "Hearty soup with caramelized onions and melted cheese",
    price: 200,
    image: "https://th.bing.com/th/id/OIP.g7bFP9Ec1hVX3O-oINIZvwHaLH?pid=ImgDet&rs=1"
  },
  {
    id: 19,
    name: "Chocolate Lava Cake",
    description: "Decadent molten chocolate indulgence",
    price: 200,
    image: "https://tornadoughalli.com/wp-content/uploads/2020/02/LAVA-CAKES-18-768x1077.jpg"
  },
  {
    id: 20,
    name: "Greek Gyro Wrap",
    description: "Tasty Mediterranean wrap with tzatziki",
    price: 300,
    image: "https://th.bing.com/th/id/OIP.E-TR9V9B1n9XwNrW_J_VCAAAAA?pid=ImgDet&rs=1"
  },
  {
    id: 21,
    name: "Sushi Roll Sampler",
    description: "Assorted bites of sushi heaven",
    price: 400,
    image: "https://i.pinimg.com/originals/8a/6b/cb/8a6bcbc61f903a2a317c8748befcf250.jpg"
  },
  {
    id: 22,
    name: "Spinach and Feta Quiche",
    description: "Fluffy and cheesy vegetarian delight",
    price: 200,
    image: "https://i.pinimg.com/originals/29/61/45/296145cd39824927a0ab4e7d64cff45d.jpg"
  },
  {
    id: 23,
    name: "Lemon Garlic Shrimp",
    description: "Zesty and tangy seafood sensation",
    price: 350,
    image: "https://th.bing.com/th/id/OIP.JraW59Ltm2ol4_oNeG02XAHaLH?pid=ImgDet&rs=1"
  },
  {
    id: 24,
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken in a portable package",
    price: 250,
    image: "https://th.bing.com/th/id/OIP.pgIbx21og6_yGVYvbJacmwHaLG?pid=ImgDet&rs=1"
  },
  {
    id: 25,
    name: "Mango Coconut Smoothie",
    description: "Refreshing tropical fruit blend",
    price: 150,
    image: "https://pancakerecipes.com/wp-content/uploads/2021/02/coconut-mango-smoothie-1500-23-1363x2048.jpg"
  },
  {
    id: 26,
    name: "Margherita Flatbread",
    description: "Thin and crispy flatbread with tomato and mozzarella",
    price: 250,
    image: "https://th.bing.com/th/id/OIP.8dGfjCDKZIzchz0U2w6zLQHaLH?pid=ImgDet&rs=1"
  },
  {
    id: 27,
    name: "Caprese Bruschetta",
    description: "Fresh tomato, mozzarella, and basil on toast",
    price: 200,
    image: "https://th.bing.com/th/id/OIP.hWZM-ew6ebuhrwpP9F-rAQHaE8?pid=ImgDet&rs=1"
  },
  {
    id: 28,
    name: "Honey Glazed Carrots",
    description: "Sweet and tender roasted vegetable side",
    price: 150,
    image: "https://th.bing.com/th/id/OIP.-Mks-PSZeo3TcvgkFJxk-gHaKy?pid=ImgDet&rs=1"
  },
  {
    id: 29,
    name: "Chicken Satay Skewers",
    description: "Grilled marinated chicken on sticks",
    price: 250,
    image: "https://th.bing.com/th/id/OIP.vveAsTVfN-cZAd8LiY2neQHaFN?pid=ImgDet&rs=1"
  },
  {
    id: 30,
    name: "Baked Ziti Pasta",
    description: "Bubbly and cheesy Italian pasta dish",
    price: 300,
    image: "https://i.pinimg.com/originals/74/ac/7c/74ac7c05a43687958cf80f7312402a86.jpg"
  },
  {
    id: 31,
    name: "Tiramisu Cheesecake",
    description: "Dreamy fusion of two classic desserts",
    price: 200,
    image: "https://i.pinimg.com/originals/97/e0/77/97e077539d781f966bb324b4b1ea1d62.jpg"
  },
  {
    id: 32,
    name: "Greek Salad",
    description: "Crisp veggies, olives, and feta in tangy dressing",
    price: 250,
    image: "https://th.bing.com/th/id/OIP.j_5OzAHlW5_t7u-FxsqRcAHaFq?pid=ImgDet&rs=1"
  },
  {
    id: 33,
    name: "Shrimp and Grits",
    description: "Southern-style dish with shrimp and creamy grits",
    price: 400,
    image: "https://th.bing.com/th/id/OIP.ETCG-4przWZOOVaDJWVwkAHaFj?pid=ImgDet&rs=1"
  },
  {
    id: 34,
    name: "Greek Yogurt Parfait",
    description: "Layers of yogurt, fruit, and granola",
    price: 200,
    image: "https://share-cdn-prod.azureedge.net/wp-content/uploads/2015/12/yogurt.jpg"
  },
  {
    id: 35,
    name: "Teriyaki Salmon",
    description: "Sweet and savory glazed salmon fillet",
    price: 400,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/salmon-teriyaki.jpg"
  },
  {
    id: 36,
    name: "Vegetarian Pad Thai",
    description: "Tasty stir-fried rice noodles with veggies",
    price: 300,
    image: "https://th.bing.com/th/id/OIP.UxislmKWiS8uyZKbXq5J1QHaHZ?pid=ImgDet&rs=1"
  },
  {
    id: 37,
    name: "Pesto Pasta Primavera",
    description: "Fresh herb-infused pasta with mixed vegetables",
    price: 350,
    image: "https://images.heb.com/is/image/HEBGrocery/pesto-pasta-primavera-recipe-1"
  },
  {
    id: 38,
    name: "Blueberry Pancakes",
    description: "Fluffy stacks of pancakes with blueberry topping",
    price: 200,
    image: "https://th.bing.com/th/id/R.b75d59b533ac5cbd8c4e811dcaf85402?rik=aNDwlLr7mQ%2biug&riu=http%3a%2f%2fdel.h-cdn.co%2fassets%2f17%2f22%2f1600x800%2flandscape-1496168110-blueberry-buttermilk-pancakesl3.jpg&ehk=7p3fmCoj3az2SwFbhghjV2jiP2fn3M5xgBTrHb26rO4%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 39,
    name: "Roasted Beet Salad",
    description: "Colorful and nutritious salad with roasted beets",
    price: 250,
    image: "https://1.bp.blogspot.com/-6vfOb-CLzOI/VNEzOBN1mJI/AAAAAAAAJs0/9L1B46-Vf4E/s1600/beet_salad1.jpg"
  },
  {
    id: 40,
    name: "Chicken Tikka Masala",
    description: "Fragrant and creamy Indian curry dish",
    price: 300,
    image: "https://i.pinimg.com/originals/ae/9f/84/ae9f8435bb164b54e3a959597c027a5d.jpg"
  },
  {
    id: 41,
    name: "Philly Cheesesteak Sandwich",
    description: "Iconic sliced steak and melted cheese",
    price: 350,
    image: "https://i.pinimg.com/originals/83/f1/e2/83f1e2bcb933628565ce176e694964bb.jpg"
  },
  {
    id: 42,
    name: "Shrimp Scampi Linguine",
    description: "Succulent shrimp in garlic butter sauce",
    price: 400,
    image: "https://th.bing.com/th/id/OIP.BdK2MQl204PNp3wvYma44wHaHa?pid=ImgDet&rs=1"
  },
  {
    id: 43,
    name: "Baked Chicken Parmesan",
    description: "Crispy breaded chicken smothered in marinara",
    price: 300,
    image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/baked-chicken-parmesan-24.jpg"
  },
  {
    id: 44,
    name: "Apple Cinnamon Crumble",
    description: "Warm and spiced apple dessert with a crispy topping",
    price: 200,
    image: "https://th.bing.com/th/id/R.0f8f4caf02d25c3d2c68ef37b03fcf32?rik=5J50XffAtp%2f0oA&riu=http%3a%2f%2fpassthesushi.com%2fwp-content%2fuploads%2f2011%2f09%2fapple_crumble.jpg&ehk=hCRsGJ0OsFB08eqxEGUZ7MLrTXYr8%2fiHKj0pN81kRgc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 45,
    name: "Stuffed Bell Peppers",
    description: "Bell peppers filled with flavorful stuffing",
    price: 250,
    image: "https://i.ytimg.com/vi/_oUVaDVe3UE/maxresdefault.jpg"
  },
  {
    id: 46,
    name: "Vegetable Spring Rolls",
    description: "Light and crispy Asian appetizers",
    price: 150,
    image: "https://media.healthyfood.com/wp-content/uploads/2020/11/SpringRolls-1024x652.jpg"
  },
  {
    id: 47,
    name: "Caesar Pasta Salad",
    description: "Pasta salad with all the classic Caesar flavors",
    price: 250,
    image: "https://www.wellplated.com/wp-content/uploads/2016/06/Healthy-Chicken-Caesar-Pasta-Salad-500x500.jpg"
  },
  {
    id: 48,
    name: "Chicken Shawarma Wrap",
    description: "Marinated grilled chicken in a wrap",
    price: 300,
    image: "https://th.bing.com/th/id/OIP.ETWaZrpkjtqRlbSFYqZgcQAAAA?pid=ImgDet&rs=1"
  },
  {
    id: 49,
    name: "Chocolate Chip Cookies",
    description: "Classic homemade cookies with chocolate chunks",
    price: 150,
    image: "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/6-3-large.jpg"
  },
  {
    id: 50,
    name: "Chicken Noodle Soup",
    description: "Comforting soup with chicken and noodles",
    price: 200,
    image: "https://th.bing.com/th/id/OIP.jvl4Hc1re3bKUqGSQ1TzVgHaHa?pid=ImgDet&rs=1"
  },
  {
    id: 51,
    name: "Caprese Stuffed Chicken",
    description: "Chicken breasts stuffed with mozzarella and tomatoes",
    price: 350,
    image: "https://th.bing.com/th/id/OIP.UWR_c5wCHqrTpTJfCB_LIQHaE-?pid=ImgDet&rs=1"
  },
  {
    id: 52,
    name: "Roasted Garlic Mashed Potatoes",
    description: "Creamy mashed potatoes with a garlicky twist",
    price: 200,
    image: "https://th.bing.com/th/id/OIP.K6u7DLORqkgvUPyT0LV_9AHaHa?pid=ImgDet&rs=1"
  },
  {
    id: 53,
    name: "Mango Sticky Rice",
    description: "Sweet Thai dessert with mango and sticky rice",
    price: 150,
    image: "https://i.imgur.com/oHTJdXp.jpg"
  },
  {
    id: 54,
    name: "Avocado Toast",
    description: "Toasted bread topped with creamy avocado",
    price: 150,
    image: "https://thumbs.dreamstime.com/b/avocado-toasts-egg-tomatoes-seasonings-white-wooden-rustic-cutting-board-stone-background-ingredients-healthy-137205043.jpg"
  },
  {
    id: 55,
    name: "Mushroom Risotto",
    description: "Creamy Italian rice dish with mushrooms",
    price: 300,
    image: "https://th.bing.com/th/id/OIP.a00miGELZi0yc0On8fxZGAHaFO?pid=ImgDet&rs=1"
  },
  {
    id: 56,
    name: "Chicken Quesadilla",
    description: "Grilled tortilla filled with melted cheese and chicken",
    price: 250,
    image: "https://th.bing.com/th/id/OIP.MyXNRIcodsZIkzXYtRxC_AHaE8?pid=ImgDet&rs=1"
  }
];


export const Home = () => {
  return (
    <div >
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.XB9l96pkJgDjwySLuhgtugHaDt?pid=ImgDet&rs=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Salmon</h3>
          <p> Tender and flaky seafood delight..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hayzedmagazine.com/wp-content/uploads/2018/04/Delicious-recipe-for-spicy-chicken-wings-750x400.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Spicy Checken Wings</h3>
          <p>Finger-licking fiery chicken bites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.f2b0fd0e74a733fdcb828e0227aebc40?rik=8iCQRKkFBM633A&riu=http%3a%2f%2fimg.delicious.com.au%2fGxyihqoQ%2fw1200%2fdel%2f2016%2f06%2ftiramisu-cheesecake-36413-2.jpg&ehk=%2fKtFtQwrv8pgetS9xqzzZ6SEEWwjl6oTD9mLSasMBOs%3d&risl=&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tiramisu Cheesecake</h3>
          <p> Dreamy fusion of two classic desserts.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
        <Productlist dishes = {dishes}/>
    </div>
    </div>
  )
}
export default Home;