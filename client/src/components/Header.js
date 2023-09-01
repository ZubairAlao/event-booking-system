import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars,
    faCircle,
 } from "@fortawesome/free-solid-svg-icons";
 import { Box, HStack, Button, Text } from "@chakra-ui/react";
 import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'


const Header = () => {
    const headerRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();


    const MenuItem = ({ children, ...props }) => (
    <Text
        as="a"
        href={props.href}
        onClick={props.onClick}
        padding="10px"
        margin="5px 0"
        textDecoration="none"
        position="relative"
        _hover={{
            textDecoration: "none", // Remove the default underline on hover
            _before: {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: "#f39c12", // Customize the underline color
            },
            // background: "gray.200", // Customize the background color on hover
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
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


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
            backgroundColor="#0d1432"
            ref={headerRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                > 
                    <Box fontSize="2xl">
                        <a href="/" onClick={() => handleClick("/")}>
                        <span style={{ fontSize: "1.5em", fontWeight: "bold"}}>Z</span>
                            <span style={{ color: "#f39c12", fontSize: ".7em", marginLeft: "0.2em" }}>
                                <FontAwesomeIcon icon={faCircle} />
                            </span>                       
                        </a>
                    </Box>
                    <nav>
                        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                                <MenuItem href="#about" onClick={handleClick("about")}>About</MenuItem>
                                <MenuItem href="#experience" onClick={handleClick("experience")}>Experience</MenuItem>
                                <MenuItem href="#projects" onClick={handleClick("projects")}>Projects</MenuItem>
                                <MenuItem href="#contactme" onClick={handleClick("contactme")}>Contact Me</MenuItem>
                        </HStack>
                        <Button ref={btnRef} backgroundColor="#FFF" _hover={{backgroundColor: "#f39c12"}} onClick={onOpen} display={{ base: "block", md: "none" }}>
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
                                <DrawerContent backgroundColor="#0d1432" color="#fff">
                                <DrawerCloseButton />
                                <DrawerBody display="flex" flexDirection="column" mt={100}>
                                    {/* Mobile Menu items */}
                                    <MenuItem href="#about" onClick={() => { handleClick("about"); onClose(); }}>About</MenuItem>
                                    <MenuItem href="#experience" onClick={() => { handleClick("experience"); onClose(); }}>Experience</MenuItem>
                                    <MenuItem href="#projects" onClick={() => { handleClick("projects"); onClose(); }}>Projects</MenuItem>
                                    <MenuItem href="#contactme" onClick={() => { handleClick("contactme"); onClose(); }}>Contact Me</MenuItem>
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