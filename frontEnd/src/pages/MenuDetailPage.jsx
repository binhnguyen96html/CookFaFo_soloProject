import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/BreadcrumbCom";
import CarouselCom2 from "../components/CarouselCom2";
import { useGetMenuByIdQuery } from "../slices/api/menuApiSlice";
import { useGetProductsBasedMenuKeyQuery } from "../slices/api/productApiSlice";
import Spinner from "../components/Spinner";
import AlertCom from "../components/AlertCom";
import ProductCard from "../components/ProductCard";
import { FaStore } from "react-icons/fa";
import { addToCart } from "../slices/reducers/cartSlice";
import { useDispatch} from "react-redux";

const MenuDetailPage = () => {
  const [menuKeyInput, setMenuKeyInput] = useState("");
  const { id: cookList_id } = useParams();
  
  const dispatch = useDispatch();

  const {
    data: menu,
    error: menuError,
    isLoading: menuIsLoading,
  } = useGetMenuByIdQuery(cookList_id);

  

  useEffect(() => {
    if (menu) setMenuKeyInput(menu.menuKey);
  }, [menu]);

  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetProductsBasedMenuKeyQuery(menuKeyInput);

  // console.log(products);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }

  // const cartData = useSelector((state) => state.cart)

  return (
    <>
      {menuIsLoading ? (
        <Spinner />
      ) : menuError ? (
        <AlertCom err={menuError} />
      ) : (
        <div>
          <Breadcrumb category={menu.category} />

          <div className="md:grid md:grid-cols-6 gap-8 mt-4">
            <div className="col-span-4">
              <CarouselCom2 images={menu.image} />

              {menu.recipes.map((step, i) => (
                <div className="text-justify" key={i}>
                  <h5>Step: {i + 1}</h5>
                  <p>{step}</p>
                </div>
              ))}
            </div>

            <div
              className="col-span-2 flex flex-col items-center 
              overflow-auto scrollbar-hide
              h-100vh rounded-xl bg-slate-100"
            >
              {productsIsLoading ? (
                <Spinner />
              ) : productsError ? (
                //how to handle this error
                // <AlertCom err={productsError} />
                <p>Error</p>
              ) : (
                <>
                  <div
                    className="bg-gradient-to-r from-red-500 to-yellow-400 
                  text-white
                   flex items-center gap-2
                   py-3 px-5 my-6 rounded-3xl"
                  >
                    <FaStore className="text-2xl" />
                    <h6 className="">You can find all ingredients here</h6>
                  </div>
                  {products.map((pro) => (
                    <div key={pro._id}>
                      <ProductCard product={pro} clickHandler={addToCartHandler}/>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDetailPage;
