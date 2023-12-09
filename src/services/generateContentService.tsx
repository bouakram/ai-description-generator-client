import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { API_URL } from '../constants'
import axios from 'axios'
import { GenerateFormSchema, GenerateType } from '../types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from '../utils/store'

export const GenerateContentService = () => {
    const setContentGenerated = useStore(store => store.setContentGenerated)
    const setGenerating = useStore(store => store.setGenerating)
    const setTopic = useStore(store => store.setTopic)
    const setPlatform = useStore(store => store.setPlatform)
    const setCompleted = useStore(store => store.setCompleted)
    const setIssue = useStore(store => store.setIssue)
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<GenerateType>({ resolver: zodResolver(GenerateFormSchema) })
    const { mutateAsync: generate, isPending, isSuccess, isError } = useMutation({
        mutationKey: ["generateContent"],
        mutationFn: async (prmptInfo: GenerateType) => {
            setGenerating(true)
            const response = await axios.post(`${API_URL}openai/generate`, prmptInfo, { withCredentials: true })
            reset()
            return response.data
        }
    })
    const onsubmit = (prmptInfo: GenerateType) => {
        setTopic(prmptInfo.Topic)
        setPlatform(prmptInfo.Social_Media_Platform)
        generate(prmptInfo, {
            onSuccess: ({ message }) => {
                console.log(message)
                setContentGenerated(message)
                setCompleted(true)
                setGenerating(false)
                setIssue(false)
            },
            onError: (error) => {
                setCompleted(true)
                setGenerating(false)
                setIssue(true)
                console.log(error)
            }
        })
    }
    return {
        handleSubmit,
        isPending,
        errors,
        onsubmit,
        register,
        setValue,
        isSuccess,
        isError
    }
}