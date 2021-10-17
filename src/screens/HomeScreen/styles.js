import { StyleSheet } from 'react-native';
import { width } from '../../Units'

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        width: width * 90,
        alignSelf: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 6.5 * width
    },
    listItem: {
        flexDirection: "row",
        alignItems: 'center',
        paddingBottom: 2 * width,
        paddingTop: 4 * width,
    },
    image: {
        resizeMode: "contain",
        height: 18 * width,
        width: 18 * width,
        borderRadius: 20 * width,
        marginRight: 6 * width
    },
    title: {
        fontWeight: 'bold',
        fontSize: 4 * width
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default styles;