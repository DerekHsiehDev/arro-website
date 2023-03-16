import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from './styles/box';
import { Flex } from './styles/flex';

export const Statistics = () => {
  return (
    <>
      <Box
        css={{
          pt: '$20',
          pb: '$16',
          px: '$6',
        }}
      >
        <Flex direction={'column'} align={'center'}>
          <Text
            h3
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
          <Flex direction={'column'}>
            <Text h2 color="primary">
              $869,700+
            </Text>
            <Text span css={{ textAlign: 'center' }} weight={'medium'}>
              Market Cap
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text h2 color="primary">
              1300+
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
              10+
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
