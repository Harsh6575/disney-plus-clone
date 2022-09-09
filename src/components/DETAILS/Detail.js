import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <BackGround>
        <img src="/images/detail-background.jpg" alt="" />
      </BackGround>
      <ImageTitle>
        <img src="/images/detail-title.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`;

const BackGround = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;

const Controls = styled.div`
display: flex;
align-items: center;
`;

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
  background: rgb(198, 198, 198);
}
`;

const TrailerButton = styled(PlayButton)``;

const AddButton = styled.button``;

const GroupWatchButton = styled.button``;