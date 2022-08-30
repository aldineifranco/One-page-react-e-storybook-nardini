import React from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSize } from "./Breakpoints";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.6);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `};
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &:before {
      content: "\\2713\\0020";
    }
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   * Background image
   */
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu título",
// };

export default Hero;
