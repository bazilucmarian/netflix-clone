import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
  Meta,
  Item,
  Image,
} from "./styles/card";

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
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
export default Card;

export const CardGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
export const CardTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
export const CardSubtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
export const CardText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const CardMeta = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};
export const CardItem = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};

export const CardImage = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};

export const CardEntities = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>;
};
export const CardFeature = ({ children, category, ...restProps }) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>

        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
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
