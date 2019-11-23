import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Modal from "react-native-modal";

const ModalTerm = ({isModalVisible, toggleModal}) => {
    return (
        <Modal 
            isVisible={isModalVisible}
            backdropColor="#fff"
            backdropOpacity={1}     
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={[styles.title, {color: '#000', fontSize: 25}]}>Terms of Service</Text>
                <ScrollView>
                    <Text style={styles.term}>
                    1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.  
                    </Text>
                    <Text style={styles.term}>
                    2. Support for Expo services is only available in English, via e-mail.
                    </Text>
                    <Text style={styles.term}>
                    3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
                    </Text>
                    <Text style={styles.term}>
                    4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 
                    </Text>
                    <Text style={styles.term}>
                    5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
                    </Text>
                    <Text style={styles.term}>
                    6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
                    </Text>
                    <Text style={styles.term}>
                    7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
                    </Text>
                    <Text style={styles.term}>
                    8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
                    </Text>
                    <Text style={styles.term}>
                    9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                    </Text>
                    <Text style={styles.term}>
                    10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
                    </Text>
                </ScrollView>
                <TouchableOpacity onPress={toggleModal}>
                    <LinearGradient 
                    style={{padding: 10}}
                    colors={['#0DC8B3', '#24D696']}
                    >
                    <Text style={styles.title}>I Understand</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}
const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        color: '#fff'
    },
    term: {
        fontSize: 14, 
        fontFamily: 'OpenSans-Bold',
        color: 'grey',
        margin: 5
    }
});
export default ModalTerm
