import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <>
      <Container>
        <Header>
          <Logo>Login</Logo>
          <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/shop">Shop</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/accessories">Accessories</NavItem>
            <NavItem to="/help">Help</NavItem>
          </Nav>
        </Header>
        <Hero>
          <HeroText>
            <h1>Welcome Back</h1>
            <p>Please log in to your account</p>
          </HeroText>
        </Hero>
        <Section>
          <SectionTitle>Login</SectionTitle>
          <LoginForm onSubmit={handleSubmit}>
            <LoginInput
              type="email"
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <LoginInput
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <CTAButton>
              {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
            </CTAButton>
            {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
          </LoginForm>
          <SignupLink>
            Don't have an account? <Link to="/register">Sign up</Link>
          </SignupLink>
        </Section>
        <Footer>
          <SocialLinks>
            {/* Add your social media links here */}
            <SocialLink href="https://facebook.com" target="_blank">
              Facebook
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank">
              Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">
              Instagram
            </SocialLink>
          </SocialLinks>
          <ContactInfo>
            <p>Contact us at: support@mylogin.com</p>
          </ContactInfo>
        </Footer>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #333;
  color: #fff;
`;

const HeroImage = styled.img`
  width: 50%;
  height: auto;
`;

const HeroText = styled.div`
  width: 50%;
  text-align: center;
`;

const CTAButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Section = styled.section`
  width: 100%;
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 300px;
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
`;

export default Login;
