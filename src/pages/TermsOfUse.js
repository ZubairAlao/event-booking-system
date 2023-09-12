import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Heading, Text, VStack } from "@chakra-ui/react";


  
const TermsOfUse = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            p={8}
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
            Welcome to Event Naija!
          </Text>
          <Text>
            These terms and conditions govern your use of Event Naija and the services provided through the website, located at EventNaija.com. By accessing or using the website and our services, you agree to be bound by these Terms.
          </Text>
          <Text>
            <strong>1. Acceptance of Terms</strong>
            <br />
            By using our website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
          </Text>
          <Text>
            <strong>2. User Registration</strong>
            <br />
            To book events through our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Text>
          <Text>
            <strong>3. Booking and Payments</strong>
            <br />
            When booking events through our website, you agree to abide by the event's terms and conditions, including payment terms. We are not responsible for any disputes between you and event organizers.
          </Text>
          <Text>
            <strong>4. Privacy Policy</strong>
            <br />
            Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our data practices.
          </Text>
          <Text>
            <strong>5. Termination</strong>
            <br />
            We reserve the right to terminate or suspend your account and access to our website at our sole discretion, without notice, for any conduct that we believe violates these Terms.
          </Text>
          <Text>
            <strong>6. Disclaimer of Warranties</strong>
            <br />
            Our website and services are provided "as is" and without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or availability of our website or services.
          </Text>
          <Text>
            <strong>7. Limitation of Liability</strong>
            <br />
            In no event shall Event Naija or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </Text>
          <Text>
            <strong>8. Governing Law</strong>
            <br />
            These Terms are governed by and construed in accordance with the laws of Federal Republic of Nigeria.
          </Text>
          <Text>
            <strong>9. Contact Us</strong>
            <br />
            If you have any questions about these Terms, please contact us at eventnaija@gmail.com.
          </Text>
        </VStack>
            
        </FullScreenSection>
    )
}

export default TermsOfUse;