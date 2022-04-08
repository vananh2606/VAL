import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                {/* <Text style={{ color: 'black'}}>HEADER</Text> */}
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo/VAL-logo.png')}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icon/plus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icon/like.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>0</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/icon/chat.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',

    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginTop: 10,
        resizeMode: 'contain',
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 30,
        width: 20,
        height: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },

    unreadBadgeText: {
        color: 'black',
        fontWeight: '600',

    }
})

export default Header