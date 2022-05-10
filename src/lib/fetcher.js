import useSWR from 'swr'

export default function fetcher(query) {
    const url = 'https://api.rorret.info/app/graphql?query=' + query
    const fetchOptions = {
        cache: 'force-cache',
        credentials: 'omit',
    }

    return useSWR(
        [url],
        async () => {
            return fetch(url, fetchOptions).then((res) => res.json())
        },
        { suspense: true }
    )
}
