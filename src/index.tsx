import ForgeUI, {
  render,
  useState,
  Fragment,
  Macro,
} from '@forge/ui';
import Result from './Result';
import InputForm from './InputForm';
import { countWords, sortWords } from './Utils';
import { WordCount } from './WordCount';
import { SortBy, SortOrder } from "./Enums";

const App = () => {
  const [formState, setFormState] = useState(undefined);
  const [wordCounts, setWordCounts] = useState(Array<WordCount>());

  const onSubmit = async (formData) => {
    setFormState(formData);
    let countArray: WordCount[] = countWords(formData.inputText.trim());
    let sortedArray: WordCount[] = sortWords(countArray, SortBy[formData.sortBy], SortOrder[formData.sortOrder]);
    setWordCounts(sortedArray);
  };

  return (
    <Fragment>
      <InputForm onSubmit={onSubmit} />
      {
        formState &&
        <Result inputText={formState.inputText} wordCounts={wordCounts} />
      }
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
