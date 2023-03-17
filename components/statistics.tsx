import { Button, Divider, Text } from '@nextui-org/react';
import { VisibilityObserver } from "reactjs-visibility";
import { CountUp, useCountUp } from 'use-count-up';

import React, { useEffect, useState } from 'react';
import { Box } from './styles/box';
import { Flex } from './styles/flex';

import { useRef } from 'react'

export const Statistics = () => {


  const [isCounting, setIsCounting] = useState(false);

  // const { marketCap } = useCountUp({ isCounting: isCounting, start: 0, end: 869700, duration: 2500 });
  // const employees = useCountUp({ isCounting: isCounting, start: 0, end: 10, duration: 2500 });
  // const users = useCountUp({ isCounting: isCounting, start: 0, end: 1300, duration: 2500 });


  const handleChangeVisibility = (visible: any) => {
    if (visible) {
      // begin count up animation
      setIsCounting(true);

    }
  };


  return (
    <>
      <Box
        css={{
          pt: '$20',
          pb: '$16',
          px: '$6',
        }}
        id="statistics"
      >

        <div>
          <Flex direction={'column'} align={'center'}>
            <Text
              h1
              css={{
                textAlign: 'center',
              }}
            >
              Over 3 Billion Arro Tokens in circulation
            </Text>
            <Text
              span
              css={{
                maxWidth: '800px',
                textAlign: 'center',
              }}
            >
            </Text>
          </Flex>
        </div>
        <Flex
          direction={'row'}
          wrap={'wrap'}
          justify={'center'}
          css={{
            'gap': '4rem',
            'pt': '$16',
            '@sm': {
              gap: '10rem',
            },
          }}
        >
          <VisibilityObserver
            onChangeVisibility={handleChangeVisibility}
          >
            <Flex direction={'column'}>
              <Text h2 color="primary">
                ${
                  <CountUp isCounting={isCounting} start={100000} end={869700} duration={1.9} thousandsSeparator="," />
                }+
              </Text>
              <Text span css={{ textAlign: 'center' }} weight={'medium'}>
                Market Cap
              </Text>
            </Flex>
          </VisibilityObserver>
          <Flex direction={'column'}>
            <Text h2 color="primary">
              {
                <CountUp isCounting={isCounting} start={1000} end={1300} duration={1.9} thousandsSeparator="," />
              }+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              Users
            </Text>
          </Flex>
          {/* <Flex direction={'column'}> */}
          {/*   <Text h2 color="primary"> */}
          {/*     $150+ */}
          {/*   </Text> */}
          {/*   <Text span css={{ textAlign: 'center' }} weight={'medium'}> */}
          {/*     Components */}
          {/*   </Text> */}
          {/* </Flex> */}
          <Flex direction={'column'}>
            <Text h2 color="primary">
              {
                <CountUp isCounting={isCounting} end={10} duration={1.9} thousandsSeparator="," />
              }+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              Employees
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
