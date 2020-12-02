import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import {
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
  Item,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

const Card = (props) => {
  const { children, ...restProps } = props;
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = function CardGroup(props) {
  const { children, ...restProps } = props;
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle(props) {
  const { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle(props) {
  const { children, ...restProps } = props;
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Entities = function CardEntities(props) {
  const { children, ...restProps } = props;
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Text = function CardText(props) {
  const { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta(props) {
  const { children, ...restProps } = props;
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem(props) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  const { children, item, ...restProps } = props;
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Feature = function CardFeature(props) {
  const { children, category, ...restProps } = props;
  const { showFeature, setShowFeature, itemFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Image = function CardImage(props) {
  const { src, ...restProps } = props;
  return <Image src={src} {...restProps} />;
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.Image.propTypes = {
  src: PropTypes.string,
};

Card.Feature.propTypes = {
  category: PropTypes.string,
};

Card.Item.propTypes = {
  item: PropTypes.object,
};

export default Card;
