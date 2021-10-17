import { StyleSheet } from 'react-native';
import { width, height } from '../../Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(180,180,180,0.4)'
  },
  blurView: {
    backgroundColor: 'grey',
    width: width * 80,
    height: height * 30,
    marginTop: height * 38,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 3,
    paddingBottom: height * 4,
    paddingTop: height * 3
  },
  topContainer: {
    width: width * 73,
    alignItems: 'flex-end'
  },
  userInfoContainer: {
    marginTop: width * 4
  },
  image: {
    resizeMode: "contain",
    height: width * 22,
    width: width * 22,
    borderRadius: 20 * width,
  }
});

export default styles;