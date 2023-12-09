# Client side of the content generator

this is a react typescript application. for content generator it based on user input data and generates a content using the power of ai. you can fine the backend api [here](https://github.com/bouakram/ai-description-generator-api?tab=readme-ov-file)

-   **public**
-   **src**
    -   **assets**
    -   **components**
        -   **create**
        -   **form**
        -   **formComponents**
        -   **history**
        -   **main**
        -   **welcome**
        -   `Footer.tsx`
        -   `GoogleBtn.tsx`
        -   `Layout.tsx`
        -   `Navbar.tsx`
        -   `NoContentText.tsx`
        -   `SubmitBtn.tsx`
    -   **config**
        -   `themeconfig.tsx`
    -   **constants**
        -   `data.ts`
    -   **hooks**
        -   `useCopy.tsx`
        -   `usePlatformSelector.tsx`
    -   **pages**
        -   **authentication**
        -   **create**
        -   **history**
        -   **main**
        -   **welcome**
    -   **providers**
        -   `ChakraProvider.tsx`
        -   `ReactQueryProvider.tsx`
    -   **services**
        -   `authService.tsx`
        -   `deleteContent.tsx`
        -   `generateContentService.tsx`
        -   `lastContentService.tsx`
        -   `myContentService.tsx`
        -   `saveContentService.tsx`
        -   `topicService.tsx`
    -   **types**
        -   `type.ts`
    -   **utils**
        -   `store.ts`
    -   `App.tsx`
    -   `constants.tsx`
    -   `index.css`
    -   `index.tsx`

## Usage

install the dependencies

```shell
npm install
```

run the react app

```shell
npm run start
```

## ENV file

```dotenv
API_URL=your api url
```
