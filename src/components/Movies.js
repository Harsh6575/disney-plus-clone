import React from 'react';
import styled from 'styled-components';
// import { selectMovies } from '../features/movie/movieSlice';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = () => {

    // const movies = useSelector(selectMovies);

    return (
        <Container>
            <h4>
                Recommended for You
            </h4>
            <Content>
                {/* {movies && movies.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))} */}
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1258/911258-v" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6365/936365-v" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1691/1011691-v-657881703c09" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1744/1041744-v-f84d36239d74" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1514/1161514-v-8c2341c419fd" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9310/1269310-v-9bea143faf9b" alt="" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to={`/detail`}>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7973/1317973-v-f6a964bf4713" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

export default Movies;

const Container = styled.div`
overflow: hiiden;
margin-bottom: 30px;
`;

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
border: 3px solid rgba(249, 249, 249, 0.1);
border-radius: 10px;
overflow: hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`;