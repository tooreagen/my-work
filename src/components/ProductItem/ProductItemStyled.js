import styled from 'styled-components';

export const ProductItemLink = styled.a`
  color: var(--main-text-color);
`;

export const ProductItemStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 18px;
  border: 2px solid transparent;
  border-radius: 16px;
  transition: 0.4s;
  &:hover {
    border-color: var(--accent-color);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const ProductImage = styled.img`
  object-fit: contain;
`;

export const ProductDescription = styled.div`
  margin-top: 30px;
`;

export const WeightCount = styled.div`
  display: flex;
  color: var(--second-text-color);
`;

export const ProductWeight = styled.span`
  padding-right: 5px;
`;

export const ProductCount = styled.span`
  padding-left: 5px;
  border-left: 1px solid var(--second-text-color);
`;

export const Header = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: var(--second-text-color);
`;

export const Price = styled.span`
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
  display: block;
`;
