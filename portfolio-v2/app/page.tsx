"use client";

import {
  Box,
  Container,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  SimpleGrid,
  Link,
  Separator, 
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { ColorModeButton } from "@/components/ui/color-mode";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toaster } from "@/components/ui/toaster";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const email = "jardimgabriel2022@gmail.com";

const handleCopyEmail = async () => {
  await navigator.clipboard.writeText(
    "jardimgabriel2022@gmail.com"
  );

  toaster.create({
    title: "Email copiado!",
    description: "Agora é só colar onde desejar.",
    type: "success",
  });
};

const projects = [
  {
    title: "MiniMoney",
    desc: "Controle financeiro simples com dashboard e categorização de gastos.",
    stack: "Next.js · Node · SQL",
    highlight: "Foco em organização financeira pessoal",
    href: "https://minimoney.vercel.app", // coloque seu link
    status: "online",
  },
  {
    title: "FootStats",
    desc: "Dashboard com dados do Brasileirão e visualização de estatísticas.",
    stack: "React · APIs · Charts",
    highlight: "Consumo de APIs esportivas",
    href: undefined,
    status: "developing",
  },
  {
    title: "ASOFY",
    desc: "Sistema de gestão de ASO para clínicas e empresas.",
    stack: "React · Node · Delphi",
    highlight: "Sistema corporativo real",
    href: undefined,
    status: "developing",
  },
];

