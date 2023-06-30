import qs from 'qs'

interface QueryObj {
    url: string,
    query?: object
}

export function NavigateQuery({url = '', query}: QueryObj) {
    const queryParams = query ? `${url}?${qs.stringify(query)}` : url;
    return queryParams;
}

export function getQueryParasm(url: string) {
    return qs.parse(url.substr(1))
}
