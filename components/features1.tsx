import { Divider, Grid, Text } from '@nextui-org/react';
import { IconAugmentedReality, IconBook, IconBook2, IconTelescope } from '@tabler/icons';
import React from 'react';
import { BoxIcon } from './BoxIcon';
import { FeatureIcon } from './FeatureIcon';
import { Box } from './styles/box';
import { Flex } from './styles/flex';

export const Features1 = () => {
  return (
    <>
      <Flex
        direction={'column'}
        css={{
          'gap': '1rem',
          'pt': '$20',
          'justifyContent': 'center',
          'alignItems': 'center',
          'px': '$6',
          '@sm': {
            justifyContent: 'space-around',
            px: '$32',
            flexDirection: 'row',
          },
          '@md': {
            px: '$64',
          },
        }}
        id="values"
      >
        <Flex direction="column">
          <Text h1 color="primary">
            Our Values
          </Text>
          <Text h2>Your Fair Share</Text>

          <Flex
            css={{
              py: '$10',
              gap: '$5',
            }}
          >
            <IconBook2 />
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>
                Our Story
              </Text>
              <Text
                span
                css={{
                  maxWidth: '400px',
                  color: '$accents8',
                }}
              >
                Arro is bringing the spirit of Robin Hood to life by reshaping the basics of social networking in order to give back to those who truly deserve it
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: '$10',
              gap: '$5',
            }}
          >
            <IconTelescope />
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>
                Our Vision
              </Text>
              <Text
                span
                css={{
                  maxWidth: '400px',
                  color: '$accents8',
                }}
              >
                Arro Social focuses on: sharing first, then building community, then earning crypto.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: '$10',
              gap: '$5',
            }}
          >
            <IconAugmentedReality />
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>
                Our Technology
              </Text>
              <Text
                span
                css={{
                  maxWidth: '400px',
                  color: '$accents8',
                }}
              >
                {
                  `We&apos;ve utilized blockchain technology to create the first social media platform with a borderless currency.`

                }
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={'center'}>
          <FeatureIcon />
        </Flex>
      </Flex>
      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
