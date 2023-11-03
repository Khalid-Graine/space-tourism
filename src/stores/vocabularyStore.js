import { defineStore } from "pinia";

export const useVocabularyStore = defineStore({
  isloading: false,
  id: "loggedInUser",
  state: () => ({
    name: "gooooooood",
    words: [],
  }),
  getters: {
    WordsCount() {
      return this.words.length;
    },
    save() {
      // Save the updated words array to local storage after adding a new card.
      localStorage.setItem("vocabularyWords", JSON.stringify(this.words));
      console.log('test')
    },
    RandomArray() {
      let arr = []
      for (let index = 0; index < 4; index++) {
        arr.push(this.words[Math.floor(Math.random() * this.words.length)])
        
      }
      return arr
    },
    
  },
  actions: {
    // Add a getter to load data from local storage when the store is created.
    loadWordsFromLocalStorage() {
      const savedWords = localStorage.getItem("vocabularyWords");
      if (savedWords) {
        this.words = JSON.parse(savedWords);
      }
    },
    addNewCard(Card) {
      let newCard = {
        id: this.words.length,
        word: Card.word,
        definition: Card.definition,
        progress: 0,
        examples: Card.examples,
        
      };
      this.words.push(newCard);
      
     this.save;
    },
    deleteWord(index) {
      this.words = this.words.filter((word, i) => i !== index);
      this.save;
    },
    plus(index) {
      this.words[index].progress++
      // console.log(this.words)
      // console.log(undefined === 0)
     console.log(this.words[index].progress)
      // console.log( this.words.findIndex(index))
    },
    howMany(ex) {
      return this.words.filter((word) => word.progress).length
     }
 
  },
  
  // Add a lifecycle hook to load data from local storage when the store is created.
  onInit() {
    this.loadWordsFromLocalStorage();
  } 
});

