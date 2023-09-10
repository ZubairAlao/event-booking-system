import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

  
const PrivacyPolicy = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            px={{base: "8", md: "24"}}
            py={16}
            
        >
            <Heading as="h1" id="#faq" color="#000"
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
                Terms of Use
            </Heading>

            <VStack align="start" spacing={4}>
          <Text>
            This Privacy Policy explains how Event Naija collects, uses, and protects your personal information when you use our website and services, located at EventNaija.com.
          </Text>
          <Text>
            By accessing or using our website and services, you consent to the practices described in this Privacy Policy.
          </Text>
          <Text>
            <strong>1. Information We Collect</strong>
            <br />
            We may collect personal information such as your name, email address, phone number, and payment details when you use our services.
          </Text>
          <Text>
            <strong>2. How We Use Your Information</strong>
            <br />
            We use your personal information to process event bookings, communicate with you, provide customer support, and improve our services.
          </Text>
          <Text>
            <strong>3. Data Security</strong>
            <br />
            We take reasonable measures to protect your personal information, but we cannot guarantee its absolute security. Please take steps to keep your account information secure.
          </Text>
          <Text>
            <strong>4. Sharing Your Information</strong>
            <br />
            We may share your information with event organizers to facilitate bookings and with service providers who assist us in providing our services.
          </Text>
          <Text>
            <strong>5. Cookies</strong>
            <br />
            We use cookies to improve your experience on our website. You can adjust your browser settings to disable cookies if you prefer.
          </Text>
          <Text>
            <strong>6. Your Choices</strong>
            <br />
            You can update your account information and communication preferences at any time. You can also request the deletion of your account and personal information.
          </Text>
          <Text>
            <strong>7. Changes to this Privacy Policy</strong>
            <br />
            We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant changes.
          </Text>
          <Text>
            <strong>8. Contact Us</strong>
            <br />
            If you have any questions about this Privacy Policy, please contact us at eventnaija@gmail.com.
          </Text>
        </VStack>

            
        </FullScreenSection>
    )
}

export default PrivacyPolicy;