import { useFormik } from "formik"
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    VStack,
    Input, 
} from "@chakra-ui/react"
import * as Yup from 'yup'
import FullScreenSection from "../components/FullScreenSection";
import { Link } from "react-router-dom";



const Login = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must contain at least 8 characters, one letter, and one number"
            ).required("Required"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#0d1b2a"
            justifyContent="start"
            alignItems="center"
            spacing={8}
            p={8}
            py={16}
        >
            <VStack spacing={8} maxW="1024px" alignItems="center">
                <Heading as="h1" id="contact-us"
                    position="relative"
                    _before={{
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "#9b59b6",
                    }}
                > 
                    Login 
                </Heading> 

                <VStack spacing={8}> 
                    
                    <VStack spacing={8}>
                        <Box rounded="md" w="100%"  bg="rgba(127, 127, 127, 0.4)" boxShadow="lg" p={8}> 
                            <form  name="contact" method="POST">
                                <VStack>
                    
                                    <FormControl isInvalid={!!formik.errors.username  && formik.touched.username}>
                                        <FormLabel htmlFor="username">Username</FormLabel> 
                                        <Input 
                                            id="username" 
                                            name="username" 
                                            type="text"
                                            {...formik.getFieldProps("username")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={!!formik.errors.password && formik.touched.password}> 
                                        <FormLabel htmlFor="password">Password</FormLabel> 
                                        <Input 
                                            id="password" 
                                            name="password" 
                                            type="password" 
                                            {...formik.getFieldProps("password")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        
                                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage> 
                                    </FormControl> 
                                    <Button type="submit" colorScheme="purple" width="full"> 
                                        Login 
                                    </Button>
                                </VStack>
                            </form>
                        </Box>
                    </VStack>
                    <Link to="/sign-up">
                        <Button>
                            sign Up
                        </Button>
                    </Link>
                </VStack>
            </VStack>
        </FullScreenSection>
    )
}

export default Login;