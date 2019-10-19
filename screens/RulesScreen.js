import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Color from 'color';

import Colors from '../constants/Colors';
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.element}>
        <Text style={styles.header}>1. Lorem ipsum</Text>
        <Text style={styles.text}>
          Dolor sit amet, consectetur adipiscing elit. Vivamus nec tincidunt diam.
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.header}>2. Curabitur</Text>
        <Text style={styles.text}>
          Id fermentum justo. Maecenas semper ligula quis dui placerat condimentum.
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.header}>3. Proin</Text>
        <Text style={styles.text}>
          Porta porttitor est, sed semper risus aliquam sed. Nullam non efficitur velit.
          Integer tellus tellus, commodo egestas efficitur quis, rhoncus vitae lorem.
          Donec in erat nec dui porta porta.
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.header}>4. Morbi pretium vehicula nisi</Text>
        <Text style={styles.text}>
          Non aliquet turpis malesuada ac. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Nam pulvinar nisl elementum, viverra velit in, dignissim lectus.
          Praesent ultrices mauris eget molestie feugiat. Phasellus rutrum lacus quis lectus
          finibus porttitor. Morbi scelerisque ipsum justo, at tincidunt.
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.header}>5. Vivamus at enim lectus</Text>
        <Text style={styles.text}>
          Nam vulputate porttitor molestie. Nam sapien tellus, dignissim sit
          amet mi id, pretium sollicitudin lacus. Sed eu mi felis. Etiam non
          est ac purus convallis varius. Ut fringilla orci vitae purus faucibus
          tempus at eu mauris. Nam in dui gravida, hendrerit nisi quis, imperdiet
          libero. Nullam felis felis, pellentesque hendrerit luctus vitae,
          condimentum vel erat. Suspendisse ac porta magna, id pharetra erat.
          Integer aliquam consequat dolor, eget malesuada lacus porttitor blandit.
          Ut et ante laoreet, pharetra eros non, laoreet nulla. Aliquam nibh arcu,
          congue at tempus in, sodales eget turpis. Cras vel congue augue.
          In pulvinar dolor augue, ut volutpat sapien cursus at. Curabitur ligula
          purus, viverra dictum nibh vel, lobortis consectetur tortor.
          Integer quis sagittis risus.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  element: {
    marginBottom: 20
  },
  header: {
    color: Color(Colors.blackGreenish).alpha(0.75).toString(),
    fontWeight: '600',
    fontSize: 18
  },
  text: {
    color: Color(Colors.blackGreenish).alpha(0.75).toString(),
    fontSize: 18
  }
});
