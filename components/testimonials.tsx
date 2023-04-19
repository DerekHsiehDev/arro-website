import { Button, Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { QuotesIcon } from './QuotesIcon';
import { Flex } from './styles/flex';

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={'column'}
        css={{
          'gap': '1rem',
          'justifyContent': 'center',
          'alignItems': 'center',
          'px': '$6',
          'py': '$20',
          'flexDirection': 'column-reverse',
          '@sm': {
            justifyContent: 'space-around',
            px: '$32',
            flexDirection: 'row-reverse',
          },
          '@md': {
            px: '$64',
          },
        }}
        id="testimonials"
      >
        <Flex direction="column" css={{ gap: '1.5rem' }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    I love Arro.io! How awesome is it that I earn crypto while posting and watching advertisers! They are truly taking the concept of social media and giving it back to the end-user.
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Brian Kenney {' '}
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - Head of Computer Science at Centennial
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    {`Arro Social is not only an amazing social platform but it&apos;s also built on decentralized technology which means my data is more secure and private.`}
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Nathan Nguyen {' '}
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - TikTok Influencer
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    Arro is the coolest social app out there! Not only can I connect with my friends and discover new content, but the crypto tracking feature is super helpful in keeping me up-to-date on my Arro Tokens.
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Shivansh Soni{' '}
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - Student and avid user of Arro
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={'start'}
          direction={'column'}
          css={{
            'alignItems': 'center',
            '@sm': {
              alignItems: 'start',
            },
          }}
        >
          <Text h1>Testimonials</Text>
          <Text h2 color="primary">From our wonderful users</Text>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
