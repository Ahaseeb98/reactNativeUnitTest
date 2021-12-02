import React from 'react';

import {View, Text, StyleSheet} from "react-native";

const Header = ({text}) => {
    return <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{text}</Text>
    </View>
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})