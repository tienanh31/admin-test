import { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
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

  const Datatour2 = [];

  const Datatour3 = [];

  const Datatour4 = [];
  const Datatour5 = [];
  const Datatour6 = [];
  const Datatour7 = [];
  const Datatour8 = [];

  const [data8, setData8] = useState(Datatour);
  const [data, setData] = useState(Datatour);
  const [data1, setData1] = useState(Datatour1);
  const [data2, setData2] = useState(Datatour2);
  const [data3, setData3] = useState(Datatour3);
  const [data4, setData4] = useState(Datatour4);
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

  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Payment/');
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
          setData((pre) => [...pre, childSnapshot.val()]);
          Datatour.push(data);
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
          setData1((pre) => [...pre, childSnapshot.val()]);
          Datatour1.push(data1);
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
          setData2((pre) => [...pre, childSnapshot.val()]);
          Datatour2.push(data2);
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
          setData3((pre) => [...pre, childSnapshot.val()]);
          Datatour3.push(data3);
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
          setData4((pre) => [...pre, childSnapshot.val()]);
          Datatour4.push(data4);
        });
      },

      {
        onlyOnce: true,
      }
    );
  }, []);
  console.log(data4.length);
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Sold Products" total={sumValues1} icon={'simple-icons:sellfy'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number Users" total={data5.length} color="info" icon={'ep:user-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Item Orders"
              total={objectCount}
              color="warning"
              icon={'material-symbols:order-approve'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Liked" total={objectCount1} color="error" icon={'ic:baseline-adobe'} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Selled"
              chartData={[
                { label: 'Laptop', value: 4443 },
                { label: 'Mouse', value: 5435 },
                { label: 'Keyboard', value: 1443 },
                { label: 'Gamepad', value: 4443 },
                { label: 'HeadPhone', value: 4443 },
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
                { label: 'Laptop', value: data.length },
                { label: 'Mouse', value: data1.length },
                { label: 'Gamepad', value: data4.length },
                { label: 'Keyboard', value: data2.length },
                { label: 'Headphone', value: data3.length },
                { label: 'Total', value: data.length + data1.length + data2.length + data3.length + data4.length },
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
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
