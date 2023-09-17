import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars,
 } from "@fortawesome/free-solid-svg-icons";
 import { Box, HStack, Button, Text } from "@chakra-ui/react";
 import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link,} from 'react-router-dom';




const Header = () => {
    const headerRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();


    const MenuItem = ({ children, ...props }) => (
    <Text
        as={Link}
        to={props.to}
        onClick={props.onClick}
        padding="10px"
        margin="5px 0"
        textDecoration="none"
        position="relative"
        _hover={{
            textDecoration: "none", 
            _before: {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: "#00a896", 
            },
            
        }}
    >
        {children}
    </Text>
);


    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos =  window.scrollY;
            const headerElement =  headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
                // Add bottom padding when the header is visible
                document.body.style.paddingTop = `${headerElement.clientHeight}px`; // Reset padding
            } else {
                headerElement.style.transform = "translateY(-200px)";
                // remove bottom padding when the header is not visible
                document.body.style.paddingTop = "0";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <Box 
            position="fixed"
            zIndex={2}
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#0d1b25"
            boxShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            ref={headerRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={12}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                > 
                    <Box fontSize="2xl">
                        <Link to="/" >
                        <span style={{ fontSize: "1.5em", fontWeight: "bold"}}>Event</span>
                            <span style={{ color: "#00a896", fontSize: ".7em", marginLeft: "0.2em" }}>
                                Naija
                            </span>                       
                        </Link>
                    </Box>
                    <nav>
                        <HStack spacing={8} display={{ base: "none", lg: "flex" }}>
                                <MenuItem to="/" >Home</MenuItem>
                                <MenuItem to="/about">About</MenuItem>
                                <MenuItem to="/gallery">Gallery</MenuItem>
                                <MenuItem to="/book-event">Book Event</MenuItem>
                                <MenuItem to="/contact-us">Contact Us</MenuItem>
                                <Button 
                                    as={Link}
                                    to="/login"
                                    backgroundColor="#6b5b95" color= "#fff" display="flex" alignItems="center"
                                    _hover={{backgroundColor: "#00a896", color: "#fff"}}
                                >
                                        Login
                                </Button>
                        </HStack>
                        <Button ref={btnRef} backgroundColor="#FFF" _hover={{backgroundColor: "#00a896"}} onClick={onOpen} display={{ base: "block", lg: "none" }}>
                            <FontAwesomeIcon icon={faBars}  />
                        </Button>
                        <Drawer 
                            isOpen={isOpen} 
                            placement="right" 
                            onClose={() => {
                                onClose(); // Close the Drawer when onClose is called
                            }} 
                            finalFocusRef={btnRef} >
                                <DrawerOverlay />
                                <DrawerContent backgroundColor="#6b5b95" color="#fff">
                                <DrawerCloseButton />
                                <DrawerBody display="flex" flexDirection="column" mt={100}>
                                    {/* Mobile Menu items */}
                                    <MenuItem to="/" onClick={() => {onClose(); }}>Home</MenuItem>
                                    <MenuItem to="/about" onClick={() => {  onClose(); }}>About</MenuItem>
                                    <MenuItem to="/gallery" onClick={() => {  onClose(); }}>Gallery</MenuItem>
                                    <MenuItem to="/book-event" onClick={() => {  onClose(); }}>Book Event</MenuItem>
                                    <MenuItem to="/contact-us" onClick={() => { onClose(); }}>Contact Me</MenuItem>
                                    <Link to="/login" onClick={() => { onClose(); }} >
                                        <Button
                                            backgroundColor="#6b5b95"
                                            color="#fff"
                                            display="flex"
                                            alignItems="center"
                                            _hover={{ backgroundColor: "#00a896", color: "#fff" }}
                                        >
                                            Login 
                                        </Button>
                                    </Link>
                                </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                    </nav>

                </HStack>
            </Box>
        </Box>
    )
}

export default Header;