import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { Container, Stack, Typography, Button, MenuItem, Menu } from '@mui/material';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../Firebase-config';
// components
import Iconify from '../components/iconify';

import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function Products() {
  const [caterogy, setCaterogy] = useState();
  const Update = (event) => {
    // 👇 Get input value from "event"

    setCaterogy(event.target.value);
  };
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const Datatour = [
    {
      id: 'a0c76995-a32a-40b9-a57b-e477ec4cde82',
      cover: '/assets/images/products/product_1.jpg',
      name: 'Nike Air Force 1 NDESTRUKT',
      price: '44',
      priceSale: '44',
      status: 'new',
    },
    {
      id: 'a0c76995-a32a-40b9-a57b-e477ec4cde82',
      cover: '/assets/images/products/product_1.jpg',
      name: 'Nike Air Force 1 NDESTRUKT',
      price: '17.64',
      priceSale: '123',
      status: 'new',
    },
  ];
  const person = {
    id: 'a0c76995-a32a-40b9-a57b-e477ec4cde82',
    cover: '/assets/images/products/product_1.jpg',
    name: 'Nike Air Force 1 NDESTRUKT',
    price: 17.64,
    priceSale: 123,
    status: 'new',
  };
  const data1 = [];
  const [data, setData] = useState(data1);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Product/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData((pre) => [...pre, childSnapshot.val()]);
          Datatour.push(data);
        });
      },
      {
        onlyOnce: true,
      }
    );
    console.log(data);
  }, []);
  const Menu = ['Laptop', 'Keyboard', 'Mouse', 'Gamepad'];
  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchor(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchor(e.currentTarget);
    setOpen(true);
  };
  const [searchQuery, setSearchQuery] = useState('');

  const filterItems = (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase());
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <a href="/dashboard/newproduct">
          <Button variant="contained" onClick={handleClick} startIcon={<Iconify icon="eva:plus-fill" />}>
            New Product
          </Button>
        </a>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={data} />
      </Container>
    </>
  );
}
