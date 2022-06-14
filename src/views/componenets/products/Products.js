import Product from "../product/Product"

const Products = ({products}) => {
  return (
    <div className="row">
        {
            products?.map((product, key) => (
                <div key={key} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <Product product={product} />
                </div>
            ))
        }
    </div>
  )
}

export default Products