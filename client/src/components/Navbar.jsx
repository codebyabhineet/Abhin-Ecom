import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

import 'rsuite/dist/rsuite.min.css';
import React, { useState } from 'react';
import { Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  margin-left: 320px;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  margin-left: 65px;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // const products = useSelector((state) => state.cart.products);
  // console.log(quantity);
  // console.log(products);
  const [active, setActive] = useState('home');
  const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav
        {...props}
        activeKey={active}
        onSelect={onSelect}
        style={{ marginBottom: 5 }}>
        <Nav.Item eventKey="lifestyle">LifeStyle</Nav.Item>
        <Nav.Item eventKey="beauty">Beauty</Nav.Item>
        <Nav.Item eventKey="intertenment">Intertanment</Nav.Item>
        <Nav.Menu title="Festival">
          <Nav.Item>Java</Nav.Item>
          <Nav.Item>C++</Nav.Item>
          <Nav.Item>Android dev</Nav.Item>
          <Nav.Item>Web Dev</Nav.Item>
        </Nav.Menu>
        <Nav.Item eventKey="wellness">Wellness</Nav.Item>
        <Nav.Item eventKey="health">Health</Nav.Item>
        <Nav.Item eventKey="shopping">Shopping</Nav.Item>
        <Nav.Item eventKey="culture">Culture</Nav.Item>
      </Nav>
    );
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <MenuItem>Store</MenuItem>
          </Link>
        </Left>
        <Center>
          <div>
            <div
              style={{
                padding: 20,
                textAlign: 'center',
              }}>
              <Navbar
                appearance="subtle"
                active={active}
                onSelect={setActive}
              />
            </div>
          </div>
        </Center>
        <Right>
          <Link to="/login">
            <MenuItem style={{ color: 'rgb(255, 83, 108)' }}>SIGN_IN</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem style={{ color: 'rgb(255, 83, 108)' }}>REGISTER</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem style={{ color: 'rgb(255, 83, 108)' }}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
