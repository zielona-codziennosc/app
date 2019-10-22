import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import ActionsCategories from '../constants/ActionsCategories';

export default function ActionsListScreen(props) {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(0);
  const { style, navigation } = props;

  const onActionCategoryClick = (id) => {
    setSelectedCategoryId(id);
    //selectAction(id)
  };

  const onActionClick = (id) => {
    //openAction(id)
  };

  return (
    <View style={({ ...styles.container, ...style })}>
      <ScrollView style={styles.categoriesList} horizontal>
        {ActionsCategories.map((category) => {
          const categoryNotSelected = selectedCategoryId !== category.id;

          return (
            <View
              key={category.id}
              style={styles.categoryButton}
            >
              <Button
                text={category.name}
                action={() => onActionCategoryClick(category.id)}
                size={ButtonSizes.big}
                color={ButtonColors.green}
                disabled={categoryNotSelected}
              />
            </View>
          );
        })}
      </ScrollView>
      <ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  categoriesList: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  categoryButton: {
    marginRight: 10
  }
});
