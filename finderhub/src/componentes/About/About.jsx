import React from "react";
import styled from "styled-components";

const AboutPageContainer = styled.div`
  max-width: 800px;
  margin: 10px auto 50px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionHeading = styled.h2`
  color: #555;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #666;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 8px 0;
  color: #444;
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <AboutPageContainer>
      <Heading>About Me</Heading>
      <Section>
        <SectionHeading>Welcome to FinderHub!</SectionHeading>
        <Paragraph>
          Hi, I'm Ephrem Mamo. My mission with FinderHub is to make connecting
          with people across social media platforms seamless and intuitive.
          Whether you’re looking for friends, colleagues, or influencers, I aim
          to simplify your search by integrating top social media networks into
          one powerful tool.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>My Vision</SectionHeading>
        <Paragraph>
          I believe in the power of connections. In a world that’s increasingly
          digital, finding and reaching out to the right people should be
          effortless. My vision is to bridge the gap between users and their
          online presence, enhancing the way you interact with the digital
          world.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>What I Do</SectionHeading>
        <Paragraph>
          FinderHub allows you to search across the top 10 social media
          platforms:
        </Paragraph>
        <List>
          <h3>Currently Working</h3>
          <ListItem>GitHub</ListItem>
          <h3>On Progress</h3>
          <ListItem>Facebook</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Instagram</ListItem>
          <ListItem>LinkedIn</ListItem>
          <ListItem>Snapchat</ListItem>
          <ListItem>TikTok</ListItem>
          <ListItem>Reddit</ListItem>
          <ListItem>Pinterest</ListItem>
          <ListItem>YouTube</ListItem>
        </List>
        <Paragraph>
          By unifying these platforms, I ensure you have all the information you
          need in one place. My tool is designed for simplicity and efficiency,
          helping you find exactly who or what you're looking for without the
          hassle.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>About Me</SectionHeading>
        <Paragraph>
          I'm a dedicated developer, designer, and visionary passionate about
          creating innovative solutions. My unique skills and perspectives drive
          me to continually improve and refine my services.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>Get In Touch</SectionHeading>
        <Paragraph>
          Have questions, feedback, or just want to say hello? I’d love to hear
          from you! Reach out to me at{" "}
          <ContactLink href="mailto:ephremmamo555@gmail.com">
            Ephrem Mamo
          </ContactLink>
          .
        </Paragraph>
      </Section>
    </AboutPageContainer>
  );
};

export default About;
