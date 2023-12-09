import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../constants"
import { useToast } from "@chakra-ui/react"
import { useStore } from "../utils/store"

type dataType = {
    contentGenerated: string[],
    platform: string,
    topic: string
}

const SaveContentService = () => {
    const toast = useToast()
    const resetContentGenerated = useStore(store => store.resetContentGenerated)
    const contentGenerated = useStore(store => store.contentGenerated)
    const topic = useStore(store => store.topic)
    const platform = useStore(store => store.platform)
    const data = {
        contentGenerated: contentGenerated,
        platform: platform,
        topic: topic
    }
    const { mutateAsync: saveContent, isPending } = useMutation({
        mutationKey: ['saveContent'],
        mutationFn: async (data: dataType) => {
            await axios.post(`${API_URL}openai/content`, data, { withCredentials: true })
        }
    })
    const onSaveContent = () => {
        saveContent(data, {
            onSuccess: () => {
                toast({
                    title: 'successfully saved',
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
                resetContentGenerated()
            },
            onError: () => {
                toast({
                    title: 'something went wrong',
                    position: 'top',
                    status: 'success',
                    isClosable: true,
                })
            }
        })
    }
    return {
        onSaveContent,
        isPending
    }
}

export default SaveContentService