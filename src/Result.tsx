import ForgeUI, {
    Fragment,
    SectionMessage,
    Text,
    Table,
    Head,
    Cell,
    Row
} from '@forge/ui';
import { WordCount } from './WordCount';

function Result({inputText, wordCounts}) {
    return (
        <Fragment>
            <SectionMessage appearance="confirmation">
                <Text>You entered:</Text>
                <Text>{inputText}</Text>
            </SectionMessage>
            <Table>
                <Head>
                    <Cell>
                        <Text>Word</Text>
                    </Cell>
                    <Cell>
                        <Text>Count</Text>
                    </Cell>
                </Head>
                {
                    wordCounts.map((wordCount: WordCount) => {
                        return (
                            <Fragment>
                                <Row>
                                    <Cell>
                                        <Text>{wordCount.word}</Text>
                                    </Cell>
                                    <Cell>
                                        <Text>{wordCount.count}</Text>
                                    </Cell>
                                </Row>
                            </Fragment>
                        );
                    })
                }
            </Table>
        </Fragment>
    )
}

export default Result;