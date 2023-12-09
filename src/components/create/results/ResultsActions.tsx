import { ButtonGroup } from '@chakra-ui/react'
import SubmitBtn from '../../SubmitBtn'
import { useStore } from '../../../utils/store'
import SaveContentService from '../../../services/saveContentService'

const ResultsActions = () => {
    const resetContentGenerated = useStore(store => store.resetContentGenerated)
    const setCompleted = useStore(store => store.setCompleted)
    const { onSaveContent, isPending } = SaveContentService()
    ///// TODO: adding buttons actions
    // cancel action
    const handleCancel = () => {
        console.log("clicked")
        resetContentGenerated()
        setCompleted(false)
    }
    // save action
    const handleSave = () => {
        onSaveContent()
        setCompleted(false)
    }
    return (
        <ButtonGroup spacing='4'>
            <SubmitBtn variant='solid' size='sm' funcAction={handleSave} loading={isPending}>Save</SubmitBtn>
            <SubmitBtn variant='ghost' size='sm' funcAction={handleCancel}>Cancel</SubmitBtn>
        </ButtonGroup>
    )
}

export default ResultsActions