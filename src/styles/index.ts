import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background: #FF0000;
    overflow: hidden;

    .offset {}

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7dbb91;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }
    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }
  .second {
    background: #00FF00;
  }
  .third {
    background: #FFFF00;
  }
  .fourth {
    background: #0000FF;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;