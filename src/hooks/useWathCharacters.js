import {watch} from 'vue';

export const useWatchCharacters = (valueToWatch, maxCharsCount = 50) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxCharsCount) {
      alert(`Only ${maxCharsCount} characters allowed go`);
    }
  })
}
