import styled from 'styled-components/macro';

const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  /* padding to compensate for scale(1.3) on images  */
  padding-bottom: 20px;
  overflow: hidden;

  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection === 'row' ? 'row' : 'column'};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) => props.margin && `margin : ${props.margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.3);
    overflow: hidden;
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }

    &:first-of-type {
      margin-left: 56px;

      @media (max-width: 1000px) {
        margin-left: 30px;
      }
    }

    &:last-of-type {
      margin-right: 56px;

      @media (max-width: 1000px) {
        margin-right: 30px;
      }
    }
  }
`;

const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

const FeatureText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${(props) => props.src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000;
  margin-top: 5px;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

const Maturity = styled.div`
  background-color: ${(props) => (props.rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 0.75rem;
`;

const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export {
  Container,
  Content,
  Entities,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Group,
  Title,
  SubTitle,
  Text,
  Maturity,
  Meta,
  Image,
  Item,
};
