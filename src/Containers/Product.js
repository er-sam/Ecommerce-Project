import Data from "./Data.json"
import Footer from "./Footer"


const Product = () => {
  console.log(Data)
  return (
    <>
      <div className="pd-head">
 
          <h2>&#8962;|Shophome!|</h2>
 
      </div>
      <div className="product-container">
      {
        Data.map((data)=>{
          return(
            <>
            <div className="product">
                <div className="img">
                    <div className="img">
                    <img src={data.link} alt={data.Model} />
                </div>
                <div className="pd-info">
                    <div className="name">{data.Model}</div>
                    <div className="brand">{data.Brand}</div>
                </div>

                <div className="select">
                    <div className="price"><span>Price: </span><span>&#8377;</span>{data.Price}</div>
                    <div className="book"><span>Cart + </span></div>
                </div>
            </div>
            </div>
            </>
          )
        })
      }
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}


export default Product;