import axios from "axios"
import { API_URL } from "../constants"
import { useToast } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"

type listTopicType = {
    text: string,
    value: number
}[]
type topicType = {
    id: string,
    topic: string
}

const TopicServices = () => {
    const toast = useToast()
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['topic'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}openai/topic`, { withCredentials: true })
            const topic = response.data.topic.map((topic: topicType) => {
                return {
                    text: topic.topic,
                    value: Math.floor(Math.random() * (1000 - 100 + 1)) + 200
                };
            }) as listTopicType
            return topic
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

export default TopicServices