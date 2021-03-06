import {
  Flex,
  Center,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ThemeSwitch } from '../../utils/grabber';
import BackgroundImage from '../../assets/img/background.jpeg';

export const Header = () => {
  const gradientColor = useColorModeValue(
    'rgba(255, 255, 255, 1)',
    'rgba(26, 32, 44, 1)',
  );

  return (
    <Flex
      as="header"
      w="100%"
      p={['2rem', '2rem', '3rem', '4rem', '5rem', '5rem 5rem 15rem 5rem']}
      justifyContent="space-between"
      position="relative"
    >
      <Center fontWeight={500}>
        <Heading
          as="h1"
          fontWeight={500}
          fontSize={['2rem', '2.3rem', '2.5rem', '2.7rem']}
        >
          Hotels Filter
        </Heading>
      </Center>
      <Center>
        <ThemeSwitch />
      </Center>
      <Center
        position="absolute"
        inset={0}
        zIndex={-10}
        opacity=".6"
        _before={{
          content: `''`,
          bottom: '-1px',
          left: 0,
          position: 'absolute',
          right: 0,
          height: '60%',
          background: `linear-gradient(
          180deg,
          rgba(0,0,0,0) 0%,
          ${gradientColor} 100%
        );`,
        }}
      >
        <Image
          src={BackgroundImage}
          alt="Header background image"
          objectFit="cover"
          w="100%"
          h="100%"
        ></Image>
      </Center>
    </Flex>
  );
};
