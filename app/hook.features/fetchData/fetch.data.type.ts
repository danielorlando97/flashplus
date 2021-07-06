export type fetchData<T> = {
    isLoading: boolean,
    isError: boolean,
    error: unknown, 
    data: T
}