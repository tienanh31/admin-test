import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, thumbnail, price, status, priceSale, category_ID, brand_ID, color, description, insurance, state, ID } =
    product;
  const Update2 = () => {
    // 👇 Get input value from "event"

    const key = 'Name';
    localStorage.setItem(key, name);
    const key9 = 'Product_ID';
    localStorage.setItem(key9, ID);
    const key1 = 'Thumbnail';
    localStorage.setItem(key1, thumbnail);
    const key2 = 'Price';
    localStorage.setItem(key2, price);
    const key3 = 'state';
    localStorage.setItem(key3, state);
    const key4 = 'Category_ID';
    localStorage.setItem(key4, category_ID);
    const key5 = 'Brand_ID';
    localStorage.setItem(key5, brand_ID);
    const key6 = 'Color';
    localStorage.setItem(key6, color);
    const key7 = 'Description';
    localStorage.setItem(key7, description);
    const key8 = 'Insurance';
    localStorage.setItem(key8, insurance);
    window.location = `/dashboard/edit${category_ID}`;
  };
  return (
    <Card onClick={Update2}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={category_ID} src={thumbnail} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
