import React, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../components/context/firebase";
import { Loading } from "../components/loading/index";
import { ReleaseBody } from "../components/loading/styles/loading";

import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import Header, {
  HeaderFeature,
  HeaderText,
  HeaderFeatureCallOut,
  HeaderFrame,
  HeaderLogo,
  HeaderTextLink,
  HeaderGroup,
  HeaderPicture,
  HeaderProfile,
  HeaderDropdown,
  HeaderSearch,
  HeaderPlayButton,
} from "../components/header/index";

import Card, {
  CardGroup,
  CardTitle,
  CardEntities,
  CardItem,
  CardImage,
  CardMeta,
  CardSubtitle,
  CardText,
  CardFeature,
} from "../components/card/index";
import { PlayButton } from "../components/header/styles/header";
import FooterContainer from "./footer";

import Player, { PlayerVideo, PlayerButton } from "../components/player/index";

const BrowserContainer = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <HeaderFrame>
          <HeaderGroup>
            <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix"></HeaderLogo>
            <HeaderTextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </HeaderTextLink>
            <HeaderTextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </HeaderTextLink>
          </HeaderGroup>
          <HeaderGroup>
            <HeaderSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <HeaderProfile>
              <HeaderPicture src={user.photoURL} />
              <HeaderDropdown>
                <HeaderGroup>
                  <HeaderPicture src={user.photoURL} />
                  <HeaderTextLink>{user.displayName}</HeaderTextLink>
                </HeaderGroup>
                <HeaderGroup>
                  <HeaderTextLink onClick={() => firebase.auth().signOut()}>
                    Logout
                  </HeaderTextLink>
                </HeaderGroup>
              </HeaderDropdown>
            </HeaderProfile>
          </HeaderGroup>
        </HeaderFrame>
        <HeaderFeature>
          <HeaderFeatureCallOut>Watch Joker Now</HeaderFeatureCallOut>
          <HeaderText>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </HeaderText>
          <HeaderPlayButton>Play</HeaderPlayButton>
        </HeaderFeature>
      </Header>

      <CardGroup>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <CardTitle>{slideItem.title}</CardTitle>
            <CardEntities>
              {slideItem.data.map((item) => (
                <CardItem item={item} key={item.docId}>
                  <CardImage
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  ></CardImage>
                  <CardMeta>
                    <CardSubtitle>{item.title}</CardSubtitle>
                    <CardText>{item.description}</CardText>
                  </CardMeta>
                </CardItem>
              ))}
            </CardEntities>
            <CardFeature category={category}>
              <Player>
                <PlayerButton>Play</PlayerButton>
                <PlayerVideo src="/videos/bunny.mp4" />
              </Player>
            </CardFeature>
          </Card>
        ))}
      </CardGroup>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
export default BrowserContainer;
