import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    return (
        <Nav>
            <Logo src="/images/logo.svg" alt='logos' />
            <NavMenu>
                <a href='/'>
                    <img src="/images/home-icon.svg" alt='logos' />
                    <span>HOME</span>
                </a>
                <a href='/'>
                    <img src="/images/search-icon.svg" alt='logos' />
                    <span>SEARCH</span>
                </a>
                <a href='/'>
                    <img src="/images/watchlist-icon.svg" alt='logos' />
                    <span>WATCHLIST</span>
                </a>
                <a href='/'>
                    <img src="/images/original-icon.svg" alt='logos' />
                    <span>ORIGINALS</span>
                </a>
                <a href='/'>
                    <img src="/images/movie-icon.svg" alt='logos' />
                    <span>MOVIES</span>
                </a>
                <a href='/'>
                    <img src="/images/series-icon.svg" alt='logos' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Link to='/login'>
                <UserImg src="/logo192.png" alt='logos' />
            </Link>
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
height: 70px;
background: linear-gradient(to bottom, #141b29, #0c111b 300px);
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`;

const Logo = styled.img`
width: 80px;
`;

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left: 25px;
align-items: center;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color:inherit;
    text-decoration: none;

    img{
        height: 20px;
    }

    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content: '';
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom:-6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }

}`;

const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`;
