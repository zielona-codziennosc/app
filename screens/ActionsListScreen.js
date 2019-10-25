import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import ActionsCategories from '../constants/ActionsCategories';
import Action from '../components/Action';

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
      <ScrollView style={styles.actionsList}>
        {sampleActions.map((action) => (
          <Action
            style={styles.marginBottom}
            key={action.id}
            {...action}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const sampleActions = [
  {
    id: "1",
    image: {
      uri: 'https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    imageAuthor: "Vladislav Vasnetsov",
    title: "Segreguj śmieci",
    description: "Segregowanie odpadów jest równie ważne jak oszczędne i racjonalne zakupy. W obu przypadkach dbamy nie tylko o urodę i zdrowie otaczającego nas świata, ale również o zawartość naszego portfela. Klikaj                      za każdym razem jak posegregujesz śmieci."
  },
  {
    id: "2",
    image: {
      uri: 'https://thereview.ca/wp-content/uploads/2018/07/bathroom-black-and-white-blur-615326.jpg'
    },
    imageAuthor: "Skitterphoto",
    title: "Umyj zęby bez lania wody",
    description: "Dźwięk płynącej wody może być uspokajający, ale wierzymy, że możesz wytrzymać bez niego bez jej marnowania. Zawsze możesz skorzystać ze słuchawek"
  },
  {
    id: "3",
    image: {
      uri: 'http://blog.edisonnation.com/wp-content/uploads/2015/08/compost-709020_640.jpg'
    },
    imageAuthor: "Ben Kerckx",
    title: "Nakarm robaczki",
    description: "Dzięki kompostowaniu możesz przeciwdziałać marnowaniu żywności. Kompostuj coś każdego dnia, przetworzone jedzenie będzie najlepszym nawozem!"
  },
  {
    id: "4",
    image: {
      uri: 'https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    imageAuthor: "Vladislav Vasnetsov",
    title: "Segreguj śmieci",
    description: "Segregowanie odpadów jest równie ważne jak oszczędne i racjonalne zakupy. W obu przypadkach dbamy nie tylko o urodę i zdrowie otaczającego nas świata, ale również o zawartość naszego portfela. Klikaj                      za każdym razem jak posegregujesz śmieci."
  }
]

const styles = StyleSheet.create({
  categoriesList: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    marginRight: 10
  },
  actionsList: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  marginBottom: {
    marginBottom: 20
  }
});