export default function Home() {
  return (
    <Box bg="background" color="text" minH="100vh" scrollBehavior="smooth">
      {/* ================= NAVBAR ================= */}
      <Box
        position="fixed"
        top="0"
        w="100%"
        zIndex="1000"
        backdropFilter="blur(10px)"
        bg="surface"
        borderBottom="1px solid"
        borderColor="border"
      >
        <Container maxW="container.lg">
          <Flex h="72px" align="center" justify="space-between">
            <Heading size="md">GJ</Heading>

            <HStack gap={6} display={{ base: "none", md: "flex" }}>
              <Link href="#home">Home</Link>
              <Link href="#about">Sobre</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projetos</Link>
              <Link href="#contact">Contato</Link>
            </HStack>

            <ColorModeButton />
          </Flex>
        </Container>
      </Box>

      {/* ================= HERO ================= */}
      <Box id="home" pt="140px" pb="120px">
        <Container maxW="container.lg">
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Stack gap={6}>
              <Text color="muted">Olá, eu sou</Text>

              <Heading fontSize={{ base: "4xl", md: "6xl" }}>
                Gabriel Jardim
              </Heading>

              <Text fontSize="xl" color="muted" maxW="600px">
                Desenvolvedor Full Stack focado em criar aplicações modernas,
                escaláveis e com boa experiência de usuário.
              </Text>

              <HStack pt={6} gap={4}>
                <Link href="https://github.com/GabrielJM2023">
                  <FaGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-jardim-machado">
                  <FaLinkedin size={24} />
                </Link>
              </HStack>
            </Stack>
          </MotionBox>
        </Container>
      </Box>

      <Separator />

      {/* ================= ABOUT ================= */}
      <Box id="about" py="100px">
        <Container maxW="container.lg">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Stack gap={8}>
              <Heading>Sobre mim</Heading>

              {/* NARRATIVA PRINCIPAL (IMPORTANTE) */}
              <Text color="muted" fontSize="lg" lineHeight="1.8" maxW="800px">
                Desenvolvedor focado em construir aplicações web completas, com experiência em sistemas corporativos em Delphi e transição para stack moderna com React, Next.js e Node.js.
                Trabalho com foco em performance, integração de sistemas e experiência de usuário.
              </Text>

              {/* POSICIONAMENTO (DIFERENCIAL REAL) */}
              <Text color="muted" fontSize="md" lineHeight="1.7" maxW="800px">
                Atuo principalmente no desenvolvimento de interfaces modernas e APIs, integrando sistemas legados com soluções mais escaláveis e orientadas a produto.
                Tenho experiência prática com sistemas financeiros, dashboards e aplicações internas.
              </Text>

              {/* CARDS DE CONTEXTO */}
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} pt={4}>
                {[
                  {
                    title: "Frontend",
                    desc: "Interfaces modernas com React e Next.js focadas em performance e UX.",
                    highlight: "SPAs e PWAs",
                  },
                  {
                    title: "Backend",
                    desc: "APIs REST e integrações entre sistemas com Node.js.",
                    highlight: "Integração de sistemas",
                  },
                  {
                    title: "Sistemas",
                    desc: "Experiência com sistemas corporativos e integrações financeiras em Delphi.",
                    highlight: "Ambiente corporativo",
                  },
                ].map((item, i) => (
                  <MotionBox
                    key={item.title}
                    p={6}
                    bg="surface"
                    borderRadius="xl"
                    cursor="default"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    _hover={{
                      boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                      borderColor: "green.300",
                    }}
                  >
                    <Stack gap={2}>
                      <Heading size="md">{item.title}</Heading>

                      <Text fontSize="sm" color="muted">
                        {item.desc}
                      </Text>

                      <Text fontSize="xs" color="green.300">
                        {item.highlight}
                      </Text>
                    </Stack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Stack>
          </MotionBox>
        </Container>
      </Box>

      <Separator />

      {/* ================= SKILLS ================= */}
      <Box id="skills" py="100px">
        <Container maxW="container.lg">
          <Stack gap={10}>
            <Heading>Skills</Heading> 

            <Text color="muted" maxW="600px">
              Tecnologias que uso para construir interfaces, APIs e sistemas completos com foco em performance e escalabilidade.
            </Text>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
              {[
                {
                  name: "React",
                  desc: "Interfaces escaláveis com componentização e estado.",
                },
                {
                  name: "Next.js",
                  desc: "Aplicações SSR/SPA com foco em performance e SEO.",
                },
                {
                  name: "Node.js",
                  desc: "APIs REST e integrações entre sistemas.",
                },
                {
                  name: "TypeScript",
                  desc: "Tipagem para reduzir erros e escalar código.",
                },
                {
                  name: "Delphi",
                  desc: "Sistemas legados e integrações financeiras.",
                },
                {
                  name: "SQL",
                  desc: "Modelagem e consultas otimizadas de dados.",
                },
                {
                  name: "Git",
                  desc: "Controle de versão e fluxo de desenvolvimento.",
                },
                {
                  name: "Chakra UI",
                  desc: "UI moderna, consistente e acessível.",
                },
              ].map((skill, i) => (
                <MotionBox
                  key={skill.name}
                  p={6}
                  bg="surface"
                  borderRadius="xl"
                  position="relative"
                  overflow="hidden"
                  cursor="default"
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Heading size="sm">{skill.name}</Heading>

                  <Text
                    fontSize="sm"
                    color="muted"
                    mt={2}
                    opacity={0.85}
                  >
                    {skill.desc}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Separator />

      {/* ================= PROJECTS ================= */}
      <Box id="projects" py="100px">
        <Container maxW="container.lg">
          <Stack gap={10}>
            <Heading>Projetos</Heading>

            <Text color="muted" maxW="600px">
              Projetos pessoais e sistemas que desenvolvi para resolver problemas
              reais e evoluir minha stack full stack.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
              {projects.map((project, i) => (
                <MotionBox
                  key={project.title}
                  p={6}
                  bg={project.status === "online" ? "surface" : "gray.900"}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={
                    project.status === "online"
                      ? "green.400"
                      : "gray.700"
                  }
                  opacity={project.status === "online" ? 1 : 0.75}
                  cursor={project.status === "online" ? "pointer" : "default"}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={
                    project.status === "online"
                      ? {
                          y: -10,
                          scale: 1.02,
                        }
                      : {
                          y: -4,
                        }
                  }
                  _hover={{
                    boxShadow: "0 18px 45px rgba(0,0,0,.25)",
                  }}
                >
                  <Stack gap={3}>
                    {/* STATUS */}
                    <Box
                      w="fit-content"
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg={
                        project.status === "online"
                          ? "green.500"
                          : "gray.600"
                      }
                    >
                      <Text fontSize="xs" color="white">
                        {project.status === "online"
                          ? "● Online"
                          : "● Em desenvolvimento"}
                      </Text>
                    </Box>

                    <Heading size="md">{project.title}</Heading>

                    <Text fontSize="sm" color="muted">
                      {project.desc}
                    </Text>

                    <Text fontSize="xs" color="green.300">
                      {project.highlight}
                    </Text>

                    <Text fontSize="xs" color="muted">
                      {project.stack}
                    </Text>

                    <Button
                      mt={3}
                      size="sm"
                      colorPalette={
                        project.status === "online"
                          ? "green"
                          : "gray"
                      }
                      as="a"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={project.status !== "online"}
                    >
                      {project.status === "online"
                        ? "Ver projeto"
                        : "Em breve"}
                    </Button>
                  </Stack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Separator />

      {/* ================= CONTACT ================= */}
      <Box id="contact" py="100px">
        <Container maxW="container.lg">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Stack gap={6}>
              <Heading>Contato</Heading>

              <Text color="muted">
                Tem uma ideia, projeto ou oportunidade? Vamos conversar. Estou sempre aberto a novos desafios e colaborações.
              </Text>

              <HStack gap={4} wrap="wrap">
                <Button
                  colorPalette="green"
                  onClick={handleCopyEmail}
                  _hover={{ transform: "translateY(-2px)" }}
                >
                  Email
                </Button>

                <Button
                  as="a"
                  href="https://www.linkedin.com/in/gabriel-jardim-machado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  LinkedIn
                </Button>

                <Button
                  as="a"
                  href="https://github.com/GabrielJM2023"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  GitHub
                </Button>
              </HStack>
            </Stack>
          </MotionBox>
        </Container>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box py="40px" borderTop="1px solid" borderColor="border">
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text color="muted">© 2026 Gabriel Jardim</Text>
            <Text color="muted">Feito com Next.js + Chakra UI</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}