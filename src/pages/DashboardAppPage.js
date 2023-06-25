import { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { getDatabase, ref, set, get, onValue, remove } from 'firebase/database';

// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const Datatour = [];
  const Datatour1 = [];
  const Datatourl = [];
  const Datatourm = [];
  const Datatourh = [];
  const Datatourk = [];
  const Datatourg = [];

  const Datatour2 = [];

  const Datatour3 = [];

  const Datatour4 = [];
  const Datatour5 = [];
  const Datatour6 = [];
  const Datatour7 = [];
  const Datatour8 = [];

  const [data8, setData8] = useState(Datatour);
  const [datal, setDatal] = useState(Datatourl);
  const [datam, setDatam] = useState(Datatourm);
  const [datak, setDatak] = useState(Datatourk);
  const [datag, setDatag] = useState(Datatourg);
  const [datah, setDatah] = useState(Datatourh);
  const [data5, setData5] = useState(Datatour5);
  const [data6, setData6] = useState(Datatour6);
  const [data7, setData7] = useState(Datatour7);

  const arr = [
    { id: 1, salary: 10 },
    { id: 2, salary: 20 },
    { id: 3, salary: 30 },
  ];
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'App_user/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData5((pre) => [...pre, childSnapshot.val()]);
          Datatour5.push(data5);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Order/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData6((pre) => [...pre, childSnapshot.val()]);
          Datatour6.push(data5);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  const [cache, setCache] = useState('');
  const cacheCart = [];
  const [cache1, setCache1] = useState('');

  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Cart/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setCache((pre) => [...pre, childSnapshot.val()]);
          cacheCart.push(cache);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  console.log(cache);
  const people1 = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Mary', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
  ];
  console.log(people1);
  const [productList, setProductList] = useState([]);

  // Lấy giá trị 'name' từ mỗi đối tượng trong mảng people1 và lưu vào mảng people2
  useEffect(() => {
    if (Array.isArray(cache)) {
      const newProductList = cache.map((product) => {
        const product_ID = product.product_ID;
        return { product_ID };
      });
      setProductList(newProductList);
    }
  }, [cache]);

  console.log(productList);
  const productList1 = [{ product_ID: 1 }, { product_ID: 2 }, { product_ID: 3 }];
  const [cache3, setCache3] = useState([]);
  const cacheCart3 = [];
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const cacheCart3 = [];
    productList.forEach((product) => {
      const productID = product.product_ID;
      const starCountRef = ref(db, `Product/${productID}`);
      get(starCountRef)
        .then((snapshot) => {
          cacheCart3.push(snapshot.val());
          if (cacheCart3.length === productList.length) {
            setCache3(cacheCart3);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [productList]);
  console.log(cache3);
  const [countSell, setcountSell] = useState([]);

  // Lấy giá trị 'name' từ mỗi đối tượng trong mảng people1 và lưu vào mảng people2
  useEffect(() => {
    if (Array.isArray(cache)) {
      const newcountSell = cache3.map((product) => {
        const category_ID = product.category_ID;
        return { category_ID };
      });
      setcountSell(newcountSell);
    }
  }, [cache3]);
  console.log(countSell);
  const target = 'Laptop';
  const count = countSell.reduce((acc, val) => {
    return val.category_ID.toLowerCase() === target.toLowerCase() ? acc + 1 : acc;
  }, 0);
  console.log(count);
  const target2 = 'Headphone';
  const count2 = countSell.reduce((acc, val) => {
    return val.category_ID.toLowerCase() === target2.toLowerCase() ? acc + 1 : acc;
  }, 0);
  console.log(count2);
  const target3 = 'Keyboard';
  const count3 = countSell.reduce((acc, val) => {
    return val.category_ID.toLowerCase() === target3.toLowerCase() ? acc + 1 : acc;
  }, 0);
  console.log(count3);
  const target4 = 'Mouse';
  const count4 = countSell.reduce((acc, val) => {
    return val.category_ID.toLowerCase() === target4.toLowerCase() ? acc + 1 : acc;
  }, 0);
  console.log(count4);
  const target5 = 'Gamepad';
  const count5 = countSell.reduce((acc, val) => {
    return val.category_ID.toLowerCase() === target5.toLowerCase() ? acc + 1 : acc;
  }, 0);
  console.log(count5);
  const cacheOrder = [];
  const [cachee, setCachee] = useState('');

  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Order/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setCachee((pre) => [...pre, childSnapshot.val()]);
          cacheOrder.push(cachee);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  const [totalOrder, setTotalOrder] = useState([]);

  useEffect(() => {
    if (Array.isArray(cachee)) {
      const formattedOrders = cachee.map((order) => {
        const order_date = order.order_date;
        const order_total = order.order_total;
        const order_status = order.order_status;

        return { order_date, order_total, order_status };
      });
      setTotalOrder(formattedOrders);
    }
  }, [cachee]);
  console.log(totalOrder);
  const formattedOrders = totalOrder.map((order) => {
    const date = new Date(order.order_date);
    const formattedDate = date.toISOString().substring(0, 10);
    return { order_date: formattedDate };
  });
  console.log(totalOrder.order_status);
  const array = [
    '01-01-2003',
    '02/01/2003',
    '03/01/2003',
    '04/01/2003',
    '05/01/2003',
    '06/01/2003',
    '07/01/2003',
    '08/01/2003',
    '09/01/2003',
    '10/01/2003',
    '11/01/2003',
    '12/01/2003',
  ];
  console.log(formattedOrders);
  const prices = formattedOrders.map((product) => product.order_date);
  console.log(prices);
  const firstDays = prices.map((date) => {
    const month = new Date(date).getMonth() + 1;
    let quarterStart;
    if (month >= 1 && month <= 3) {
      quarterStart = new Date(new Date(date).getFullYear(), 0, 2);
    } else if (month >= 4 && month <= 6) {
      quarterStart = new Date(new Date(date).getFullYear(), 3, 2);
    } else if (month >= 7 && month <= 9) {
      quarterStart = new Date(new Date(date).getFullYear(), 6, 2);
    } else {
      quarterStart = new Date(new Date(date).getFullYear(), 9, 2);
    }
    return quarterStart.toISOString().slice(0, 10);
  });

  console.log(firstDays);
  const countOrder = firstDays.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});

  console.log(countOrder);

  const countOrderValues = Object.values(countOrder).map((number) => Number(number));
  console.log(countOrderValues);

  const uniqueStrings = firstDays.filter((string, index) => {
    return firstDays.indexOf(string) === index;
  });
  console.log(faker.date.past());
  console.log(uniqueStrings);
  const sortedDates = uniqueStrings.sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB;
  });

  console.log(sortedDates);
  const quarterlyTotals = totalOrder.reduce(
    (totals, transaction) => {
      const month = new Date(transaction.order_date).getMonth() + 1;
      if (month >= 1 && month <= 3) {
        totals.a += parseInt(transaction.order_total, 10);
      } else if (month >= 4 && month <= 6) {
        totals.b += parseInt(transaction.order_total, 10);
      } else if (month >= 7 && month <= 9) {
        totals.c += parseInt(transaction.order_total, 10);
      } else {
        totals.d += parseInt(transaction.order_total, 10);
      }
      return totals;
    },
    { a: 0, b: 0, c: 0, d: 0 }
  );

  console.log(quarterlyTotals); // { a: 450, b: 725, c: 850, d: 1000 }
  const numberValues = Object.values(quarterlyTotals).map((number) => Number(number));
  console.log(numberValues);
  const [totalPrice, setTotalPrice] = useState([]);

  // Lấy giá trị 'name' từ mỗi đối tượng trong mảng people1 và lưu vào mảng people2
  useEffect(() => {
    if (Array.isArray(cachee)) {
      const newcountSell = cachee.map((product) => {
        const order_total = product.order_total;
        return { order_total };
      });
      setTotalPrice(newcountSell);
    }
  }, [cachee]);
  console.log(totalPrice);
  const newArray = totalPrice.map((obj) => {
    const order_total = parseInt(obj.order_total, 10);
    return { ...obj, order_total };
  });

  console.log(newArray);
  const sum = newArray.reduce((acc, obj) => acc + obj.order_total, 0);
  console.log(sum);
  // In mảng people2 để kiểm tra xem giá trị đã được lưu thành công hay chưa
  // const product = [];
  // cache.forEach((id) => {
  //   const product_ID = id.product_ID;
  //   product_ID.push({ product_ID });
  // });

  // In mảng people2 để kiểm tra xem giá trị đã được lưu thành công hay chưa
  // console.log(product);
  // const ids = [];
  // for (const key in cache) {
  //   if (cache.hasOwnProperty(key)) {
  //     ids.push(cache[key].ID);
  //   }
  // }
  // const IdArray = [];

  // useEffect(() => {
  //   for (let i = 0; i < data.length; i += 1) {
  //     IdArray.push(cache[i].key);
  //   }
  // }, [cache]);
  // console.log(IdArray);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Order/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData7((pre) => [...pre, childSnapshot.val()]);
          Datatour7.push(data7);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);

  const Test = [
    { id: 1, value: '123' },
    { id: 2, value: '456' },
    { id: 3, value: '789' },
    { id: 4, value: '321' },
    { id: 5, value: '654' },
  ];
  const sumValues = (data7) => {
    return data7.reduce((sum, obj) => sum + parseInt(obj.total, 10), 0);
  };

  const sumValues1 = sumValues(data7); // Output: 3

  console.log(data7);
  const countObjects = (data5) => {
    return data5.length;
  };
  console.log(data5.length);
  const objectCount = countObjects(data6); // Output: 3

  const totalValue = sumValues(data5);
  console.log(objectCount);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Liked/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData8((pre) => [...pre, childSnapshot.val()]);
          Datatour8.push(data8);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  const date = ['2022-12-15', '2022-12-30', '2023-04-01', '2022-08-15', '2023-11-30'];
  const countObjects1 = (data8) => {
    return data8.length;
  };
  const objectCount1 = countObjects1(data8); // Output: 3

  console.log(data5.length);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Laptop/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setDatal((pre) => [...pre, childSnapshot.val()]);
          Datatourl.push(datal);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Mouse/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setDatam((pre) => [...pre, childSnapshot.val()]);
          Datatourm.push(datam);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Keyboard/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setDatak((pre) => [...pre, childSnapshot.val()]);
          Datatourk.push(datak);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Headphone/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setDatah((pre) => [...pre, childSnapshot.val()]);
          Datatourh.push(datah);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Gamepad/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setDatag((pre) => [...pre, childSnapshot.val()]);
          Datatourg.push(datag);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Revenue" total={sum} icon={'simple-icons:sellfy'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number Users" total={data5.length} color="info" icon={'ep:user-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Sold Products"
              total={cachee.length}
              color="warning"
              icon={'material-symbols:order-approve'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Liked" total={objectCount1} color="error" icon={'ic:baseline-adobe'} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Revenue"
              chartLabels={sortedDates}
              chartData={[
                {
                  name: 'Order',
                  type: 'column',
                  fill: 'solid',
                  data: countOrderValues,
                },
                {
                  name: 'Cache Revenue',

                  type: 'area',
                  fill: 'gradient',
                  data: numberValues,
                },
                {
                  name: 'Revenue',
                  type: 'line',
                  fill: 'solid',
                  data: numberValues,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Selled"
              chartData={[
                { label: 'Laptop', value: count },
                { label: 'Mouse', value: count4 },
                { label: 'Keyboard', value: count3 },
                { label: 'Gamepad', value: count5 },
                { label: 'HeadPhone', value: count2 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Current Amount"
              chartData={[
                { label: 'Laptop', value: datal.length / 2 },
                { label: 'Mouse', value: datam.length / 2 },
                { label: 'Gamepad', value: datag.length / 2 },
                { label: 'Keyboard', value: datak.length / 2 },
                { label: 'Headphone', value: datah.length / 2 },
                {
                  label: 'Total',
                  value: (datal.length + datam.length + datah.length + datak.length + datag.length) / 2,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Goals Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'To Present',
                  'Sell 10000 products',
                  'Sell 1000 products',
                  'Brand development',
                  'App is created',
                ][index],
                type: `order${index + 1}`,
                time: ['19 Dec 2023', '07 Jul 2022 ', '04 Mar 2023 ', '31 Dec 2022 ', '01 Dec 2022'][index],
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
