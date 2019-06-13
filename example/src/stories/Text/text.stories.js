import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Tooltip,
  Icon,
  Flex,
  Text,
  Button,
  Box,
  Heading,
  Input,
  Field,
  Link,
  Card,
  Pill,
} from 'rimble-ui';

storiesOf('Components/Text', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Text examples</Heading.h3>
          <Text>
            Different ways to use the <code>{'Text'}</code> component
          </Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>Default text</Heading.h4>

          <Text>
            By default, the Text component will render text inside a{' '}
            <code>{'<div>'}</code> element.
          </Text>
          <br />
          <CodeBlock>
            <Text>The intent of Ethereum is to...</Text>
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Text with span</Heading.h4>
          <Text>
            Renders text inside a <code>{'<span>'}</code> element.
          </Text>
          <br />
          <Text.span>The intent of Ethereum is to...</Text.span>
          <CodeBlock textOnly>
            {`<Text.span>The intent of Ethereum is to...</Text.span>`}
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Paragraph text</Heading.h4>
          <Text>
            Renders text inside a <code>{'<p>'}</code> element.
          </Text>
          <Text.p>The intent of Ethereum is to ... </Text.p>
          <CodeBlock textOnly>
            {`<Text.p>The intent of Ethereum is to ... </Text.p>`}
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Text with strikethrough</Heading.h4>
          <Text.s>The intent of Ethereum is to... </Text.s>
          <CodeBlock textOnly>
            {`<Text.s>The intent of Ethereum is to... </Text.s>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Bold Text</Heading.h4>
          <Text bold>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text bold>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Italic Text</Heading.h4>
          <Text italic>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text italic>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>

        <Box>
          <Heading.h4>Caps Text</Heading.h4>
          <Text caps>The intent of Ethereum is to...</Text>
          <CodeBlock textOnly>
            {`<Text caps>The intent of Ethereum is to...</Text>`}
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design</Heading.h3>
          <Text>
            Some best practices for using <code>{'Text'}</code>.
          </Text>
        </Box>
        <Box>
          <Heading.h4>
            Don't center-align your text if it's over 3 lines
          </Heading.h4>
          <Text.p>
            Centre-aligned text can make it more difficult to read
          </Text.p>
        </Box>

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Text>
              The intent of Ethereum is to create an alternative protocol for
              building decentralized applications, providing a different set of
              tradeoffs that we believe will be very useful for a large class of
              decentralized applications, with particular emphasis on situations
              where rapid development time, security for small and rarely used
              applications, and the ability of different applications to very
              efficiently interact, are important.
            </Text>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Text textAlign={'center'}>
              The intent of Ethereum is to create an alternative protocol for
              building decentralized applications, providing a different set of
              tradeoffs that we believe will be very useful for a large class of
              decentralized applications, with particular emphasis on situations
              where rapid development time, security for small and rarely used
              applications, and the ability of different applications to very
              efficiently interact, are important.
            </Text>
          </Card>
        </Flex>
        <br />
        <Box>
          <Heading.h4>
            Use <code>{'Heading'}</code> to break up long copy
          </Heading.h4>
          <Text.p>
            Use the <code>{'Heading'}</code> component to break up text and make
            it easier for users to find what they're looking for.
          </Text.p>
        </Box>

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Heading.h5>The intent of Ethereum</Heading.h5>
            <Text>
              To create an alternative protocol for building decentralized
              applications, providing a different set of tradeoffs that we
              believe will be very useful for a large class of decentralized
              applications.
            </Text>
            <Heading.h5>Where is this most important</Heading.h5>
            <Text>
              This is particularly important for rapid development time,
              security for small and rarely used applications, and the ability
              of different applications to very efficiently interact
            </Text>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Text>
              The intent of Ethereum is to create an alternative protocol for
              building decentralized applications, providing a different set of
              tradeoffs that we believe will be very useful for a large class of
              decentralized applications, with particular emphasis on situations
              where rapid development time, security for small and rarely used
              applications, and the ability of different applications to very
              efficiently interact, are important.
            </Text>
          </Card>
        </Flex>
        <br />
        <Box>
          <Heading.h4>Aim for a low reading age</Heading.h4>
          <Text.p>
            Make it easier for your users to read your copy. The lower the
            reading age, the simpler it will be for them to consume your
            information.{' '}
            <Link
              href="http://www.hemingwayapp.com"
              target="_blank"
              title="Hemingway Editor"
            >
              Hemingway app
            </Link>{' '}
            makes it easier to simplify your writing.
          </Text.p>
        </Box>

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Text>
              Write in short sentences and avoid complex terms when there are
              simpler alternatives.
            </Text>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Text>
              Use jargon, deliberately technical language or complex sentence
              structures.
            </Text>
          </Card>
        </Flex>
        <ContributeBanner />
      </Box>
    ))
  );
