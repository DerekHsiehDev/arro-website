import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from './BoxIcon';
import { Box } from './styles/box';
import { Flex } from './styles/flex';

export const Faq = () => {
  return (
    <>
      <Flex
        css={{
          py: '$20',
          gap: '$18',
          px: '$6',
        }}
        direction={'column'}
        id="faq"
      >
        <Flex align={'center'} direction={'column'}>
          <Text h1 color="primary" >
            FAQ
          </Text>
          <Text h2>Have Questions?</Text>
          <Text
            span
            css={{
              maxWidth: '700px',
              color: '$accents8',
              textAlign: 'center',
            }}
          >
          </Text>
        </Flex>

        <Flex
          css={{
            'gap': '$10',
            '@lg': {
              px: '$64',
            },
          }}
          direction={'column'}
        >
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                What is Arro Token, and how does it work?
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                Arro is a blockchain-based cryptocurrency that operates on the Ethereum network. It was created to facilitate fast and secure transactions between users, with the added benefit of decentralization. The token can be used to pay for goods and services, transfer funds, or be traded on various cryptocurrency exchanges.
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                How can I earn Arro Tokens on Arro Social Media App?
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                Users can earn Arro Tokens on Arro Social by participating in various activities such as creating content, commenting, liking, and sharing posts. The more engagement you generate on the platform, the more Arro Cryptocurrency Tokens you can earn.
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                How can I use Arro Cryptocurrency Tokens?
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                Arro Cryptocurrency Tokens can be used within the Arro Social Media App ecosystem to purchase premium features, boost visibility of posts, and access exclusive content. Users can also trade Arro Cryptocurrency Tokens on cryptocurrency exchanges.
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                How does Arro Social Media App pay users with crypto for their engagement?
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                Arro Social Media App pays users with crypto by sharing a portion of its advertising revenue with its users. As a user generates more engagement on the platform, they receive a higher payout in Arro Cryptocurrency Tokens. Users can then choose to hold or trade their tokens as they see fit.
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
