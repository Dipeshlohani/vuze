import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import BannerCard from '../../components/card/BannerCard';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import SectionHeading from '../../components/title/SectionHeading';

const FeaturedItems = styled(Col)`
  height: 60px;
  width: 60px;
  margin: 2px;
`;
const FeaturedItemsWrapper = styled(Row)`
  min-height: 260px;
`;

const Featured = () => {
  const featuredItems = [
    {
      id: '1',
      image: '/assets/featured.svg'
    },
    {
      id: '16',
      image: '/assets/featured.svg'
    },
    {
      id: '2',
      image: '/assets/featured.svg'
    },
    {
      id: '3',
      image: '/assets/featured.svg'
    },
    {
      id: '4',
      image: '/assets/featured.svg'
    },
    {
      id: '5',
      image: '/assets/featured.svg'
    },
    {
      id: '6',
      image: '/assets/featured.svg'
    },
    {
      id: '7',
      image: '/assets/featured.svg'
    },
    {
      id: '8',
      image: '/assets/featured.svg'
    },
    {
      id: '9',
      image: '/assets/featured.svg'
    },
    {
      id: '10',
      image: '/assets/featured.svg'
    },
    {
      id: '11',
      image: '/assets/featured.svg'
    },
    {
      id: '12',
      image: '/assets/featured.svg'
    },
    {
      id: '13',
      image: '/assets/featured.svg'
    },
    {
      id: '14',
      image: '/assets/featured.svg'
    },
    {
      id: '15',
      image: '/assets/featured.svg'
    }
  ];
  return (
    <Section>
      <Container>
        <SectionHeading>Featured</SectionHeading>
        <Section>
          <Row>
            <Col flex="260px">
              <FeaturedItemsWrapper>
                {featuredItems.map(item => {
                  return (
                    <FeaturedItems key={item.id}>
                      <img
                        src={item.image}
                        alt="feat"
                        height="100%"
                        width="100%"
                      />
                    </FeaturedItems>
                  );
                })}
              </FeaturedItemsWrapper>
            </Col>
            <Col flex="auto">
              <BannerCard background="/assets/bg/card-bg.svg" height={260}>
                <div>
                  <img
                    style={{ position: 'absolute', left: 0, bottom: 0 }}
                    src="assets/bg/card-fg.svg"
                    alt="bg"
                    height={260}
                    width={300}
                  />
                </div>
              </BannerCard>
            </Col>
          </Row>
        </Section>
      </Container>
    </Section>
  );
};

export default Featured;
