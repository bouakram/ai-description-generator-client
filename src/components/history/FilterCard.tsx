import { Card, CardBody, CardHeader, Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { createFormData } from '../../constants/data'
import usePlatformSelector from '../../hooks/usePlatformSelector'
import { useStore } from '../../utils/store'

type Props = {}

const FilterCard = (props: Props) => {
    const setplatform = useStore(store => store.setPlatform)
    const platform = useStore(store => store.platform)
    const { getPlatform } = usePlatformSelector()
    return (
        <Card border='1px' borderEnd='4px' borderBottom='4px' borderColor='inherit' w='full' p={4}>
            <CardHeader>
                <Heading size='sm'>Filter by platform</Heading>
            </CardHeader>
            <CardBody>
                <RadioGroup onChange={setplatform} value={platform} defaultValue={platform}>
                    <Stack spacing={5} direction='row' wrap='wrap'>
                        <Radio value={""} colorScheme='teal'>all</Radio>
                        {
                            createFormData.platform.map((platform) => (
                                <Radio key={platform} value={platform} colorScheme='teal'>
                                    <Stack alignItems='center' spacing={2} direction='row'>
                                        {getPlatform(platform)}
                                        <Text>{platform}</Text>
                                    </Stack>
                                </Radio>
                            ))
                        }
                    </Stack>
                </RadioGroup>
            </CardBody>
        </Card>
    )
}

export default FilterCard