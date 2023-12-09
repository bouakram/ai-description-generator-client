import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../constants'
import { useToast } from '@chakra-ui/react'
import { useStore } from '../utils/store'

type contentType = {
    id: string,
    plateformname: string,
    topic: {
        topic: string
    },
    body: string
}[]

const MyContentService = () => {
    const toast = useToast()
    const platform = useStore(store => store.platform)
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['get-Content', platform],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}openai/content?platform=${platform}`, { withCredentials: true })
            return response.data.content as contentType
        }
    })

    if (isError) {
        toast({
            title: error.message,
            position: 'top',
            status: 'error',
            isClosable: true,
        })
    }
    return {
        data,
        isPending,
        isError,
        error
    }
}

export default MyContentService