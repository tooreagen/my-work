import {
  ProductItemStyled,
  ProductItemLink,
  ImageWrapper,
  ProductImage,
  WeightCount,
  Header,
  Description,
  Price,
  ProductDescription,
  ProductWeight,
  ProductCount,
} from './ProductItemStyled';

const ProductItem = ({ header, description, image, price, weight, count }) => {
  return (
    <ProductItemLink href="/">
      <ProductItemStyled>
        <ImageWrapper>
          <ProductImage src={image} width={300} alt="our products" />
        </ImageWrapper>
        <ProductDescription>
          <WeightCount>
            <ProductWeight>{weight} г</ProductWeight>
            <ProductCount>{count} шт</ProductCount>
          </WeightCount>
          <Header>{header}</Header>
          <Description>{description}</Description>
          <Price>{price} грн</Price>
        </ProductDescription>
      </ProductItemStyled>
    </ProductItemLink>
  );
};

export default ProductItem;
