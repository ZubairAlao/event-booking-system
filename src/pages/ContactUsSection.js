import { useFormik } from "formik"
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Textarea,
    VStack,
    Input, 
    Text,
    Checkbox,
} from "@chakra-ui/react"
import * as Yup from 'yup'
import FullScreenSection from "../components/FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link} from 'react-router-dom';





const contactMessage = `Have any questions or suggestions? We would be happy to hear from you.`
const socials = [
    {
        icon: faEnvelope,
        url: "mailto: Alaozubair@example.com", 
    },
    {
        icon: faGithub,
        url: "https://github.com/ZubairAlao", 
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/zubairAlao", 
    },
    {
        icon: faTwitter,
        url: "https://twitter.com/Zubair_Coder", 
    },
    {
        icon: faWhatsapp,
        url: "https://wa.me/08130030894", 
    },
    {
        icon: faPhone,
        url: "tel:08130030894", 
    },
];
const ContactUsSection = () => {
        /** 
            * Covers a complete form implementation using formik and yup for validation 
        */

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            message: "",
            agreeToTerms: false, 
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string()
            .min(15, "Must be atleast 15 characters")
            .required("Required"),
            agreeToTerms: Yup.boolean()
            .oneOf([true], "You must agree to the terms")
            .required("You must agree to the terms"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#0d1b2a"
            justifyContent="center"
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
                    Contact Us 
                </Heading> 

                <VStack spacing={8}> 
                    
                    <VStack spacing={8}>
                        <Box rounded="md" w="100%"  bg="rgba(127, 127, 127, 0.4)" boxShadow="lg" p={8}> 
                            <form  name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                                <p style={{ display: 'none' }}>
                                    <label>
                                        Don’t fill this out if you’re human: <input name="bot-field" />
                                    </label>
                                </p>
                                <input type="hidden" name="form-name" value="contact" /> 

                                <VStack spacing={4}>
                                    <VStack spacing={2} alignItems="flex-start">
                                    <Text fontSize="xl" fontWeight="bold">
                                        Message Us
                                    </Text>
                                    <Text>
                                        {contactMessage}
                                    </Text>
                                </VStack>
                                    <FormControl isInvalid={!!formik.errors.name  && formik.touched.name}>
                                        <FormLabel htmlFor="name">Name</FormLabel> 
                                        <Input 
                                            id="name" 
                                            name="name" 
                                            type="text"
                                            {...formik.getFieldProps("name")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                                    </FormControl>
                                    
                                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                                        <FormLabel htmlFor="email">Email Address</FormLabel> 
                                        <Input 
                                            id="email" 
                                            name="email" 
                                            type="email" 
                                            {...formik.getFieldProps("email")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
                                    </FormControl>

                                    <FormControl isInvalid={!!formik.errors.message && formik.touched.message}> 
                                        <FormLabel htmlFor="message">Your Message</FormLabel> 
                                        <Textarea 
                                            id="message" 
                                            name="message" 
                                            height={250} 
                                            {...formik.getFieldProps("message")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.message}</FormErrorMessage> 
                                    </FormControl> 
                                    <FormControl  isInvalid={!!formik.errors.agreeToTerms && formik.touched.agreeToTerms}> 
                                        <FormLabel htmlFor="agreeToTerms" display="flex" alignItems="center">
                                            <Checkbox
                                                id="agreeToTerms"
                                                name="agreeToTerms"
                                                isChecked={formik.values.agreeToTerms}
                                                onChange={() => formik.setFieldValue("agreeToTerms", !formik.values.agreeToTerms)}
                                                colorScheme='green' mr={3}
                                            />
                                                I agree to EventNaija
                                                <Link color="blue.500" to="/terms-of-use" target="_blank" rel="noopener noreferrer">
                                                Terms of Use
                                                </Link>
                                                {" "}and{" "}
                                                <Link color="blue.500" to="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                                Privacy Policy
                                                </Link>
                                        </FormLabel>                                        
                                        <FormErrorMessage>{formik.errors.agreeToTerms}</FormErrorMessage> 
                                    </FormControl> 

                                    <Button type="submit" colorScheme="purple" width="full"> 
                                        Submit 
                                    </Button>
                                </VStack>
                            </form>
                        </Box>

                        <VStack alignItems="flex-start" w="100%" spacing={8}>
                            <Text fontSize="xl">
                                Follow Us
                            </Text>
                            <HStack spacing={4}>
                                {socials.map(({icon, url}) => (
                                    <a  
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={icon} size="2x" key={url} 
                                            />
                                    </a>
                                ))}
                            </HStack>
                            <VStack spacing={4} alignItems="start">
                                <Text fontSize="xl">
                                    Contact details
                                </Text>
                                <VStack spacing={2} alignItems="start"> 
                                    <Text fontSize="xl">Email: eventnaija@gmail.com</Text>
                                    <Text fontSize="xl">Phone: (+234) 8020020894</Text>
                                    <Text fontSize="xl">Office: Osogbo, Nigeria</Text>
                                </VStack>
                            </VStack>
                        </VStack>

                    </VStack>
                </VStack>
            </VStack>
        </FullScreenSection>
    )
}

export default ContactUsSection;