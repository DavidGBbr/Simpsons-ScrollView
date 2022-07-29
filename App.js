import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';
import casal from './assets/casal.png';
import filhos from './assets/filhos.png';
import irmas from './assets/irmas.png';
import vovo from './assets/vovo.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Família Simpsons</Text>

      <View style={styles.card}>
        <Image source={casal} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>O casal</Text>
        <Text style={styles.cardParagraph}>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
        <Text style={styles.cardParagraph}>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson
        e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
      </View>

      <View style={styles.card}>
        <Image source={filhos} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>Os filhos</Text>
        <Text style={styles.cardParagraph}>Bartholomew Jojo ou apenas Bart é o filho mais velho e mais travesso.</Text>
        <Text style={styles.cardParagraph}>Lisa Marie é a filha do meio e a mais inteligente.</Text>
        <Text style={styles.cardParagraph}>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>

      <View style={styles.card}>
        <Image source={vovo} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>O Vovô</Text>
        <Text style={styles.cardParagraph}>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer 
        Simpson.</Text>
      </View>

      <View style={styles.card}>
        <Image source={irmas} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>As Cunhadas</Text>
        <Text style={styles.cardParagraph}>Patty e Selma são as irmãs de Margie e vivem de forma 'largada'.</Text>
      </View>
    </ScrollView>
  );
}