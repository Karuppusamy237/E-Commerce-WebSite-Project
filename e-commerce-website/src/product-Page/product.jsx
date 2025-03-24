import './product.css';

function Product(props){
  

  const productDetails = props.product;
  const ProductArray = productDetails.map((items) => {

    return(
    <div className="Product-container">
    <div className="Product-image">
      <img src={items.image} className='picture' alt="Product-image" />

    </div>
      <div className="Product-name">
         <h4>{items.name}</h4>

      </div>
          <div className="Product-price">
            <p>Rs: {items.priceCents}</p>

          </div>
              <div className="Add-to-Cart-button">

                <button>Add To Cart</button>


              </div>

                  <div className="Buy-Now-button">
                      <button>Buy Now</button>
                  </div>
 </div>
    );


  });



  return(

    <>
    <div className='header'>
      <img src="src\assets\Product-image\images\products\logo.png" alt="app logo"  className='App-Logo'/>
      <input type="text" placeholder='Search Product Here'  className='input' />
      <button className='Search-button'><img src="src\assets\Product-image\images\icons\search-icon.png" alt="" /></button>
    </div>
    
    {ProductArray}
    <div className='footer'>
      <footer>
        <span>© 2025 All Rights Reserved</span>
      </footer>
    </div>
    </>
  );
}

export default Product;


