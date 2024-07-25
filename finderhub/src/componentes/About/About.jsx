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
      <Heading>About Us</Heading>
      <Section>
        <SectionHeading>Welcome to FinderHub!</SectionHeading>
        <Paragraph>
          At FinderHub, our mission is to make connecting with people across
          social media platforms seamless and intuitive. Whether you’re looking
          for friends, colleagues, or influencers, we simplify your search by
          integrating top social media networks into one powerful tool.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>Our Vision</SectionHeading>
        <Paragraph>
          We believe in the power of connections. In a world that’s increasingly
          digital, finding and reaching out to the right people should be
          effortless. Our vision is to bridge the gap between users and their
          online presence, enhancing the way you interact with the digital
          world.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>What We Do</SectionHeading>
        <Paragraph>
          FinderHub allows you to search across the top 10 social media
          platforms:
        </Paragraph>
        <List>
          <ListItem>Facebook</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Instagram</ListItem>
          <ListItem>LinkedIn</ListItem>
          <ListItem>Snapchat</ListItem>
          <ListItem>TikTok</ListItem>
          <ListItem>Reddit</ListItem>
          <ListItem>Pinterest</ListItem>
          <ListItem>YouTube</ListItem>
          <ListItem>GitHub</ListItem>
        </List>
        <Paragraph>
          By unifying these platforms, we ensure you have all the information
          you need in one place. Our tool is designed for simplicity and
          efficiency, helping you find exactly who or what you're looking for
          without the hassle.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>Our Team</SectionHeading>
        <Paragraph>
          We are a dedicated group of developers, designers, and visionaries who
          are passionate about creating innovative solutions. Each team member
          brings unique skills and perspectives, driving us to continually
          improve and refine our services.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>Get In Touch</SectionHeading>
        <Paragraph>
          Have questions, feedback, or just want to say hello? We’d love to hear
          from you! Reach out to us at{" "}
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
