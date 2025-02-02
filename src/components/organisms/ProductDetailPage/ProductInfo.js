import Photo from "../../atoms/Photo";
import ProductInformation from "../../molecules/ProductDetailPage/ProductInformation";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInfo = ({ productDetail }) => {
  const img = productDetail.image;
  return (
    <div className="product-info">
      <div className="split photo">
        <Photo src={staticServerUri + img} />
      </div>
      <div className="split info">
        <ProductInformation productDetail={productDetail} />
      </div>
    </div>
  );
};

export default ProductInfo;
