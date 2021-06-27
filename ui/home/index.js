import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Featured from './Featured';
import Store, { useStore } from "./store";
import { getAlbums } from "./reducer";

const BodyWrapper = styled.section`
  background: #1c1c1c 0% 0% no-repeat padding-box;
`;
const Home = () => {
  const [state, dispatch] = useStore();
  useEffect(() => {
    dispatch(getAlbums());
  }, []);
  return (
    <Store>
      <BodyWrapper>
        <Navbar />
        <Featured />
        <Albums />
      </BodyWrapper>
    </Store>
  );
};

export default Home;
