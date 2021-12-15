import ForgeUI, {
    Form,
    TextArea,
    RadioGroup,
    Radio
} from '@forge/ui';
import { SortBy, SortOrder } from "./Enums";

function InputForm({ onSubmit }) {
    return (
        <Form submitButtonText="Let's start counting!" onSubmit={onSubmit}>
            <TextArea name="inputText" label="Your input field" isRequired={true}></TextArea>
            <RadioGroup name="sortBy" label="Sort results by">
                <Radio defaultChecked label="Word" value={SortBy.word}></Radio>
                <Radio label="Count" value={SortBy.count}></Radio>
            </RadioGroup>
            <RadioGroup name="sortOrder" label="Sort order by">
                <Radio defaultChecked label="Ascending" value={SortOrder.asc}></Radio>
                <Radio label="Descending" value={SortOrder.desc}></Radio>
            </RadioGroup>
        </Form>
    )
}

export default InputForm;